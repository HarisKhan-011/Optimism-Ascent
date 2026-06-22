import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/services", priority: "0.9" },
          { path: "/industries", priority: "0.8" },
          { path: "/process", priority: "0.7" },
          { path: "/results", priority: "0.8" },
          { path: "/about", priority: "0.7" },
          { path: "/insights", priority: "0.6" },
          { path: "/contact", priority: "0.9" },
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${absoluteUrl(e.path)}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
