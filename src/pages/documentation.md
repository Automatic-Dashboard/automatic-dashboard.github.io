---
layout: ../layouts/Doc.astro
lang: fr
page: documentation/
titre: Documentation
surtitre: Documentation
chapo: Installer Automatic Dashboard en deux minutes, comprendre ce qu'il montre, le régler à votre goût, et trouver de l'aide.
description: Installer Automatic Dashboard dans Home Assistant avec HACS, les pages, les trois modes, l'apparence, les favoris, Me prévenir, la tablette murale et les questions fréquentes.
---

## Installer

Il faut **Home Assistant 2026.9 ou plus récent** et **HACS**, la boutique communautaire de Home Assistant. Si HACS n'est pas encore installé chez vous, suivez d'abord [son guide d'installation](https://hacs.xyz/docs/use/).

1. **Téléchargez Automatic Dashboard dans HACS.** Ce bouton ouvre la bonne page dans votre Home Assistant : [Ouvrir Automatic Dashboard dans HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=Automatic-Dashboard&repository=automatic-dashboard&category=integration). Choisissez *Télécharger*, puis **redémarrez Home Assistant** (*Paramètres*, *Système*, en haut à droite).
2. **Ajoutez l'intégration** : [Ajouter Automatic Dashboard](https://my.home-assistant.io/redirect/config_flow_start/?domain=automatic_dashboard). Un écran, deux cases :
   - *Créer le tableau Automatic Dashboard* (cochée) : le tableau est créé pour vous ;
   - *En faire le tableau par défaut pour tout le monde* : chacun arrive dessus en ouvrant Home Assistant.
3. **Rechargez la page.** « Votre tableau Automatic Dashboard est prêt » s'affiche : il est dans la barre latérale.

C'est tout : le tableau se construit à partir de vos pièces, de vos étages et de vos appareils, et suit tout seul ce que vous ajoutez. Le thème Automatic Dashboard, clair et sombre, est installé avec l'intégration.

Tant qu'Automatic Dashboard n'est pas dans le catalogue officiel de HACS, le bouton de l'étape 1 l'ajoute comme « dépôt personnalisé » : c'est normal, rien d'autre à faire.

## Ce que vous voyez

**L'accueil** répond d'abord à une question : comment va la maison ? Une phrase (« 4 points à regarder, le reste va bien »), le ciel du jour, des pastilles qui mènent aux pages, puis les points à regarder, vos favoris, vos pièces, et sur le côté la météo, le climat, l'énergie et « En ce moment ».

Viennent ensuite des pages, seulement quand votre maison a de quoi les remplir :

| Page | Ce qu'elle montre |
|---|---|
| **Chaque pièce** | Ses lumières, volets, appareils, capteurs et son climat |
| **Climat** | Dedans, dehors, chaque pièce en barres ou en mosaïque, les thermostats |
| **Énergie** | Maintenant, aujourd'hui, hier, les appareils, la production solaire |
| **Sécurité** | Ouvertures, serrures, détecteurs, l'activité des dernières 24 heures |
| **Système** | Mises à jour, sauvegardes, piles, la machine et les services du réseau |
| **Air** | CO₂, particules et composés volatils, pièce par pièce |
| **Véhicule** | La batterie de la voiture, sa charge, la borne |
| **Extérieur** | Le jardin, le portail et le garage, l'arrosage, la piscine, la tondeuse |
| **Bilan** | La semaine ou le mois passé : énergie et son coût, températures, ouvertures |
| **À ranger** | Les appareils sans pièce, avec la pièce proposée |
| **Je pars** | Ce qui reste ouvert, allumé ou déverrouillé avant de sortir |
| **Tablette murale** | Une page pensée pour un écran au mur |

## Les trois modes

La même direction artistique pour tout le monde, mais une densité choisie d'après votre maison :

| Mode | Quand | Ce qui change |
|---|---|---|
| **Découverte** | 5 appareils utiles au plus, et 15 entités utiles au plus | La météo et chaque appareil en grand, des premiers pas qui se cochent tout seuls |
| **Maison** | les autres cas | Points à regarder, favoris, pièces en format moyen, aperçus avec courbes |
| **Complet** | 100 entités utiles ou plus, ou 60 et plus avec 250 entités ou 12 pièces | Pièces en petit format, regroupées par étage, tuiles compactes |

Une entité « utile » est une commande, une ouverture, une alerte, une caméra, une mesure ou un compteur d'énergie, pas un capteur technique. Le mode détecté est affiché dans les réglages, et vous pouvez le forcer.

## À votre goût

Tout est automatique, mais tout se règle. Sur le tableau, le **crayon** en haut à droite (*Modifier le tableau de bord*) ouvre les réglages d'Automatic Dashboard. Vos choix s'appliquent quand vous touchez *Enregistrer*.

- **Mode** : automatique, ou forcé en Découverte, Maison ou Complet.
- **Apparence** :
  - le **style** : *Automatic* (bleu et terre cuite), *Doux* (crème et vert sauge, sans bordure), *Contrasté* (noir sur blanc, le plus lisible), ou *Votre thème*, celui de votre profil Home Assistant ;
  - les **pièces dans Climat** : en barres (l'écart au confort) ou en mosaïque colorée ;
  - les **tuiles des favoris** : avec le nom sur deux lignes, ou celles de Home Assistant ;
  - le **ciel du jour**, les **conseils** et la **page Bilan** : à garder ou à retirer.
- **Favoris** : épinglez ceux du tableau, puis faites-les glisser pour les ranger. Les appareils que vous utilisez le plus complètent la rangée jusqu'à 4 ou 8 tuiles.
- **Masqués** : ce qu'Automatic Dashboard ne montre nulle part. Le reste de Home Assistant n'est pas touché.
- **Noms** : le nom affiché dans le tableau, sans renommer l'appareil dans Home Assistant.
- **Pièces** : elles suivent l'ordre choisi dans Home Assistant (*Paramètres*, *Pièces*, en les faisant glisser).
- **Me prévenir** et **Tablette murale** : voir plus bas.

### Les favoris de chacun

Sur l'accueil, le bouton **Mes favoris**, au-dessus de la rangée des favoris, permet à chaque personne de la maison de choisir les siens, sans être administrateur. Ils sont gardés dans son compte, la suivent sur tous ses écrans, et remplacent pour elle seule les favoris du tableau. *Revenir aux favoris du tableau* annule son choix.

### Me prévenir

Dans les réglages, la rubrique **Me prévenir** active, avant le problème, des automatismes tout faits :

- en cas de **fuite d'eau** ;
- en cas de **fumée ou de gaz** ;
- quand une **pile est faible** ;
- si la **sauvegarde** de Home Assistant **échoue**.

Choisissez **qui prévenir** : chaque téléphone qui a l'application Home Assistant, et la notification dans Home Assistant. Les automatismes sont créés tout de suite dans *Paramètres*, *Automatisations* : ils surveillent tous les capteurs du même genre, et ils vous appartiennent. Vous pouvez les modifier ou les supprimer.

### La tablette murale

Sur la tablette, ouvrez la page **tablette** de votre tableau (par exemple `/automatic-dashboard/tablette`) : l'heure en grand, la phrase d'état, les points à regarder et vos favoris en grands boutons.

- **Plein écran** : le bouton en haut à droite masque l'en-tête et le menu de Home Assistant sur cette tablette. Pour en sortir : un **appui long sur l'heure**.
- **La nuit**, après une minute sans toucher l'écran, un écran de veille noir ne garde que l'heure. Les heures de nuit se règlent dans les réglages (de 23 h à 6 h par défaut).
- **Rallumer l'écran au passage** : choisissez dans les réglages un détecteur de mouvement près de la tablette.

### En YAML

Les mêmes réglages s'écrivent en YAML (menu ⋮ du dialogue, *Modifier en YAML*) :

```yaml
type: custom:automatic-dashboard
mode: complet          # sinon automatique
style: doux            # automatic, doux, contraste ou home_assistant
pieces: mosaique       # Climat : barres (par défaut) ou mosaique
tuiles: home_assistant # favoris : automatic (par défaut) ou home_assistant
ciel: false            # retirer le ciel du jour
conseils: false        # retirer les conseils
bilan: false           # retirer la page Bilan
favoris:               # épinglés, dans cet ordre
  - light.salon
completer: false       # seulement les épinglés
masquer:               # entités à ne jamais montrer
  - switch.prise_technique
noms:                  # noms affichés dans le tableau
  light.lampe_chevet: Veilleuse
tablette:
  debut_nuit: 22       # écran de veille à partir de 22 h
  fin_nuit: 7          # jusqu'à 7 h
  reveil: binary_sensor.mouvement_entree
```

Les réglages sont ceux du tableau, communs à tous les comptes (sauf « Mes favoris »). Pour une tablette en mode Maison et un téléphone en mode Complet, créez deux tableaux Automatic Dashboard.

## Au quotidien

- **Les points à regarder.** Le bouton **⋯** d'un point déplie ses actions, écrites en toutes lettres :
  - *Ignorer tant que ça ne change pas* : une fenêtre ouverte exprès ne reste pas en tête. Refermée puis rouverte, elle revient. Une fuite, de la fumée ou une alarme ne s'ignorent jamais ;
  - *Me prévenir la prochaine fois* : crée l'automatisme tout fait, comme dans les réglages.
- **Des conseils, pas seulement des constats.** « Fermez la fenêtre du salon » quand le chauffage tourne dans la pièce, « Aérez la chambre » au-delà de 1 000 ppm de CO₂ ou de 80 % d'humidité, « Fermez les volets du salon » quand il fait chaud dehors, « Ouvrez les fenêtres » le soir quand il fait plus frais dehors, « Le lave-linge a fini ».
- **Le mode absence.** Quand toutes les personnes suivies par Home Assistant sont parties, ou que l'alarme est armée en mode absence, la phrase dit ce qui reste ouvert, allumé ou déverrouillé, et ces points passent en tête. La disposition ne change pas.
- **Je pars.** La pastille *Je pars* de l'accueil ouvre la liste de ce qui reste à faire, avec un bouton par geste : *Tout éteindre*, *Tout verrouiller*, *Tout fermer* pour les volets, *Armez l'alarme*. Les fenêtres se ferment à la main : elles sont listées.
- **Le bilan.** Chaque lundi (et le 1er du mois), un point annonce le bilan. Il compare l'énergie à la période d'avant et donne son **coût** quand un prix est déclaré dans les réglages Énergie de Home Assistant (voir plus bas).
- **À ranger propose la pièce.** Quand le nom d'un appareil sans pièce désigne une pièce (« Lampe du salon »), le bouton « Salon ? » la règle en un clic, avec *Annuler*. Réservé aux administrateurs ; les autres voient la proposition.

## Les étiquettes de réglage en masse

L'intégration crée trois étiquettes dans Home Assistant (*Paramètres*, *Étiquettes*). Posez-les sur des dizaines d'entités, d'appareils ou de pièces d'un coup, depuis les listes de Home Assistant :

| Étiquette | Où | Effet |
|---|---|---|
| **Automatic Dashboard : masquer** | entité, appareil ou pièce | ne montrer nulle part ; sur une pièce, la pièce et tout ce qu'elle contient |
| **Automatic Dashboard : favori** | entité ou appareil | rejoindre les favoris de l'accueil, après ceux épinglés |
| **Automatic Dashboard : extérieur** | pièce | sa température devient celle du dehors, hors de la moyenne de la maison |

Vous pouvez les renommer ou changer leur couleur : le tableau les reconnaît à leur identifiant. Une étiquette supprimée n'est pas recréée.

## L'énergie et son coût

Automatic Dashboard lit les **réglages Énergie de Home Assistant** (*Paramètres*, *Tableaux de bord*, *Énergie*) : les compteurs que vous y déclarez l'emportent toujours sur ce qu'il devine. Déclarez votre compteur électrique et son **prix au kWh** : le bilan affichera le coût de la semaine ou du mois, comparé à la période d'avant.

Sans réglages Énergie, il prend le compteur de la maison d'après son nom (Linky, compteur, réseau…), jamais la somme des prises.

## Ce qu'il montre, et ce qu'il cache

Automatic Dashboard écarte d'abord ce qui ne sert pas au quotidien : les entités masquées ou désactivées, les catégories « diagnostic » et « configuration », les domaines techniques (automatisations, zones…), et les capteurs techniques mal rangés (signal, durée, adresse IP, micrologiciel…). Les piles, les mises à jour et les sauvegardes vont dans Système.

Ensuite, une seule entité par appareil, celle qui porte son nom, et un seul représentant par pièce et par mesure.

Pour la météo, il prend Météo-France s'il est installé, sinon l'intégration météo de Home Assistant. Il ne va chercher aucune donnée lui-même.

## Vie privée

Automatic Dashboard ne contacte aucun service extérieur et ne collecte rien. Le tableau tourne dans votre navigateur et lit ce que Home Assistant lui donne déjà, avec les droits du compte connecté. L'intégration ne crée aucune entité et n'ouvre aucun accès.

## Signaler un problème

Un appareil mal rangé, absent ou en trop ? Le tableau a été mis au point sur des maisons d'essai : votre maison l'aidera à progresser.

1. Ouvrez les réglages (le crayon), rubrique **Signaler un problème**.
2. *Choisir l'appareil concerné*, puis, à côté de lui, **Il devrait être…** : caché, visible, dans telle pièce ou dans telle page.
3. **Télécharger le diagnostic** : un fichier qui décrit votre maison **sans aucun nom ni valeur** (ouvrez-le pour le vérifier).
4. **Ouvrir un ticket**, et glissez-y le fichier.

Votre diagnostic devient un cas de test : l'erreur est corrigée pour tout le monde, et ne revient jamais.

## Questions fréquentes

**Le tableau n'apparaît pas dans la barre latérale.** Rechargez la page. S'il n'est toujours pas là, ajoutez-le à la main : *Paramètres*, *Tableaux de bord*, *Ajouter un tableau de bord*, rubrique « Tableaux de bord communautaires », **Automatic Dashboard**.

**Un appareil n'apparaît pas.** Vérifiez qu'il a une pièce, qu'il n'est pas masqué dans Home Assistant et que son entité n'est pas rangée en « diagnostic ». Sinon, [signalez-le](#signaler-un-problème).

**Un capteur technique apparaît dans une pièce.** Masquez-le dans les réglages (ou posez l'étiquette « masquer »), et signalez-le.

**Les couleurs ne sont pas celles des captures.** Si Home Assistant affiche la réparation « Le thème Automatic Dashboard n'a pas pu être chargé », votre `configuration.yaml` ne charge pas le dossier des thèmes. Ajoutez ces deux lignes, puis redémarrez :

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

**Je veux modifier une carte à la main.** Le menu ⋮ des réglages propose *Prendre le contrôle* : le tableau devient un tableau ordinaire, modifiable carte par carte, mais il ne se met plus à jour tout seul. Gardez un tableau Automatic Dashboard à côté si vous voulez les deux.

**Le tableau est en anglais.** Il suit la langue de votre profil Home Assistant (en bas de la barre latérale). Il parle français et anglais.

**Je ne reçois pas les notifications sur mon téléphone.** L'application Home Assistant doit être installée et connectée sur le téléphone, et le téléphone coché dans *Me prévenir*, *Qui prévenir*.

## Mettre à jour et désinstaller

**Mettre à jour** : HACS signale les nouvelles versions, comme pour toute intégration. Après la mise à jour, redémarrez Home Assistant, puis rechargez la page.

**Désinstaller** : supprimez le tableau (*Paramètres*, *Tableaux de bord*), puis l'intégration (*Paramètres*, *Appareils et services*, Automatic Dashboard), puis Automatic Dashboard dans HACS. Le thème (`themes/automatic_dashboard.yaml`), les étiquettes et les automatismes « Me prévenir » restent : supprimez-les si vous n'en voulez plus.

## Contribuer

Chaque vraie maison améliore Automatic Dashboard. Signaler un appareil mal rangé, traduire, relire les textes ou proposer du code : le [guide de contribution](https://github.com/Automatic-Dashboard/automatic-dashboard/blob/main/CONTRIBUTING.md) explique comment.
