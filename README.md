# Le site d'Automatic Dashboard

Le site de [Automatic Dashboard](https://github.com/Automatic-Dashboard/automatic-dashboard), le tableau de bord complet pour Home Assistant, construit tout seul à partir de vos appareils. En ligne sur [automatic-dashboard.github.io](https://automatic-dashboard.github.io).

- **Quatre pages, en français et en anglais** : l'accueil, la démo, la documentation et le projet (`/` en français, `/en/` en anglais).
- **La démo** parcourt les trois maisons d'essai du projet, par page, écran (ordinateur, téléphone) et thème (clair, sombre).
- **Statique**, construit avec [Astro](https://astro.build) et publié par GitHub Pages à chaque changement de `main`.
- **Aucun cookie, aucune mesure d'audience, aucune ressource extérieure** : la police Inter et les images sont servies avec le site. Politique de sécurité du contenu stricte, avec l'empreinte de chaque script.
- **Clair et sombre** selon le réglage de l'appareil, y compris les captures du tableau.

## Construire

```sh
npm ci
npm run dev        # http://localhost:4321, rechargé à chaque modification
npm run build      # le site dans dist/
npm run preview    # sert dist/ pour le vérifier
```

## Les captures du tableau

Elles sont prises automatiquement sur les maisons d'essai, dans le dépôt de l'intégration (`dev/scripts/captures.py`), puis importées ici en WebP :

```sh
npm run captures   # lit ../automatic-dashboard/docs/captures/v1/ et écrit src/assets/captures/
```

## Organisation

| Dossier | Contenu |
|---|---|
| `src/pages/` | Les pages : `.astro` pour l'accueil et la démo, Markdown pour la documentation et le projet |
| `src/components/` | L'accueil, la démo, la comparaison avant/après, les captures, le logo |
| `src/i18n/textes.ts` | Les textes de l'accueil et de la démo, en français et en anglais |
| `src/styles/site.css` | La feuille de style, aux couleurs de la charte graphique |
| `src/assets/captures/` | Les captures du tableau, par langue et par maison |

## Licence

Le code est distribué sous licence [Apache 2.0](LICENSE). Le nom Automatic Dashboard, son logo et son symbole restent réservés : voir [NOTICE](NOTICE).
