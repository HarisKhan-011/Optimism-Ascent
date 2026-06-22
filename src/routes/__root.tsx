import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import socialImage from "../assets/riyadh-skyline.jpg";
import { SmoothScroll } from "../components/SmoothScroll";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { createSeo } from "../lib/seo";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl text-[var(--gold)]">404</div>
        <h2 className="mt-2 font-display text-2xl">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has moved or doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-full bg-[var(--navy)] text-warm-white px-6 py-3 text-sm"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex rounded-full bg-[var(--navy)] text-warm-white px-6 py-3 text-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const homeSeo = createSeo({
  title: "Optimism For Business & Consulting — Saudi Arabia",
  description: SITE_DESCRIPTION,
  path: "/",
  socialTitle: SITE_NAME,
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/favicon.svg"),
      image: absoluteUrl(socialImage),
      description: SITE_DESCRIPTION,
      email: "hello@optimism.sa",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      sameAs: ["https://www.linkedin.com/in/ibrahimhussaien/"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-SA",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0f1b3d" },
      { name: "application-name", content: SITE_NAME },
      ...homeSeo.meta,
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Header />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
