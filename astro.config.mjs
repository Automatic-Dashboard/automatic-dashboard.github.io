// Le site d'Automatic Dashboard : statique, en français (racine) et en anglais (/en/),
// publié par GitHub Pages à l'adresse de l'organisation.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://automatic-dashboard.github.io",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: { prefixDefaultLocale: false },
  },
  // Politique de sécurité du contenu, avec l'empreinte de chaque script et style en ligne.
  security: { csp: true },
  build: { inlineStylesheets: "never" },
  image: { responsiveStyles: false },
  // Pas de coloration du code : elle passe par des styles en ligne, que la politique de sécurité refuse.
  markdown: { syntaxHighlight: false },
});
