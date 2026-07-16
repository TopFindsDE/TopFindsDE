# TopFindsDE

Premium-Affiliate-Website für handverlesene Amazon-Produktempfehlungen.
Reines HTML, CSS und JavaScript — kein Framework, kein Build-Schritt, kein Baukasten.

## Projektstruktur

```
TopFindsDE/
├── index.html          Startseite (Hero, Kategorien, Bestseller, Masonry, Empfehlungen, Newsletter)
├── style.css           Komplettes Design-System (Light + Dark Mode)
├── script.js           Rendering, Animationen, Suche, Filter, Theme
├── products.js         ★ DIE EINZIGE DATEI, DIE DU PFLEGST ★
├── impressum.html      Rechtliches (vor Livegang ausfüllen!)
├── datenschutz.html    Rechtliches (vor Livegang anpassen!)
├── robots.txt
├── sitemap.xml
├── manifest.json
├── favicon.ico
├── icons/              PWA-Icons (192px, 512px)
├── images/products/    Hierhin kommen deine Produktbilder
├── assets/             OG-Bild etc.
└── fonts/              Optional: lokal gehostete Schriften
```

## Produkte pflegen — so einfach geht's

Öffne `products.js` und füge ein Objekt hinzu:

```js
{
  title:       "Produktname",
  description: "Ein bis zwei Sätze, warum das Produkt überzeugt.",
  image:       "images/products/mein-bild.jpg",
  link:        "https://amzn.to/dein-affiliate-link",
  category:    "technik",
  featured:    true,   // optional → erscheint im Bestseller-Slider + Hero
  pick:        true    // optional → erscheint als große Empfehlung
}
```

Speichern — fertig. Das Produkt erscheint automatisch auf der Website:
im Masonry-Grid, in der Suche, im Kategorie-Filter und (je nach Flags)
im Slider und den Empfehlungen.

**Fehlt ein Bild?** Kein Problem: Die Seite zeigt automatisch einen
eleganten Platzhalter, bis die Bilddatei existiert.

**Bild-Empfehlung:** JPG oder WebP, ca. 800×600 px, unter 150 KB
(z. B. mit [squoosh.app](https://squoosh.app) komprimieren).

## Kategorien

Gültige Slugs: `technik, gaming, haushalt, smarthome, auto, beauty,
fitness, haustiere, kueche, outdoor, buero, geschenkideen`.
Neue Kategorien fügst du am Ende von `products.js` im Array `CATEGORIES` hinzu.

## Vor dem Livegang — Checkliste

1. **Impressum ausfüllen** (`impressum.html`) — Pflicht in Deutschland.
2. **Datenschutz anpassen** (`datenschutz.html`) — Hosting-Anbieter und Newsletter-Dienst eintragen.
3. **Domain ersetzen:** In `index.html`, `sitemap.xml` und `robots.txt` steht
   `https://www.topfindsde.de/` — durch deine echte Domain ersetzen.
4. **OG-Bild hochladen:** `assets/og-image.jpg` (1200×630 px) für schöne
   Vorschauen bei Pinterest, WhatsApp & Co.
5. **Affiliate-Links eintragen:** Die Beispiel-Links (`amzn.to/BEISPIEL-…`)
   durch deine echten Partner-Links ersetzen.
6. **Newsletter anbinden:** In `script.js` unter „14 · NEWSLETTER" den
   fetch-Aufruf zu deinem Dienst (Brevo, Mailchimp, …) ergänzen.

## Deployment (GitHub Pages)

1. Neues Repository auf GitHub anlegen.
2. Alle Dateien in den `main`-Branch hochladen.
3. Settings → Pages → Source: `main` / root → speichern.
4. Nach ~1 Minute ist die Seite live unter `https://DEINNAME.github.io/REPO/`.

Alternativ funktioniert jeder statische Host (Netlify, Vercel, Cloudflare
Pages, klassisches Webhosting per FTP) ohne Anpassungen.

## Performance-Hinweise

- Alle Bilder laden lazy (`loading="lazy"`), Icons sind Inline-SVG (0 Requests).
- Animationen laufen ausschließlich über `transform`/`opacity` (GPU) via
  IntersectionObserver und requestAnimationFrame — kein Scroll-Jank.
- `prefers-reduced-motion` wird respektiert.
- Für maximale Lighthouse-Werte: Google Fonts optional lokal in `fonts/`
  hosten und im CSS per `@font-face` einbinden (spart den externen Request
  und ist zusätzlich DSGVO-freundlicher).

## Design-System (Kurzreferenz)

| Token | Light | Dark |
|---|---|---|
| Hintergrund | `#FAF9F6` Porzellan | `#15130F` Espresso |
| Text | `#16140F` Tinte | `#F1EDE4` |
| Akzent | `#A17C3F` Bronze | `#C9A25E` |
| Display-Schrift | Fraunces | Fraunces |
| Fließtext | Instrument Sans | Instrument Sans |

Alle Farben, Radien, Schatten und Timings liegen als CSS-Variablen in
`style.css` (Abschnitt „01 · Design-Tokens") — eine Änderung dort wirkt
auf die gesamte Seite.
