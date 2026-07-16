# TopFinds.DE – So bringst du die Website online

## 1. Dateien hochladen
Lade diese 3 Dateien in dein GitHub-Repository **TopFindsDE** hoch (die alten Versionen einfach ersetzen):

- `index.html`
- `style.css`
- `script.js`

Klicke dazu im Repository auf **Add file → Upload files**, ziehe die Dateien hinein und klicke auf **Commit changes**. Nach 1–2 Minuten ist die Seite unter `topfindsde.github.io/TopFindsDE/` aktualisiert.

## 2. Produkte eintragen
Öffne `script.js` (im Repository: Datei anklicken → Stift-Symbol ✏️).
Ganz oben findest du die Liste `PRODUKTE`. Für jedes Produkt änderst du:

| Feld | Beispiel |
|---|---|
| `titel` | "Bluetooth-Kopfhörer XY" |
| `kategorie` | "Technik" (muss zu einer Kategorie aus `KATEGORIEN` passen) |
| `beschreibung` | 1–2 Sätze, warum sich das Produkt lohnt |
| `preis` | "29,99 €" |
| `sterne` | 4.5 |
| `bewertungen` | 1200 |
| `badge` | "Bestseller", "Preis-Tipp", "Neu" oder "" |
| `image` | "bilder/produkt1.jpg" (leer = Platzhalter) |
| `link` | Dein Amazon-Partnerlink |

**Wichtig:** Die ersten 3 Produkte in der Liste erscheinen automatisch als Top 1/2/3 in der großen Slideshow oben.

## 3. Bilder einfügen
1. Erstelle im Repository einen Ordner: **Add file → Create new file** → als Namen `bilder/info.txt` eingeben (so wird der Ordner angelegt).
2. Lade deine Produktbilder in den Ordner `bilder` hoch.
3. Trage in `script.js` beim Produkt den Pfad ein, z. B. `"image": "bilder/kopfhoerer.jpg"`.

Tipp: Quadratische Bilder (z. B. 800×800 px) mit weißem Hintergrund sehen am besten aus.

## 4. Rechtliches (wichtig in Deutschland!)
- Der Hinweis „Als Amazon-Partner verdienen wir an qualifizierten Verkäufen" ist bereits oben und im Footer eingebaut – so verlangt es Amazon.
- Für eine kommerzielle Website in Deutschland brauchst du ein **Impressum** und eine **Datenschutzerklärung**. Die Links im Footer zeigen auf `impressum.html` und `datenschutz.html` – diese beiden Seiten musst du noch erstellen (ich helfe dir gern dabei).

## 5. Kategorien anpassen
Ebenfalls oben in `script.js` in der Liste `KATEGORIEN`: Name, Emoji-Icon und Kurzbeschreibung frei änderbar. Die Filter-Buttons passen sich automatisch an.
