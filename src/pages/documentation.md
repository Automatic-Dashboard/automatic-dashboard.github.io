---
layout: ../layouts/Doc.astro
lang: fr
page: documentation/
titre: Documentation
surtitre: Documentation
chapo: Installer Automatic Dashboard, comprendre ce qu'il montre, le régler et répondre aux questions les plus fréquentes.
description: Installer Automatic Dashboard dans Home Assistant avec HACS, comprendre les trois modes, régler les favoris, masquer et renommer.
---

## Installer

Automatic Dashboard demande **Home Assistant 2026.9 ou plus récent** et **HACS**, la boutique communautaire de Home Assistant. Si HACS n'est pas encore installé chez vous, suivez d'abord [son guide d'installation](https://hacs.xyz/docs/use/).

1. **Ajoutez Automatic Dashboard à HACS.** En attendant son inscription au catalogue officiel, Automatic Dashboard s'ajoute comme dépôt personnalisé. Ce bouton ouvre la bonne page dans votre Home Assistant : [Ouvrir Automatic Dashboard dans HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=Automatic-Dashboard&repository=automatic-dashboard&category=integration). Choisissez *Télécharger*, puis **redémarrez Home Assistant**.
2. **Ajoutez l'intégration** : [Ajouter Automatic Dashboard](https://my.home-assistant.io/redirect/config_flow_start/?domain=automatic_dashboard). Un seul écran, aucune question.
3. **Créez le tableau** : *Paramètres*, *Tableaux de bord*, *Ajouter un tableau de bord*, rubrique « Tableaux de bord communautaires », **Automatic Dashboard**. Donnez-lui un nom ; il apparaît dans la barre latérale.

Le thème Automatic Dashboard, clair et sombre, est installé avec l'intégration. Le tableau l'utilise même si vous gardez un autre thème ailleurs dans Home Assistant.

Si Home Assistant affiche la réparation « Le thème Automatic Dashboard n'a pas pu être chargé », c'est que votre fichier `configuration.yaml` ne charge pas le dossier des thèmes. Ajoutez ces deux lignes, puis redémarrez :

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

## Le premier tableau

Automatic Dashboard lit vos pièces, vos étages, vos appareils et leurs états, puis construit :

- **l'accueil** : l'état de la maison en une phrase, des pastilles qui mènent aux pages, les points à regarder, vos favoris, vos pièces, et sur le côté la météo, les aperçus du climat et de l'énergie, « En ce moment » et l'éphéméride ;
- **une page par pièce**, avec ses lumières, ses volets, ses capteurs et son climat ;
- **une page par sujet** quand votre maison a de quoi la remplir : Climat, Énergie, Sécurité, Système, et « À ranger ».

Le tableau se reconstruit tout seul quand vous ajoutez un appareil, une pièce ou un étage. Deux gestes l'améliorent beaucoup :

- **Donnez une pièce à chaque appareil.** Les appareils sans pièce vont dans « À ranger », avec un bouton pour leur en choisir une.
- **Choisissez la température de chaque pièce** dans les réglages de la pièce (*Paramètres*, *Pièces*). Sinon, Automatic Dashboard prend celle d'un thermomètre de la pièce.

## Les trois modes

La même direction artistique pour tout le monde, mais une densité choisie d'après votre maison :

| Mode | Quand | Ce qui change |
|---|---|---|
| **Découverte** | 5 appareils utiles au plus, et 15 entités utiles au plus | La météo et chaque appareil en grand, des premiers pas qui se cochent tout seuls |
| **Maison** | les autres cas | Points à regarder, favoris, pièces en format moyen, aperçus avec courbes |
| **Complet** | 100 entités utiles ou plus, ou 60 et plus avec 250 entités ou 12 pièces | Pièces en petit format, regroupées par étage, tuiles compactes, plus de détails dans les pièces |

Une entité « utile » est une commande, une ouverture, une alerte, une caméra, une mesure ou un compteur d'énergie : pas un capteur technique. Le mode détecté est affiché dans les réglages, avec ses chiffres, et vous pouvez le forcer.

## Les réglages

Sur le tableau, le crayon en haut à droite (*Modifier le tableau de bord*) ouvre les réglages d'Automatic Dashboard :

- **Mode** : automatique, ou forcé en Découverte, Maison ou Complet.
- **Favoris** : épinglez les vôtres, puis faites-les glisser pour les ranger (ou utilisez les flèches du clavier sur la poignée). Les appareils que vous utilisez le plus, selon Home Assistant, complètent la rangée jusqu'à 4 ou 8 tuiles ; un interrupteur permet de ne garder que les vôtres.
- **Masqués** : ce qu'Automatic Dashboard ne montre nulle part. Le reste de Home Assistant n'est pas touché.
- **Noms** : le nom affiché dans Automatic Dashboard. Celui de Home Assistant, et donc des assistants vocaux, ne change pas.
- **Pièces** : elles suivent l'ordre choisi dans Home Assistant (*Paramètres*, *Pièces*, en les faisant glisser).

Les mêmes réglages s'écrivent en YAML (menu ⋮ du dialogue, *Modifier en YAML*) :

```yaml
type: custom:automatic-dashboard
mode: complet          # sinon automatique
favoris:               # épinglés, dans cet ordre
  - light.salon
completer: false       # seulement les épinglés
masquer:               # entités à ne jamais montrer
  - switch.prise_technique
noms:                  # noms affichés dans Automatic Dashboard
  light.lampe_chevet: Veilleuse
```

Les réglages sont ceux du tableau, communs à tous les comptes. Pour une tablette murale en mode Maison et un téléphone en mode Complet, créez deux tableaux Automatic Dashboard.

## Au quotidien

- **Des conseils.** Quand deux faits se croisent, le tableau dit quoi faire : « Fermez la fenêtre du salon » si le chauffage tourne dans la pièce, « Aérez la chambre » au-delà de 1 000 ppm de CO₂ ou de 80 % d'humidité.
- **Ignorer un point pour aujourd'hui.** L'œil barré, à droite d'un point, le retire jusqu'à demain, sur tous vos écrans. « Remontrer » le fait revenir. Une fuite, de la fumée ou une alarme déclenchée ne s'ignorent jamais.
- **Me prévenir.** La cloche, sur une fuite, une pile faible ou une sauvegarde ratée, crée l'automatisme tout fait dans Home Assistant (*Paramètres*, *Automatisations*) : il surveille tous les capteurs du même genre, prévient les téléphones qui ont l'application Home Assistant et laisse une notification. Il vous appartient ensuite : modifiez-le librement. Réservé aux administrateurs.
- **Le mode absence.** Quand toutes les personnes suivies par Home Assistant sont parties, la phrase de l'accueil dit ce qui reste ouvert, allumé ou déverrouillé, et ces points passent en tête. La disposition ne change pas.
- **Le bilan de la semaine.** Une page à part, annoncée chaque lundi par un point : l'énergie jour par jour comparée à la semaine d'avant, les températures dedans et dehors, ce qui s'est ouvert et combien de fois. On y accède aussi depuis la page Énergie.
- **Le ciel du jour** en tête de l'accueil : l'arc du soleil entre son lever et son coucher, et la nuit, la lune et sa phase. **La maison en plan**, dans Climat : chaque pièce est un bloc coloré par sa température, étage par étage.
- **La tablette murale.** Sur la tablette, ouvrez la page `tablette` de votre tableau (par exemple `/tableau-maison/tablette`) : l'heure en grand, la phrase d'état, les points à regarder. De 23 h à 6 h, sans toucher l'écran pendant une minute, un écran de veille noir ne garde que l'heure ; un geste le rallume.
- **À ranger propose la pièce.** Quand le nom d'un appareil sans pièce désigne une pièce (« Lampe du salon »), le bouton « Salon ? » la règle en un clic, avec « Annuler ».

## Les étiquettes de réglage en masse

L'intégration crée trois étiquettes dans Home Assistant (*Paramètres*, *Étiquettes*). Posez-les sur des dizaines d'entités, d'appareils ou de pièces d'un coup, depuis les listes de Home Assistant :

| Étiquette | Où | Effet |
|---|---|---|
| **Automatic Dashboard : masquer** | entité, appareil ou pièce | ne montrer nulle part ; sur une pièce, la pièce et tout ce qu'elle contient |
| **Automatic Dashboard : favori** | entité ou appareil | rejoindre les favoris de l'accueil, après ceux épinglés dans les réglages |
| **Automatic Dashboard : extérieur** | pièce | sa température devient celle du dehors et sort de la moyenne de la maison |

Vous pouvez les renommer ou changer leur couleur : le tableau les reconnaît à leur identifiant. Une étiquette supprimée n'est pas recréée.

## Ce qu'il montre, et ce qu'il cache

Automatic Dashboard écarte d'abord ce qui ne sert pas au quotidien : les entités masquées ou désactivées, les catégories « diagnostic » et « configuration », les domaines techniques (automatisations, zones…), et les capteurs techniques mal rangés (signal, durée, adresse IP, micrologiciel…). Les piles, les mises à jour et les sauvegardes vont dans Système.

Ensuite, une seule entité par appareil, celle qui porte son nom, et un seul représentant par pièce et par mesure : la puissance de la maison vient du compteur, jamais de la somme des prises.

Pour la météo, Automatic Dashboard prend Météo-France s'il est installé, sinon l'intégration météo de Home Assistant. Il ne va chercher aucune donnée lui-même : en mode Découverte, il propose d'ajouter les intégrations utiles en un clic.

## Vie privée

Automatic Dashboard ne contacte aucun service extérieur et ne collecte rien. Le tableau tourne dans votre navigateur et lit ce que Home Assistant lui donne déjà, avec les droits du compte connecté. L'intégration ne crée aucune entité et n'ouvre aucun accès.

## Questions fréquentes

**Un appareil n'apparaît pas.** Vérifiez qu'il a une pièce, qu'il n'est pas masqué dans Home Assistant et que son entité n'est pas rangée en « diagnostic ». Si c'est bien un appareil du quotidien, signalez-le : dans les réglages, rubrique *Signaler un problème*, choisissez l'appareil, téléchargez le diagnostic et joignez-le à [un ticket](https://github.com/Automatic-Dashboard/automatic-dashboard/issues/new/choose). Il décrit votre maison sans aucun nom ni valeur (vous pouvez le relire), et devient un cas de test : la règle sera corrigée pour tout le monde, pour toujours.

**Un capteur technique apparaît dans une pièce.** Masquez-le dans les réglages, et signalez-le : certaines intégrations ne rangent pas leurs capteurs techniques en « diagnostic ».

**Je veux modifier une carte à la main.** Le menu ⋮ des réglages propose *Prendre le contrôle* : le tableau devient un tableau ordinaire, modifiable carte par carte, mais il ne se met plus à jour tout seul. Gardez un tableau Automatic Dashboard à côté si vous voulez les deux.

**Le tableau est en anglais.** Il suit la langue de votre profil Home Assistant (en bas de la barre latérale).

**Les couleurs ne sont pas celles des captures.** Voir la réparation du thème, dans [Installer](#installer).

**Mettre à jour.** HACS signale les nouvelles versions, comme pour toute intégration. Après la mise à jour, redémarrez Home Assistant puis rechargez la page.

## Désinstaller

Supprimez le tableau (*Paramètres*, *Tableaux de bord*), puis l'intégration (*Paramètres*, *Appareils et services*, Automatic Dashboard), puis Automatic Dashboard dans HACS. Le fichier du thème, `themes/automatic_dashboard.yaml`, reste dans votre configuration, comme un thème installé par HACS : supprimez-le si vous n'en voulez plus.

## Contribuer

Chaque vraie maison améliore Automatic Dashboard. Signaler un appareil mal rangé, traduire l'interface, relire les textes ou proposer du code : le [guide de contribution](https://github.com/Automatic-Dashboard/automatic-dashboard/blob/main/CONTRIBUTING.md) explique comment.
