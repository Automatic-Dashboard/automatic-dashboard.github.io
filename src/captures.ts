// Les captures du tableau, importées depuis le dépôt de l'intégration (scripts/importer-captures.mjs).
// Une capture anglaise manquante retombe sur la française.

import type { ImageMetadata } from "astro";
import type { Langue } from "./i18n/textes";

const toutes = import.meta.glob<{ default: ImageMetadata }>("./assets/captures/**/*.webp", { eager: true });

export function capture(lang: Langue, maison: string, nom: string): ImageMetadata | undefined {
  const cle = (l: Langue) => `./assets/captures/${l}/${maison}/${nom}.webp`;
  return (toutes[cle(lang)] ?? toutes[cle("fr")])?.default;
}

/** Toutes les captures d'une langue (la démo les propose toutes). */
export function capturesDe(lang: Langue): Record<string, ImageMetadata> {
  const resultat: Record<string, ImageMetadata> = {};
  for (const l of ["fr", lang] as Langue[]) {
    for (const [chemin, module] of Object.entries(toutes)) {
      const m = chemin.match(new RegExp(`^\\./assets/captures/${l}/([^/]+)/(.+)\\.webp$`));
      if (m) resultat[`${m[1]}/${m[2]}`] = module.default;
    }
  }
  return resultat;
}
