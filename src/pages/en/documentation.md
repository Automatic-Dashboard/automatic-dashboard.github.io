---
layout: ../../layouts/Doc.astro
lang: en
page: documentation/
titre: Documentation
surtitre: Documentation
chapo: Install Automatic Dashboard in two minutes, understand what it shows, make it your own, and find help.
description: Install Automatic Dashboard in Home Assistant from the Marketplace, the pages, the three modes, appearance, favorites, Notify me, the wall tablet and frequently asked questions.
---

## Install

You need **Home Assistant 2026.9 or newer**. Since 2026.11, community projects are installed from the **Marketplace** built into Home Assistant; before that, from HACS (see below).

1. **Open the Marketplace**: *Settings*, *Marketplace*, or this link: [Open the Marketplace](https://my.home-assistant.io/redirect/marketplace_repositories/). The first time, a warning appears: tick the box to accept the risks, then *Continue*.
2. **Add Automatic Dashboard**: in the top right corner, *Add from link*, type `Automatic-Dashboard/automatic-dashboard`, then *Add*. The first time, the Marketplace asks you to connect GitHub: it shows a code that you approve on github.com. No password to give.
3. **Install it**: open Automatic Dashboard, then *Install*. The integration screen opens by itself, with two boxes:
   - *Create the Automatic Dashboard dashboard* (ticked): the dashboard is created for you;
   - *Make it the default dashboard for everyone*: everyone lands on it when opening Home Assistant.
4. **Reload the page.** "Your Automatic Dashboard dashboard is ready" appears: it is in the sidebar.

That's it: the dashboard builds itself from your areas, floors and devices, and follows what you add. The Automatic Dashboard theme, light and dark, is installed with the integration.

Once Automatic Dashboard is in the official catalog, step 2 goes away: you'll just search for it in the Marketplace.

**With Home Assistant 2026.9 or 2026.10**, use HACS: [Open Automatic Dashboard in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=Automatic-Dashboard&repository=automatic-dashboard&category=integration), *Download*, restart Home Assistant (*Settings*, *System*, top right), then [add the integration](https://my.home-assistant.io/redirect/config_flow_start/?domain=automatic_dashboard) and follow steps 3 and 4.

## What you see

**The home page** answers one question first: how is the house? A sentence ("4 things to check, the rest is fine"), the sky of the day, chips leading to each page, then the things to check, your favorites, your rooms, and on the side the weather, climate, energy and "Right now".

Then come pages, only when your home has something to fill them:

| Page | What it shows |
|---|---|
| **Each room** | Its lights, shutters, devices, sensors and climate |
| **Climate** | Inside, outside, each room as bars or as a mosaic, the thermostats |
| **Energy** | Now, today, yesterday, the devices, solar production |
| **Security** | Openings, locks, detectors, the last 24 hours of activity |
| **System** | Updates, backups, batteries, the machine and network services |
| **Air** | CO₂, particles and volatile compounds, room by room |
| **Vehicle** | The car battery, its charging, the charger |
| **Outdoor** | The garden, gate and garage, watering, pool, mower |
| **Report** | The past week or month: energy and its cost, temperatures, openings |
| **To sort** | Devices without an area, with the suggested room |
| **I'm leaving** | What is still open, on or unlocked before you go out |
| **Wall tablet** | A page designed for a screen on the wall |

## The three modes

One visual identity for everyone, but a density chosen from your home:

| Mode | When | What changes |
|---|---|---|
| **Discovery** | 5 useful devices or fewer, and 15 useful entities or fewer | The weather and each device shown large, first steps that tick themselves off |
| **Home** | all other cases | Things to check, favorites, medium room cards, overviews with curves |
| **Complete** | 100 useful entities or more, or 60 or more with 250 entities or 12 areas | Small room cards grouped by floor, compact tiles |

A "useful" entity is a control, an opening, an alert, a camera, a measurement or an energy meter, not a technical sensor. The detected mode is shown in the settings, and you can force it.

## Make it your own

Everything is automatic, but everything can be set. On the dashboard, the **pencil** in the top right corner (*Edit dashboard*) opens the Automatic Dashboard settings. Your choices apply when you tap *Save*.

- **Mode**: automatic, or forced to Discovery, Home or Complete.
- **Appearance**:
  - the **style**: *Automatic* (blue and terracotta), *Soft* (cream and sage green, no borders), *High contrast* (black on white, the most readable), or *Your theme*, the one from your Home Assistant profile;
  - **rooms in Climate**: as bars (the gap to comfort) or as a colored mosaic;
  - **favorite tiles**: with the name on two lines, or Home Assistant's own;
  - the **sky of the day**, **advice** and the **Report page**: keep them or remove them.
- **Favorites**: pin the dashboard's, then drag them to order them. The devices you use most fill the row up to 4 or 8 tiles.
- **Hidden**: what Automatic Dashboard never shows. The rest of Home Assistant is not touched.
- **Names**: the name shown in the dashboard, without renaming the device in Home Assistant.
- **Rooms**: they follow the order chosen in Home Assistant (*Settings*, *Areas*, by dragging them).
- **Notify me** and **Wall tablet**: see below.

### Everyone's favorites

On the home page, the **My favorites** button above the favorites row lets each person in the home choose their own, without being an administrator. They are kept in their account, follow them on all their screens, and replace the dashboard's favorites for them only. *Back to the dashboard's favorites* undoes their choice.

### Notify me

In the settings, the **Notify me** section turns on ready-made automations, before the problem happens:

- on a **water leak**;
- on **smoke or gas**;
- when a **battery is low**;
- if the Home Assistant **backup fails**.

Choose **who to notify**: each phone running the Home Assistant app, and the notification in Home Assistant. The automations are created right away in *Settings*, *Automations*: they watch every sensor of the same kind, and they are yours. You can edit or delete them.

### The wall tablet

On the tablet, open the **tablette** page of your dashboard (for example `/automatic-dashboard/tablette`): the time shown large, the status sentence, the things to check and your favorites as large buttons.

- **Full screen**: the button in the top right corner hides Home Assistant's header and menu on this tablet. To leave it: a **long press on the time**.
- **At night**, after a minute without a touch, a black screen saver keeps only the time. Night hours are set in the settings (11 pm to 6 am by default).
- **Wake the screen when someone passes**: pick a motion sensor near the tablet in the settings.

### In YAML

The same settings can be written in YAML (⋮ menu of the dialog, *Edit in YAML*):

```yaml
type: custom:automatic-dashboard
mode: complet          # otherwise automatic (modes: decouverte, maison, complet)
style: doux            # automatic, doux (soft), contraste (high contrast) or home_assistant
pieces: mosaique       # Climate: barres (bars, default) or mosaique (mosaic)
tuiles: home_assistant # favorites: automatic (default) or home_assistant
ciel: false            # remove the sky of the day
conseils: false        # remove the advice
bilan: false           # remove the Report page
favoris:               # pinned favorites, in this order
  - light.living_room
completer: false       # pinned favorites only
masquer:               # entities never shown
  - switch.technical_plug
noms:                  # names shown in the dashboard
  light.bedside_lamp: Night light
tablette:
  debut_nuit: 22       # screen saver from 10 pm
  fin_nuit: 7          # until 7 am
  reveil: binary_sensor.hallway_motion
```

Settings belong to the dashboard and are shared by all accounts (except "My favorites"). For a wall tablet in Home mode and a phone in Complete mode, create two Automatic Dashboard dashboards.

## Day to day

- **Things to check.** The **⋯** button of an item opens its actions, written in full:
  - *Ignore while nothing changes*: a window left open on purpose doesn't stay on top. Closed and opened again, it comes back. A leak, smoke or an alarm can never be ignored;
  - *Notify me next time*: creates the ready-made automation, as in the settings.
- **Advice, not just facts.** "Close the living room window" while the heating is on in that room, "Air out the bedroom" above 1,000 ppm of CO₂ or 80% humidity, "Close the shutters in the living room" when it's hot outside, "Open the windows" in the evening when it's cooler outside, "The washer has finished".
- **Away mode.** When every person tracked by Home Assistant has left, or the alarm is armed away, the sentence says what is still open, on or unlocked, and those items come first. The layout does not change.
- **I'm leaving.** The *I'm leaving* chip on the home page opens what is left to do, with a button for each step: *All off*, *Lock all*, *Close all* for the shutters, *Arm the alarm*. Windows are closed by hand: they are listed.
- **The report.** Every Monday (and on the 1st of the month), an item announces the report. It compares energy with the period before and gives its **cost** when a price is set in Home Assistant's Energy settings (see below).
- **To sort suggests the room.** When the name of a device without an area names a room ("Living room lamp"), the "Living room?" button sets it in one click, with *Undo*. Administrators only; others see the suggestion.

## In your own dashboard

Attached to your dashboard? Add just parts of Automatic Dashboard to it: they build themselves and follow the home, like the full dashboard.

1. On your dashboard, *Edit dashboard* (the pencil), then *Create section*.
2. Choose *Automatic section*, then an Automatic Dashboard section, among the community sections:
   - **the state of the home**: the home in one sentence, today's sky and the things to check;
   - **right now**: music, who's home, appointments, running machines, shopping list;
   - **climate**: inside, outside, humidity, today's curve and comfort room by room;
   - **system**: updates, the last backup and the state of Home Assistant;
   - **to sort**: devices without a room, with the suggested room in one click;
   - **before leaving**: what is still open, on or unlocked, with one button per action.

Each section accepts the same settings as the dashboard, written in its configuration (*Edit in YAML*):

```yaml
strategy:
  type: custom:automatic-dashboard-climat
  pieces: mosaique        # rooms as a mosaic instead of bars
  masquer:
    - sensor.cellar_temperature
```

## Bulk-setting labels

The integration creates three labels in Home Assistant (*Settings*, *Labels*). Put them on dozens of entities, devices or areas at once, from Home Assistant's lists:

| Label | Where | Effect |
|---|---|---|
| **Automatic Dashboard: hide** | entity, device or area | never shown; on an area, the area and everything in it |
| **Automatic Dashboard: favorite** | entity or device | joins the home page favorites, after the pinned ones |
| **Automatic Dashboard: outdoor** | area | its temperature becomes the outdoor one, out of the home average |

You can rename them or change their color: the dashboard recognizes them by their ID. A deleted label is not created again.

## Energy and its cost

Automatic Dashboard reads **Home Assistant's Energy settings** (*Settings*, *Dashboards*, *Energy*): the meters you declare there always win over what it guesses. Declare your electricity meter and its **price per kWh**: the report will show the cost of the week or month, compared with the period before.

Without Energy settings, it takes the home meter from its name (meter, grid…), never the sum of the plugs.

## What it shows, and what it hides

Automatic Dashboard first sets aside what is not useful day to day: hidden or disabled entities, the "diagnostic" and "configuration" categories, technical domains (automations, zones…), and misfiled technical sensors (signal, duration, IP address, firmware…). Batteries, updates and backups go to System.

Then, a single entity per device, the one carrying its name, and a single representative per room and per measurement.

For the weather, it uses Météo-France if installed, otherwise Home Assistant's weather integration. It fetches no data itself.

## Privacy

Automatic Dashboard contacts no external service and collects nothing. The dashboard runs in your browser and reads what Home Assistant already gives it, with the rights of the signed-in account. The integration creates no entity and opens no access.

## Report a problem

A device misplaced, missing or shown by mistake? The dashboard was tuned on test homes: your home will help it improve.

1. Open the settings (the pencil), **Report a problem** section.
2. *Pick the device involved*, then, next to it, **It should be…**: hidden, visible, in a given area or on a given page.
3. **Download the diagnostic**: a file describing your home **without any name or value** (open it to check).
4. **Open an issue**, and drop the file into it.

Your diagnostic becomes a test case: the mistake is fixed for everyone, and never comes back.

## Frequently asked questions

**The dashboard is not in the sidebar.** Reload the page. If it's still not there, add it by hand: *Settings*, *Dashboards*, *Add dashboard*, "Community dashboards" section, **Automatic Dashboard**.

**"Error loading the dashboard strategy" or "Timeout waiting for strategy element".** The browser could not load the dashboard file. Reload the page while clearing the cache (Ctrl + Shift + R, or ⌘ + Shift + R on a Mac). If you just installed or updated Automatic Dashboard, restart Home Assistant (*Settings*, *System*, top right). In the mobile app, clear the frontend cache from the app settings.

**"The dashboard could not be built".** Automatic Dashboard ran into an error while reading your home; the page says what to do. If the error comes back, [report it](https://github.com/Automatic-Dashboard/automatic-dashboard/issues/new?template=2-probleme.yml) with the message shown.

**A device does not appear.** Check that it has an area, that it is not hidden in Home Assistant, and that its entity is not in the "diagnostic" category. Otherwise, [report it](#report-a-problem).

**A technical sensor appears in a room.** Hide it in the settings (or put the "hide" label on it), and report it.

**The colors differ from the screenshots.** If Home Assistant shows the repair "The Automatic Dashboard theme could not be loaded", your `configuration.yaml` does not load the themes folder. Add these two lines, then restart:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

**I want to edit a card by hand.** The ⋮ menu of the settings offers *Take control*: the dashboard becomes a regular one, editable card by card, but it no longer updates itself. Keep an Automatic Dashboard dashboard next to it if you want both.

**The dashboard is in French.** It follows the language of your Home Assistant profile (at the bottom of the sidebar). It speaks English and French.

**I don't get notifications on my phone.** The Home Assistant app must be installed and signed in on the phone, and the phone ticked in *Notify me*, *Who to notify*.

## Update and uninstall

**Update**: new versions appear in *Settings*, *Updates*, like Home Assistant's own (in HACS before 2026.11). After updating, restart Home Assistant, then reload the page.

**Uninstall**: delete the dashboard (*Settings*, *Dashboards*), then the integration (*Settings*, *Devices & services*, Automatic Dashboard), then Automatic Dashboard itself, in the Marketplace (*Installed* tab), or in HACS before 2026.11. The theme (`themes/automatic_dashboard.yaml`), the labels and the "Notify me" automations stay: delete them if you no longer want them.

## Contribute

Every real home makes Automatic Dashboard better. Reporting a misplaced device, translating, proofreading texts or proposing code: the [contributing guide](https://github.com/Automatic-Dashboard/automatic-dashboard/blob/main/.github/CONTRIBUTING.md) explains how. Contributions in English are welcome.
