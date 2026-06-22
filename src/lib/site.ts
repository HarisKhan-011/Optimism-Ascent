export const SITE_NAME = "Optimism For Business & Consulting";
export const SITE_URL = "https://optimism.sa";
export const SITE_DESCRIPTION =
  "Saudi-based business development, financial, and administrative consulting. We help organizations operate sharper, grow faster, and align with Vision 2030.";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
