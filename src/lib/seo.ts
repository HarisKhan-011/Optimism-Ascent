import socialImage from "@/assets/riyadh-skyline.jpg";
import { absoluteUrl, SITE_NAME } from "./site";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  socialTitle?: string;
};

const SOCIAL_IMAGE_URL = absoluteUrl(socialImage);

export function createSeo({ title, description, path, socialTitle = title }: SeoOptions) {
  const canonicalUrl = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: SITE_NAME },
      { property: "og:title", content: socialTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_SA" },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:alt", content: "Riyadh skyline in Saudi Arabia" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: socialTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:image:alt", content: "Riyadh skyline in Saudi Arabia" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
