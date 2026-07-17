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
    title: "Krups Smart'n Light Wasserkocher",
    description: "Anzeige | Enthält Affiliate-Links Genieße Tee und Kaffee immer bei der idealen Temperatur! ☕ Der KRUPS Smart'n Light Wasserkocher bietet fünf Temperaturstufen, ein modernes LED-Display und ein doppelwandiges Design für mehr Komfort und Sicherheit im Alltag. Perfekt für Kaffee-, Tee- und Matcha-Liebhaber. Jetzt entdecken!",
    image: "images/products/wasserkocher.jpg",
    link: "https://amzn.to/4wNzXig",
    category: "kueche",
    pick: true
  },
  {
    title: "Shark StainStriker Fleckenreiniger",
    description: "Anzeige | Enthält Affiliate-Links Verabschiede dich von hartnäckigen Flecken auf Teppichen, Polstern und Autositzen. Der Shark StainStriker entfernt Schmutz, Flüssigkeiten und Gerüche gründlich und eignet sich ideal für Familien, Haustierbesitzer und alle, die ihr Zuhause sauber halten möchten. Dank verschiedener Aufsätze erreichst du auch schwer zugängliche Stellen mühelos. Jetzt entdecken!",
    image: "images/products/fleckenreiniger.jpg",
    link: "https://amzn.to/4fahiY4",
    category: "haushalt",
    featured: true
  },
  {
    title: "PHILIPS OneBlade Pro 360 Face & Body",
    description: "Anzeige | Enthält Affiliate-Links Nur ein Gerät für Rasieren, Trimmen und Stylen – ganz ohne komplizierte Routine. Der Philips OneBlade Pro 360 passt sich den Gesichtskonturen an und eignet sich für Bart, Konturen und Körperpflege. Mit langer Akkulaufzeit, präzisem Trimmkamm und wasserfestem Design ist er der ideale Begleiter für die tägliche Pflege. Jetzt entdecken!",
    image: "images/products/oneblade.jpg",
    link: "https://amzn.to/4ytqTAU",
    category: "haushalt",
    featured: true,
    pick: true
  },
  {
    title: "NOCO Boost GB40",
    description: "Anzeige | Enthält Affiliate-Links Eine leere Autobatterie muss keine Reise mehr stoppen. Die NOCO Boost GB40 Starthilfe-Powerbank bringt viele Benzin- und Dieselfahrzeuge schnell wieder zum Laufen und dient zusätzlich als Powerbank für Smartphone & Co. Kompakt, leistungsstark und ideal für Auto, Motorrad oder Wohnmobil – ein praktischer Begleiter für jede Fahrt. Jetzt entdecken!",
    image: "images/products/starthilfe.jpg",
    link: "https://amzn.to/4fnkUom",
    category: "auto"
  },
  {
    title: "RENPHO Körperfettwaage mit Handsensoren",
    description: "Anzeige | Enthält Affiliate-Links Erreiche deine Fitnessziele mit präzisen Körperdaten. Die RENPHO Körperfettwaage mit Handsensoren analysiert Gewicht, Körperfett, Muskelmasse, BMI und viele weitere Werte. Dank Bluetooth-App behältst du deine Fortschritte jederzeit im Blick – ideal für Fitness, Muskelaufbau und einen gesunden Lebensstil. Jetzt entdecken!",
    image: "images/products/waage.jpg",
    link: "https://amzn.to/4aYrvV9",
    category: "fitness"
  },
  {
    title: "LEGO Botanicals Orchidee",
    description: "Anzeige | Enthält Affiliate-Links Bringe zeitlose Eleganz in dein Zuhause! Die LEGO Botanicals Orchidee verbindet kreativen Bauspaß mit stilvoller Wohnraumdekoration. Perfekt als Geschenk oder dekorativer Blickfang für Wohnzimmer, Büro oder Schlafzimmer. Eine wunderschöne Alternative zu echten Pflanzen – ganz ohne Pflege. Jetzt entdecken!",
    image: "images/products/orchidee.jpg",
    link: "https://amzn.to/3T7H8DB",
    category: "geschenkideen"
  },
  {
    title: "PETLIBRO 5L Futterautomat für Katze mit APP",
    description: "Anzeige | Enthält Affiliate-Links Sorge dafür, dass dein Haustier zuverlässig versorgt wird – auch wenn du unterwegs bist. Der PETLIBRO Futterautomat mit App-Steuerung, 5G-WLAN und individuell planbaren Mahlzeiten erleichtert den Alltag und unterstützt eine regelmäßige Fütterung. Ideal für Katzen und kleine Hunde. Jetzt entdecken!",
    image: "images/products/futterspender.jpg",
    link: "https://amzn.to/4wOWafN",
    category: "haustiere",
    featured: true
  },
  { 
    title: "Logitech MX Master 3S",
    description: "Anzeige | Enthält Affiliate-Links Arbeite schneller und komfortabler – egal ob im Homeoffice, Studium oder Büro. Die Logitech MX Master 3S überzeugt mit ergonomischem Design, präzisem 8K-DPI-Sensor, ultraschnellem MagSpeed-Scrollrad und anpassbaren Tasten. Ideal für kreative Projekte, Multitasking und produktives Arbeiten. Jetzt entdecken!",
    image: "images/products/maus.jpg",
    link: "https://amzn.to/3T6TifY",
    category: "buero",
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
  { slug: "geschenkideen", name: "Wohnideen & Deko" }
];
