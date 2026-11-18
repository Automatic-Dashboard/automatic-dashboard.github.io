// Copie la démo interactive, construite dans le dépôt de l'intégration (npm run demo dans
// frontend/), dans public/interactif/.
// Usage : node scripts/importer-demo.mjs [chemin du dépôt de l'intégration]

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const depot = process.argv[2] ?? "../automatic-dashboard";
const source = join(depot, "frontend", "dist-demo", "automatic-dashboard-demo.js");
const cible = new URL("../public/interactif/", import.meta.url).pathname;
await mkdir(cible, { recursive: true });
await copyFile(source, join(cible, "automatic-dashboard-demo.js"));
console.log(`${source} → public/interactif/`);
