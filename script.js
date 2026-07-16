/* ==========================================================
   TopFinds.DE – script.js
   ▼▼▼ HIER PFLEGST DU DEINE PRODUKTE & KATEGORIEN ▼▼▼

   So fügst du ein Produkt hinzu:
   1. Kopiere einen Block { ... }, und passe die Werte an.
   2. "image": Pfad zu deinem Bild, z. B. "bilder/produkt1.jpg"
      → Lade die Bilder einfach in einen Ordner "bilder" in
        deinem GitHub-Repository hoch.
      → Lässt du "image" leer (""), zeigt die Seite automatisch
        einen Platzhalter an.
   3. "link": Dein Amazon-Affiliate-Link (Partnerlink).
   4. Die ERSTEN 3 Produkte erscheinen automatisch als
      Top 1/2/3 in der großen Slideshow oben.
   ========================================================== */

const KATEGORIEN = [
  { name: "Technik",   icon: "🎧", beschreibung: "Gadgets & Elektronik" },
  { name: "Haushalt",  icon: "🏠", beschreibung: "Praktisches für Zuhause" },
  { name: "Küche",     icon: "🍳", beschreibung: "Kochen & Genießen" },
  { name: "Fitness",   icon: "💪", beschreibung: "Sport & Gesundheit" },
  { name: "Beauty",    icon: "✨", beschreibung: "Pflege & Kosmetik" },
  { name: "Gaming",    icon: "🎮", beschreibung: "Zocken & Zubehör" },
];

const PRODUKTE = [
  {
    titel: "Produkt-Titel hier eintragen",
    kategorie: "Technik",
    beschreibung: "Kurze Beschreibung: Warum lohnt sich dieses Produkt? (1–2 Sätze)",
    preis: "29,99 €",
    sterne: 4.5,           // 0 bis 5, halbe Sterne möglich (z. B. 4.5)
    bewertungen: 1200,     // Anzahl der Bewertungen auf Amazon
    badge: "Top 1",        // z. B. "Bestseller", "Preis-Tipp", "Neu" – oder "" für kein Badge
    image: "",             // z. B. "bilder/produkt1.jpg" – leer = Platzhalter
    link: "https://www.amazon.de/dp/XXXXXXXXXX?tag=DEIN-AFFILIATE-TAG"
  },
  {
    titel: "Zweites Produkt",
    kategorie: "Haushalt",
    beschreibung: "Kurze Beschreibung des Produkts.",
    preis: "49,99 €",
    sterne: 4.5,
    bewertungen: 860,
    badge: "Top 2",
    image: "",
    link: "https://www.amazon.de/dp/XXXXXXXXXX?tag=DEIN-AFFILIATE-TAG"
  },
  {
    titel: "Drittes Produkt",
    kategorie: "Küche",
    beschreibung: "Kurze Beschreibung des Produkts.",
    preis: "19,99 €",
    sterne: 4,
    bewertungen: 2300,
    badge: "Top 3",
    image: "",
    link: "https://www.amazon.de/dp/XXXXXXXXXX?tag=DEIN-AFFILIATE-TAG"
  },
  {
    titel: "Viertes Produkt",
    kategorie: "Fitness",
    beschreibung: "Kurze Beschreibung des Produkts.",
    preis: "34,99 €",
    sterne: 4.5,
    bewertungen: 540,
    badge: "Preis-Tipp",
    image: "",
    link: "https://www.amazon.de/dp/XXXXXXXXXX?tag=DEIN-AFFILIATE-TAG"
  },
  {
    titel: "Fünftes Produkt",
    kategorie: "Beauty",
    beschreibung: "Kurze Beschreibung des Produkts.",
    preis: "24,99 €",
    sterne: 5,
    bewertungen: 310,
    badge: "Neu",
    image: "",
    link: "https://www.amazon.de/dp/XXXXXXXXXX?tag=DEIN-AFFILIATE-TAG"
  },
  {
    titel: "Sechstes Produkt",
    kategorie: "Gaming",
    beschreibung: "Kurze Beschreibung des Produkts.",
    preis: "59,99 €",
    sterne: 4.5,
    bewertungen: 1750,
    badge: "Bestseller",
    image: "",
    link: "https://www.amazon.de/dp/XXXXXXXXXX?tag=DEIN-AFFILIATE-TAG"
  },
];

/* ==========================================================
   ▲▲▲ AB HIER MUSST DU NICHTS MEHR ÄNDERN ▲▲▲
   ========================================================== */

// ---------- Hilfsfunktionen ----------
function sterneHTML(wert, anzahl) {
  const voll = Math.floor(wert);
  const halb = wert % 1 >= 0.5 ? 1 : 0;
  const leer = 5 - voll - halb;
  const halbStern = halb ? `<span style="opacity:.45">★</span>` : "";
  return `<div class="stars">${"★".repeat(voll)}${halbStern}${"☆".repeat(leer)}<small>${wert.toLocaleString("de-DE")} (${anzahl.toLocaleString("de-DE")})</small></div>`;
}

function bildHTML(produkt) {
  if (produkt.image) {
    return `<img src="${produkt.image}" alt="${produkt.titel}" loading="lazy">`;
  }
  return `<div class="placeholder"><span>📦</span>Produktbild folgt</div>`;
}

// ---------- Kategorien rendern ----------
const categoryGrid = document.getElementById("categoryGrid");
KATEGORIEN.forEach(kat => {
  const el = document.createElement("a");
  el.className = "category-card reveal";
  el.href = "#empfehlungen";
  el.innerHTML = `
    <div class="cat-icon">${kat.icon}</div>
    <h3>${kat.name}</h3>
    <p>${kat.beschreibung}</p>`;
  el.addEventListener("click", () => setFilter(kat.name));
  categoryGrid.appendChild(el);
});

// ---------- Produktkarten rendern ----------
const productGrid = document.getElementById("productGrid");

function renderProdukte(filter = "Alle") {
  productGrid.innerHTML = "";
  const liste = filter === "Alle"
    ? PRODUKTE
    : PRODUKTE.filter(p => p.kategorie === filter);

  liste.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "product-card reveal";
    card.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
    card.innerHTML = `
      <div class="product-img">${bildHTML(p)}</div>
      <div class="product-body">
        ${p.badge ? `<span class="badge ${p.badge.startsWith("Top") ? "badge-green" : ""}">${p.badge}</span>` : ""}
        <h3>${p.titel}</h3>
        ${sterneHTML(p.sterne, p.bewertungen)}
        <p class="product-desc">${p.beschreibung}</p>
        <div class="price-row">
          <span class="price">${p.preis}</span>
          <span class="price-note">inkl. MwSt.*</span>
        </div>
        <a class="btn btn-cta" href="${p.link}" target="_blank" rel="nofollow sponsored noopener">Bei Amazon ansehen&nbsp;→</a>
      </div>`;
    productGrid.appendChild(card);
  });

  beobachteReveals();
}

// ---------- Filter-Buttons ----------
const filterRow = document.getElementById("filterRow");
const filterNamen = ["Alle", ...KATEGORIEN.map(k => k.name)];

filterNamen.forEach(name => {
  const btn = document.createElement("button");
  btn.className = "filter-btn" + (name === "Alle" ? " active" : "");
  btn.textContent = name;
  btn.addEventListener("click", () => setFilter(name));
  filterRow.appendChild(btn);
});

function setFilter(name) {
  document.querySelectorAll(".filter-btn").forEach(b =>
    b.classList.toggle("active", b.textContent === name));
  renderProdukte(name);
}

// ---------- Hero-Slideshow (Top 3) ----------
const slider = document.getElementById("heroSlider");
const dots = document.getElementById("sliderDots");
const topDrei = PRODUKTE.slice(0, 3);
let aktuellerSlide = 0;
let slideTimer;

topDrei.forEach((p, i) => {
  const slide = document.createElement("div");
  slide.className = "slide" + (i === 0 ? " active" : "");
  slide.innerHTML = `
    <div class="rank">${i + 1}</div>
    <div class="slide-card">
      <div class="product-img">${bildHTML(p)}</div>
      <h3>${p.titel}</h3>
      ${sterneHTML(p.sterne, p.bewertungen)}
      <div class="price">${p.preis}</div>
      <a class="btn btn-cta" href="${p.link}" target="_blank" rel="nofollow sponsored noopener">Bei Amazon ansehen&nbsp;→</a>
    </div>`;
  slider.insertBefore(slide, dots);

  const dot = document.createElement("button");
  dot.setAttribute("aria-label", `Produkt ${i + 1} anzeigen`);
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => zeigeSlide(i, true));
  dots.appendChild(dot);
});

function zeigeSlide(index, manuell = false) {
  const slides = slider.querySelectorAll(".slide");
  const dotBtns = dots.querySelectorAll("button");
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  dotBtns.forEach((d, i) => d.classList.toggle("active", i === index));
  aktuellerSlide = index;
  if (manuell) starteSlideTimer(); // Timer neu starten bei Klick
}

function starteSlideTimer() {
  clearInterval(slideTimer);
  const reduziert = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduziert || topDrei.length < 2) return;
  slideTimer = setInterval(() => {
    zeigeSlide((aktuellerSlide + 1) % topDrei.length);
  }, 4500);
}

// ---------- Scroll-Reveal ----------
let observer;
function beobachteReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    return;
  }
  if (!observer) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
}

// ---------- Mobile-Menü ----------
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
  }));

// ---------- Start ----------
document.getElementById("year").textContent = new Date().getFullYear();
renderProdukte();
beobachteReveals();
starteSlideTimer();
