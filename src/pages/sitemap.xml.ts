// Le plan du site pour les moteurs de recherche : chaque page en français et en anglais,
// chacune liée à son autre langue.
import type { APIRoute } from "astro";

const PAGES = ["", "demo/", "documentation/", "projet/"];

export const GET: APIRoute = ({ site }) => {
  const adresse = (lang: "fr" | "en", page: string) => new URL(`${lang === "en" ? "/en/" : "/"}${page}`, site).href;
  const urls = PAGES.flatMap((page) => (["fr", "en"] as const).map((lang) => `  <url>
    <loc>${adresse(lang, page)}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${adresse("fr", page)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${adresse("en", page)}"/>
  </url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
