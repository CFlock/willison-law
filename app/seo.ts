export const SITE_NAME = "Willison Law, PC";
export const SITE_URL = "https://www.willisonlawpc.com";
export const DEFAULT_TITLE = "Prescott Family Law Attorney | Willison Law, PC";
export const DEFAULT_DESCRIPTION =
  "Compassionate family law and estate planning representation in Prescott, Arizona. Divorce, child custody, support, mediation, and more.";
export const DEFAULT_IMAGE = "/logo.png";

function appendBrand(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function buildPageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const pageTitle = appendBrand(title);
  const url = `${SITE_URL}${path}`;

  return [
    { title: pageTitle },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: `${SITE_URL}${DEFAULT_IMAGE}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}${DEFAULT_IMAGE}` },
    { rel: "canonical", href: url },
  ];
}
