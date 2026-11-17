// Importe les captures prises par dev/scripts/captures.py dans le dépôt de l'intégration
// (dev/captures/, hors de git) : converties en WebP, rangées par langue et par maison.
// Usage : node scripts/importer-captures.mjs [chemin du dépôt de l'intégration]

import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const depot = process.argv[2] ?? "../automatic-dashboard";
const source = join(depot, "dev", "captures");
const cible = new URL("../src/assets/captures/", import.meta.url).pathname;

for (const dossier of await readdir(source)) {
  const [maison, anglais] = dossier.split("-en");
  const lang = anglais === undefined ? "fr" : "en";
  const sortie = join(cible, lang, maison);
  await mkdir(sortie, { recursive: true });
  for (const fichier of (await readdir(join(source, dossier))).filter((f) => f.endsWith(".png"))) {
    await sharp(join(source, dossier, fichier)).webp({ quality: 90, effort: 5 }).toFile(join(sortie, fichier.replace(/\.png$/, ".webp")));
  }
  console.log(`${dossier} → ${lang}/${maison}`);
}
