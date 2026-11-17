// La typographie française : une espace fine insécable avant « : ; ? ! » et à l'intérieur
// des guillemets, pour qu'aucun signe ne se retrouve seul en début de ligne.

const FINE = "\u202f";

export function typo(texte: string): string {
  return texte
    .replace(/«\s+/g, `«${FINE}`)
    .replace(/\s+»/g, `${FINE}»`)
    .replace(/\s+([:;?!])(?=\s|$|\))/g, `${FINE}$1`);
}

/** Applique `typo` à toutes les chaînes d'un objet de textes (fonctions comprises). */
export function typographier<T>(valeur: T): T {
  if (typeof valeur === "string") return typo(valeur) as T;
  if (typeof valeur === "function") return ((...args: unknown[]) => typographier((valeur as (...a: unknown[]) => unknown)(...args))) as T;
  if (Array.isArray(valeur)) return valeur.map(typographier) as T;
  if (valeur && typeof valeur === "object") return Object.fromEntries(Object.entries(valeur).map(([k, v]) => [k, typographier(v)])) as T;
  return valeur;
}

/** Le même traitement sur du HTML (pages Markdown en français), hors balises et hors code. */
export function typographierHtml(html: string): string {
  return html
    .split(/(<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>|<[^>]+>)/)
    .map((morceau) => (morceau.startsWith("<") ? morceau : typo(morceau)))
    .join("");
}
