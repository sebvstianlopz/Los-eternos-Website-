# Santurtzi: QR drinks menu

The digital menu for **Santurtzi**, a bar on Calle Cerra in San Juan, Puerto Rico. Guests scan the QR code on the table and see every drink with:

- a photo
- its ingredients and price
- what makes it unique

They tap **+** to build an order, then hit **"Mostrar al bartender"** to show a large-print summary. The bartender reads the order instead of answering questions.

- **Live menu:** https://sebvstianlopz.github.io/firstrepo-/santurtzi/ (English: `/en/`)
- **Printable table card with the QR code:** https://sebvstianlopz.github.io/firstrepo-/santurtzi/qr/

Phones set to English open the English menu automatically. Everyone else gets Spanish, and there's an ES/EN button on the page.

> ⚠️ All 21 drinks, their prices, hours and the Instagram handle are **placeholders**. Replace them before printing the QR cards.

## Edit the menu

Each drink is a folder in `src/content/drinks/<slug>/` containing a `data.yaml` file:

```yaml
name: { es: Daiquirí de parcha, en: Passion Fruit Daiquiri }   # or just: name: Mojito
category: casa          # casa | clasicos | sin-alcohol | cervezas | vinos | shots
order: 2                # position inside its category
price: 12
size: 12 oz             # optional, shown next to the price
signature: true         # "De la casa" badge
seasonal: false         # "Temporada" badge
available: true         # false = greyed out as "Agotado hoy" (stays visible)
base: { es: Ron blanco puertorriqueño, en: Puerto Rican white rum }
unique:                 # one line on the card: why pick this one
  es: ...
  en: ...
description: { es: ..., en: ... }
ingredients:
  - { es: Pulpa de parcha, en: Passion fruit pulp }
  - Campari             # same word in both languages
flavor: [afrutado, citrico, dulce]   # 1–3 of: refrescante citrico dulce afrutado amargo herbal cremoso ahumado
strength: 2             # 0 sin alcohol · 1 suave · 2 medio · 3 fuerte
glass: coupe            # rocks highball coupe martini copa wine hurricane pint bottle shot
contains: [coco]        # allergens: lacteos coco huevo gluten frutos-secos
pairsWith: [margarita, pina-colada]  # slugs of other drinks ("Si te gusta este, prueba…")
color: '#f2b632'        # used by the illustration while there's no photo
garnish: passion        # lime lemon orange cherry mint pineapple coffee cinnamon passion none
photo: ./foto.jpg       # optional, see below
```

- **Add a drink:** copy a folder, rename it (the folder name is the slug used in links like `#mojito`), and edit `data.yaml`.
- **Remove a drink:** delete its folder. Also delete its slug from any other drink's `pairsWith`, or the build will fail and tell you which one.
- **Sold out tonight:** set `available: false`.

### Photos

Until a drink has a photo, the menu draws an illustration from its `glass`, `color` and `garnish`. To use a real photo:

1. Put the photo in the drink's folder, e.g. `src/content/drinks/mojito/foto.jpg`.
2. Add `photo: ./foto.jpg` to that drink's `data.yaml`.

The build resizes and compresses it automatically.

For a consistent look, shoot every drink the same way: dark background, the same angle and the same distance, with the glass centered and some space around it. Portrait or square photos work best.

### Bar details

Name, address, hours, Instagram and the map link are in `src/config/site.ts`. All interface text in both languages is in `src/i18n/index.ts`.

## Run it locally

```sh
cd santurtzi
npm install
npm run dev        # http://localhost:4321/firstrepo-/santurtzi/
npm run check      # type + content validation
npm run build      # static site in dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/pages.yml`. It builds `los-eternos` and this menu and publishes both on GitHub Pages, with the menu at `/firstrepo-/santurtzi/`.

To move the menu to its own domain later, build with `SITE_URL=https://your-domain BASE_PATH=/`. The QR code on `/qr/` always points at the deployed menu URL, so **reprint the cards after changing the domain**.

## Print the QR cards

Open `/qr/` and press **Imprimir**. The card is sized 4×6 in. Print one per table and one for the bar. Test-scan a printed card with a phone before laminating.
