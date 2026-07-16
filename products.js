/* ============================================================
   TopFindsDE — products.js
   ------------------------------------------------------------
   DIES IST DIE EINZIGE DATEI, DIE DU PFLEGEN MUSST.

   Jedes Produkt ist ein Objekt mit genau diesen Feldern:

   {
     title:       "Produkttitel",
     description: "Kurze Beschreibung (1–2 Sätze).",
     image:       "images/products/dateiname.jpg",
     link:        "https://amzn.to/DEIN-AFFILIATE-LINK",
     category:    "technik",           // siehe Kategorie-Liste unten
     featured:    true,                // optional: erscheint im Bestseller-Slider
     pick:        true                 // optional: erscheint als große Empfehlung
   }

   Gültige Kategorien (exakt so schreiben):
   technik, gaming, haushalt, smarthome, auto, beauty,
   fitness, haustiere, kueche, outdoor, buero, geschenkideen

   Neue Produkte einfach unten anhängen — sie erscheinen
   automatisch auf der Website. Fehlt ein Bild, zeigt die Seite
   automatisch einen eleganten Platzhalter an.
   ============================================================ */

const PRODUCTS = [
  {
    title: "Kabellose Noise-Cancelling Kopfhörer",
    description: "Studioklang ohne Kabel. Aktive Geräuschunterdrückung, 40 Stunden Akku und ein Tragegefühl, das man nach Minuten vergisst.",
    image: "images/products/kopfhoerer.jpg",
    link: "https://amzn.to/BEISPIEL-1",
    category: "technik",
    featured: true,
    pick: true
  },
  {
    title: "Mechanische Gaming-Tastatur",
    description: "Präzise Hot-Swap-Switches, dezente Beleuchtung und ein Anschlag, der jede Session besser macht.",
    image: "images/products/tastatur.jpg",
    link: "https://amzn.to/BEISPIEL-2",
    category: "gaming",
    featured: true
  },
  {
    title: "Akku-Handstaubsauger",
    description: "Kraftvoll, leise, in Sekunden griffbereit. Für Krümel, Auto und alles dazwischen.",
    image: "images/products/handstaubsauger.jpg",
    link: "https://amzn.to/BEISPIEL-3",
    category: "haushalt"
  },
  {
    title: "Amazon Fire TV Stick HD",
    description: "Anzeige | Enthält Affiliate-Link Mit dem Fire TV Stick HD streamst du Netflix, Prime Video, YouTube und viele weitere Apps auf deinem Fernseher. Entdecke alle Funktionen über den Link.",
    image: "images/products/firetv.jpg",
    link: "https://amzn.to/3RcT0nd",
    category: "smarthome",
    featured: true
  },
  {
    title: "Kompressor-Luftpumpe fürs Auto",
    description: "Reifendruck prüfen und korrigieren — kabellos, mit Display, in unter zwei Minuten.",
    image: "images/products/luftpumpe.jpg",
    link: "https://amzn.to/BEISPIEL-5",
    category: "auto"
  },
  {
    title: "Ergonomischer Bürostuhl",
    description: "Atmungsaktives Mesh, präzise Lordosenstütze. Acht Stunden sitzen, ohne es zu merken.",
    image: "images/products/buerostuhl.jpg",
    link: "https://amzn.to/BEISPIEL-6",
    category: "buero",
    pick: true
  },
  {
    title: "Edelstahl-Isolierflasche",
    description: "Hält 24 Stunden kalt, 12 Stunden heiß. Dicht, elegant, unverwüstlich.",
    image: "images/products/isolierflasche.jpg",
    link: "https://amzn.to/BEISPIEL-7",
    category: "outdoor",
    featured: true
  },
  {
    title: "Präzisions-Kaffeemühle",
    description: "40 Mahlgrade von Espresso bis French Press. Der Unterschied, den man schmeckt.",
    image: "images/products/kaffeemuehle.jpg",
    link: "https://amzn.to/BEISPIEL-8",
    category: "kueche",
    featured: true,
    pick: true
  },
  {
    title: "Massagepistole mit 5 Aufsätzen",
    description: "Tiefenwirksame Regeneration nach dem Training — leise genug fürs Wohnzimmer.",
    image: "images/products/massagepistole.jpg",
    link: "https://amzn.to/BEISPIEL-9",
    category: "fitness"
  },
  {
    title: "Automatischer Futterspender",
    description: "Pünktliche Portionen, auch wenn du nicht zu Hause bist. Mit Kamera und App-Steuerung.",
    image: "images/products/futterspender.jpg",
    link: "https://amzn.to/BEISPIEL-10",
    category: "haustiere"
  },
  {
    title: "Beheizbare Jade-Gesichtsroller",
    description: "Spa-Moment für zu Hause. Kühlt, strafft und entspannt in fünf Minuten.",
    image: "images/products/gesichtsroller.jpg",
    link: "https://amzn.to/BEISPIEL-11",
    category: "beauty"
  },
  {
    title: "Sternenhimmel-Projektor",
    description: "Ein Geschenk, das jeden Raum verzaubert — Galaxien, Nebel und sanfte Wellen an der Decke.",
    image: "images/products/projektor.jpg",
    link: "https://amzn.to/BEISPIEL-12",
    category: "geschenkideen",
    featured: true
  }
];

/* Kategorien: Anzeigename + Slug. Nur ändern, wenn du neue
   Kategorien einführen willst — die Startseite baut sich daraus
   automatisch auf. */
const CATEGORIES = [
  { slug: "technik",       name: "Technik" },
  { slug: "gaming",        name: "Gaming" },
  { slug: "haushalt",      name: "Haushalt" },
  { slug: "smarthome",     name: "Smart Home" },
  { slug: "auto",          name: "Auto" },
  { slug: "beauty",        name: "Beauty" },
  { slug: "fitness",       name: "Fitness" },
  { slug: "haustiere",     name: "Haustiere" },
  { slug: "kueche",        name: "Küche" },
  { slug: "outdoor",       name: "Outdoor" },
  { slug: "buero",         name: "Büro" },
  { slug: "geschenkideen", name: "Geschenkideen" }
];
