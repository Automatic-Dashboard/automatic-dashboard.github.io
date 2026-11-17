---
layout: ../../layouts/Doc.astro
lang: en
page: documentation/
titre: Documentation
surtitre: Documentation
chapo: Install Automatic Dashboard, understand what it shows, adjust it, and get answers to the most common questions.
description: Install Automatic Dashboard in Home Assistant with HACS, understand the three modes, set favorites, hide and rename.
---

## Install

Automatic Dashboard requires **Home Assistant 2026.9 or newer** and **HACS**, the Home Assistant community store. If HACS is not installed yet, follow [its installation guide](https://hacs.xyz/docs/use/) first.

1. **Add Automatic Dashboard to HACS.** Until it is in the official catalog, Automatic Dashboard is added as a custom repository. This button opens the right page in your Home Assistant: [Open Automatic Dashboard in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=Automatic-Dashboard&repository=automatic-dashboard&category=integration). Choose *Download*, then **restart Home Assistant**.
2. **Add the integration**: [Add Automatic Dashboard](https://my.home-assistant.io/redirect/config_flow_start/?domain=automatic_dashboard). One screen, no questions.
3. **Create the dashboard**: *Settings*, *Dashboards*, *Add dashboard*, "Community dashboards" section, **Automatic Dashboard**. Give it a name; it appears in the sidebar.

The Automatic Dashboard theme, light and dark, is installed with the integration. The dashboard uses it even if you keep another theme elsewhere in Home Assistant.

If Home Assistant shows the repair "The Automatic Dashboard theme could not be loaded", your `configuration.yaml` does not load the themes folder. Add these two lines, then restart:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

## The first dashboard

Automatic Dashboard reads your areas, floors, devices and their states, then builds:

- **the home page**: the state of the house in one sentence, chips leading to each page, things to check, your favorites, your rooms, and on the side the weather, climate and energy overviews, "Right now" and the ephemeris;
- **one page per room**, with its lights, covers, sensors and climate;
- **one page per topic** when your home has something to fill it: Climate, Energy, Security, System, and "To sort".

The dashboard rebuilds itself when you add a device, an area or a floor. Two habits improve it a lot:

- **Give every device an area.** Devices without one go to "To sort", with a button to choose one.
- **Pick each room's temperature** in the area settings (*Settings*, *Areas*). Otherwise, Automatic Dashboard takes the one from a thermometer in the room.

## The three modes

One visual identity for everyone, but a density chosen from your home:

| Mode | When | What changes |
|---|---|---|
| **Discovery** | 5 useful devices or fewer, and 15 useful entities or fewer | The weather and each device shown large, first steps that tick themselves off |
| **Home** | all other cases | Things to check, favorites, medium room cards, overviews with curves |
| **Complete** | 100 useful entities or more, or 60 or more with 250 entities or 12 areas | Small room cards grouped by floor, compact tiles, more details in rooms |

A "useful" entity is a control, an opening, an alert, a camera, a measurement or an energy meter: not a technical sensor. The detected mode is shown in the settings, with its numbers, and you can force it.

## Settings

On the dashboard, the pencil in the top right corner (*Edit dashboard*) opens the Automatic Dashboard settings:

- **Mode**: automatic, or forced to Discovery, Home or Complete.
- **Favorites**: pin your own, then drag them to order them (or use the arrow keys on the handle). The devices you use most, according to Home Assistant, fill the row up to 4 or 8 tiles; a switch lets you keep only yours.
- **Hidden**: what Automatic Dashboard never shows. The rest of Home Assistant is not touched.
- **Names**: the name shown in Automatic Dashboard. The Home Assistant name, and therefore voice assistants', stays the same.
- **Rooms**: they follow the order chosen in Home Assistant (*Settings*, *Areas*, by dragging them).

The same settings can be written in YAML (⋮ menu of the dialog, *Edit in YAML*):

```yaml
type: custom:automatic-dashboard
mode: complet          # otherwise automatic (modes: decouverte, maison, complet)
favoris:               # pinned favorites, in this order
  - light.living_room
completer: false       # pinned favorites only
masquer:               # entities never shown
  - switch.technical_plug
noms:                  # names shown in Automatic Dashboard
  light.bedside_lamp: Night light
```

Settings belong to the dashboard and are shared by all accounts. For a wall tablet in Home mode and a phone in Complete mode, create two Automatic Dashboard dashboards.

## Day to day

- **Advice.** When two facts meet, the dashboard says what to do: "Close the living room window" if the heating is on in that room, "Air out the bedroom" above 1,000 ppm of CO₂ or 80% humidity.
- **Ignore a thing to check for today.** The crossed-out eye, to the right of an item, hides it until tomorrow, on all your screens. "Show again" brings it back. A leak, smoke or a triggered alarm can never be ignored.
- **Notify me.** The bell, on a leak, a low battery or a failed backup, creates the ready-made automation in Home Assistant (*Settings*, *Automations*): it watches every sensor of the same kind, notifies the phones running the Home Assistant app and leaves a notification. It is yours afterwards: edit it freely. Administrators only.
- **Away mode.** When every person tracked by Home Assistant has left, the home sentence says what is still open, on or unlocked, and those items come first. The layout does not change.
- **The weekly report.** A page of its own, announced every Monday: energy day by day compared with the week before, inside and outside temperatures, what was opened and how many times. Also reachable from the Energy page.
- **The sky of the day** at the top of the home page: the sun's arc between sunrise and sunset, and at night the moon and its phase. **The floor plan**, in Climate: each room is a block colored by its temperature, floor by floor.
- **The wall tablet.** On the tablet, open the `tablette` page of your dashboard (for example `/home-dashboard/tablette`): the time shown large, the status sentence, the things to check. From 11 pm to 6 am, after a minute without a touch, a black screen saver keeps only the time; a touch wakes it.
- **To sort suggests the room.** When the name of a device without an area names a room ("Living room lamp"), the "Living room?" button sets it in one click, with "Undo".

## Bulk-setting labels

The integration creates three labels in Home Assistant (*Settings*, *Labels*). Put them on dozens of entities, devices or areas at once, from Home Assistant's lists:

| Label | Where | Effect |
|---|---|---|
| **Automatic Dashboard: hide** | entity, device or area | never shown; on an area, the area and everything in it |
| **Automatic Dashboard: favorite** | entity or device | joins the home page favorites, after the ones pinned in the settings |
| **Automatic Dashboard: outdoor** | area | its temperature becomes the outdoor one and leaves the home average |

You can rename them or change their color: the dashboard recognizes them by their ID. A deleted label is not created again.

## What it shows, and what it hides

Automatic Dashboard first sets aside what is not useful day to day: hidden or disabled entities, the "diagnostic" and "configuration" categories, technical domains (automations, zones…), and misfiled technical sensors (signal, duration, IP address, firmware…). Batteries, updates and backups go to System.

Then, a single entity per device, the one carrying its name, and a single representative per room and per measurement: the home's power comes from the meter, never from the sum of the plugs.

For the weather, Automatic Dashboard uses Météo-France if installed, otherwise Home Assistant's weather integration. It fetches no data itself: in Discovery mode, it offers to add useful integrations in one click.

## Privacy

Automatic Dashboard contacts no external service and collects nothing. The dashboard runs in your browser and reads what Home Assistant already gives it, with the rights of the signed-in account. The integration creates no entity and opens no access.

## Frequently asked questions

**A device does not appear.** Check that it has an area, that it is not hidden in Home Assistant, and that its entity is not in the "diagnostic" category. If it is an everyday device, report it: in the settings, *Report a problem* section, pick the device, download the diagnostic and attach it to [an issue](https://github.com/Automatic-Dashboard/automatic-dashboard/issues/new/choose). It describes your home without any name or value (you can read it), and becomes a test case: the rule will be fixed for everyone, for good.

**A technical sensor appears in a room.** Hide it in the settings, and report it: some integrations do not file their technical sensors as "diagnostic".

**I want to edit a card by hand.** The ⋮ menu of the settings offers *Take control*: the dashboard becomes a regular one, editable card by card, but it no longer updates itself. Keep an Automatic Dashboard dashboard next to it if you want both.

**The dashboard is in French.** It follows the language of your Home Assistant profile (at the bottom of the sidebar).

**The colors differ from the screenshots.** See the theme repair in [Install](#install).

**Updating.** HACS announces new versions, as for any integration. After updating, restart Home Assistant and reload the page.

## Uninstall

Delete the dashboard (*Settings*, *Dashboards*), then the integration (*Settings*, *Devices & services*, Automatic Dashboard), then Automatic Dashboard in HACS. The theme file, `themes/automatic_dashboard.yaml`, stays in your configuration, like a theme installed by HACS: delete it if you no longer want it.

## Contribute

Every real home makes Automatic Dashboard better. Reporting a misplaced device, translating the interface, proofreading texts or proposing code: the [contributing guide](https://github.com/Automatic-Dashboard/automatic-dashboard/blob/main/CONTRIBUTING.md) explains how. Contributions in English are welcome.
