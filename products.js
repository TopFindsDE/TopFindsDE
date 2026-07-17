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
    title: "Alexa Echo Dot",
    description: "Anzeige | Enthält Affiliate-Link Der Amazon Echo Dot bringt Alexa in dein Zuhause. Musik abspielen, Timer stellen, Smart-Home-Geräte steuern und vieles mehr – alles per Sprachbefehl. Entdecke jetzt die neueste Generation!",
    image: "images/products/echo.jpg",
    link: "https://amzn.to/3R3KarU",
    category: "smarthome",
    featured: true,
    pick: true
  },
  {
    title: "Amazon Kindle Paperwhite",
    description: "📚 Anzeige | Enthält Affiliate-Links Lies tausende Bücher auf einem leichten, blendfreien Display – egal ob zuhause, im Urlaub oder unterwegs. Der Kindle Paperwhite überzeugt mit langer Akkulaufzeit, wasserfestem Design und angenehmem Lesen bei Tag und Nacht.",
    image: "images/products/kindle.jpg",
    link: "https://amzn.to/4wfDarg",
    category: "smarthome",
    featured: true
  },
  {
    title: "3 in 1 Ladestation Magsafe",
    description: "Anzeige | Enthält Affiliate-Links Schluss mit Kabelchaos! Diese hochwertige 3-in-1 MagSafe Ladestation lädt dein iPhone, deine Apple Watch und deine AirPods gleichzeitig – stilvoll und platzsparend. Perfekt für Homeoffice, Nachttisch oder Schreibtisch. Mit 15 W kabelloser Ladeleistung, starkem Magnet-Halt und kompaktem Design ist sie das ideale Zubehör für Apple-Nutzer. Jetzt entdecken!",
    image: "images/products/3in1.jpg",
    link: "https://amzn.to/4bxb3eB",
    category: "smarthome"
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
    title: "Ninja Dual Zone Digital Air Fryer",
    description: "Anzeige | Enthält Affiliate-Links Mehr Möglichkeiten in deiner Küche! Die Ninja Dual Zone Air Fryer mit zwei separaten Garkörben ermöglicht es dir, unterschiedliche Speisen gleichzeitig zuzubereiten – ideal für Familien, Meal Prep oder stressfreie Abendessen. Knusprige Ergebnisse mit wenig Öl und vielseitige Programme machen sie zu einem echten Küchenhelfer. Jetzt entdecken!",
    image: "images/products/fryer.jpg",
    link: "https://amzn.to/3TrcZ25",
    category: "kueche"
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
