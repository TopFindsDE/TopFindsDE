/* ============================================================
   TopFindsDE — script.js
   ------------------------------------------------------------
   Aufbau:
   01  Hilfsfunktionen & Icons
   02  Eleganter Bild-Platzhalter (falls Produktbild fehlt)
   03  Produktkarten-Rendering
   04  Hero: driftende Karten + Maus-Parallax
   05  Kategorien
   06  Bestseller-Slider
   07  Masonry + Kategorie-Filter
   08  Editorial-Empfehlungen
   09  Scroll-Reveal (IntersectionObserver)
   10  Navigation: Scroll-Zustand, Mobile-Menü
   11  Dark Mode
   12  Suche
   13  Ripple-Effekt
   14  Newsletter
   15  Start
   ============================================================ */

(() => {
  "use strict";

  /* ============ 01 · HILFSFUNKTIONEN & ICONS ============ */

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /** Anzeigename einer Kategorie anhand des Slugs. */
  const categoryName = (slug) =>
    (CATEGORIES.find((c) => c.slug === slug) || { name: slug }).name;

  /** Pfeil-Icon für Buttons und Karten. */
  const ARROW_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /** Dezente Linien-Icons je Kategorie (inline SVG = keine Requests). */
  const CATEGORY_ICONS = {
    technik:       '<path d="M7 3h10v18H7z"/><path d="M11 18.5h2"/>',
    gaming:        '<path d="M6 9h12a4 4 0 0 1 4 4v3a3 3 0 0 1-5.6 1.5L15 15H9l-1.4 2.5A3 3 0 0 1 2 16v-3a4 4 0 0 1 4-4Z"/><path d="M8 12v2M7 13h2M16 12h.01M18 14h.01"/>',
    haushalt:      '<path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-7h6v7"/>',
    smarthome:     '<path d="M4 11l8-7 8 7v9H4z"/><path d="M9 15a4.2 4.2 0 0 1 6 0M10.5 17.2a2 2 0 0 1 3 0M12 19.3h.01"/>',
    auto:          '<path d="M4 15l1.5-5A3 3 0 0 1 8.4 8h7.2a3 3 0 0 1 2.9 2l1.5 5"/><path d="M3.5 15h17a1 1 0 0 1 1 1v2h-3M2.5 18v-2a1 1 0 0 1 1-1M6 18h12"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
    beauty:        '<path d="M12 3c2.5 2.8 4 5.2 4 7.6A4.1 4.1 0 0 1 12 15a4.1 4.1 0 0 1-4-4.4C8 8.2 9.5 5.8 12 3Z"/><path d="M12 15v6M9.5 21h5"/>',
    fitness:       '<path d="M7 8v8M17 8v8M4 10v4M20 10v4M7 12h10"/>',
    haustiere:     '<circle cx="7" cy="9" r="1.6"/><circle cx="12" cy="7" r="1.6"/><circle cx="17" cy="9" r="1.6"/><path d="M12 12c2.8 0 5 2 5 4.3 0 1.5-1.2 2.7-2.7 2.7-.9 0-1.6-.4-2.3-.4s-1.4.4-2.3.4A2.7 2.7 0 0 1 7 16.3C7 14 9.2 12 12 12Z"/>',
    kueche:        '<path d="M7 3v7a2 2 0 0 0 2 2v9M5 3v4M9 3v4M16 3c-1.7 1.5-2.5 4-2.5 6.5H16V21"/>',
    outdoor:       '<path d="M8 3l5 9H3l5-9Z"/><path d="M15 8l6 10H9l2.2-3.7"/><path d="M2 21h20"/>',
    buero:         '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    geschenkideen: '<rect x="4" y="9" width="16" height="12" rx="1.5"/><path d="M12 9v12M4 13h16M12 9s-4 .2-5-2c-.8-1.8 1-3.5 2.6-2.6C11.5 5.4 12 9 12 9Zm0 0s4 .2 5-2c.8-1.8-1-3.5-2.6-2.6C12.5 5.4 12 9 12 9Z"/>'
  };

  const categoryIcon = (slug) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${
      CATEGORY_ICONS[slug] || CATEGORY_ICONS.technik
    }</svg>`;

  /* ============ 02 · BILD-PLATZHALTER ============ */
  /* Fehlt ein Produktbild (Datei noch nicht hochgeladen), zeigt die
     Karte einen ruhigen, generierten Platzhalter statt eines
     kaputten Bildsymbols. Sobald das echte Bild existiert, wird es
     automatisch angezeigt — nichts weiter nötig. */

  const placeholderSVG = (title) => {
    const initial = (title || "?").trim().charAt(0).toUpperCase();
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">
      <rect width="400" height="300" fill="var(--surface-2)"/>
      <circle cx="200" cy="132" r="52" fill="var(--accent-soft)"/>
      <text x="200" y="150" text-anchor="middle" font-family="Georgia, serif" font-size="46" fill="var(--accent)">${initial}</text>
      <rect x="140" y="212" width="120" height="7" rx="3.5" fill="var(--line)"/>
      <rect x="165" y="230" width="70" height="7" rx="3.5" fill="var(--line)"/>
    </svg>`;
  };

  /** <img> mit Lazy Loading und automatischem Platzhalter-Fallback. */
  const productImage = (product, eager = false) => {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.loading = eager ? "eager" : "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      img.outerHTML = placeholderSVG(product.title);
    }, { once: true });
    return img;
  };

  /* ============ 03 · PRODUKTKARTEN ============ */

  /**
   * Baut eine Produktkarte.
   * Bewusst OHNE Preise, Rabatte oder Sterne — nur Bild, Titel,
   * Beschreibung und "Jetzt ansehen".
   */
  const productCard = (product, { tag = true } = {}) => {
    const card = document.createElement("article");
    card.className = "product-card reveal";

    const media = document.createElement("div");
    media.className = "product-card__media";
    media.appendChild(productImage(product));
    if (tag) {
      const badge = document.createElement("span");
      badge.className = "product-card__tag";
      badge.textContent = categoryName(product.category);
      media.appendChild(badge);
    }

    const body = document.createElement("div");
    body.className = "product-card__body";
    body.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <a class="product-card__cta" href="${product.link}" target="_blank"
         rel="sponsored noopener" data-ripple>
        Jetzt ansehen ${ARROW_SVG}
      </a>`;

    card.append(media, body);
    return card;
  };

  /* ============ 04 · HERO ============ */

  /** Positionen der driftenden Karten (links/rechts vom Text). */
  const HERO_SLOTS = [
    { top: "16%", left: "4%",   r: -5, o: .95, depth: 1.0 },
    { top: "58%", left: "9%",   r:  4, o: .8,  depth: 1.6 },
    { top: "13%", right: "5%",  r:  5, o: .9,  depth: 1.3 },
    { top: "60%", right: "8%",  r: -4, o: .85, depth: 1.9 }
  ];

  const buildHeroCards = () => {
    const wrap = $("#heroCards");
    if (!wrap) return;

    const picks = PRODUCTS.filter((p) => p.featured).slice(0, HERO_SLOTS.length);

    picks.forEach((product, i) => {
      const slot = HERO_SLOTS[i];
      const card = document.createElement("div");
      card.className = "hero-card";
      card.style.setProperty("--card-r", slot.r + "deg");
      card.style.setProperty("--card-o", slot.o);
      card.style.animationDelay = `${0.9 + i * 0.15}s, ${i * 0.8}s`;
      card.dataset.depth = slot.depth;
      Object.entries(slot).forEach(([key, value]) => {
        if (["top", "left", "right"].includes(key)) card.style[key] = value;
      });

      const img = document.createElement("div");
      img.className = "hero-card__img";
      img.appendChild(productImage(product, true));

      const label = document.createElement("strong");
      label.textContent = product.title;

      card.append(img, label);
      wrap.appendChild(card);
    });

    /* Maus-Parallax: Karten weichen dem Cursor minimal aus.
       Läuft über requestAnimationFrame — butterweich, GPU-freundlich. */
    if (prefersReducedMotion || !window.matchMedia("(pointer:fine)").matches) return;

    let mx = 0, my = 0, raf = null;
    const cards = $$(".hero-card", wrap);

    const apply = () => {
      cards.forEach((card) => {
        const depth = parseFloat(card.dataset.depth);
        card.style.transform =
          `translate3d(${mx * 14 * depth}px, ${my * 10 * depth}px, 0)`;
      });
      raf = null;
    };

    $(".hero").addEventListener("pointermove", (event) => {
      mx = (event.clientX / window.innerWidth - 0.5) * -1;
      my = (event.clientY / window.innerHeight - 0.5) * -1;
      if (!raf) raf = requestAnimationFrame(apply);
    });
  };

  /* ============ 05 · KATEGORIEN ============ */

  const buildCategories = () => {
    const grid = $("#categoryGrid");
    if (!grid) return;

    grid.innerHTML = "";

    CATEGORIES.forEach((cat) => {
      const card = document.createElement("a");
      card.className = "cat-card reveal";
      card.href = "#neu";
      card.setAttribute("aria-label", `Kategorie ${cat.name} anzeigen`);

      card.innerHTML = `
        <span class="cat-card__icon">${categoryIcon(cat.slug)}</span>
        <span class="cat-card__label">${cat.name} ${ARROW_SVG}</span>`;

      card.addEventListener("click", () => {
        activateFilter(cat.slug);
      });

      grid.appendChild(card);
    });
  };

  /* ============ 06 · BESTSELLER-SLIDER ============ */

  const buildBestsellers = () => {
    const slider = $("#bestsellerSlider");
    if (!slider) return;

    const featured = PRODUCTS.filter((p) => p.featured);
    (featured.length ? featured : PRODUCTS.slice(0, 6)).forEach((p, i) => {
      const card = productCard(p);
      card.style.setProperty("--stagger", `${i * 0.08}s`);
      slider.appendChild(card);
    });

    const step = () => slider.firstElementChild
      ? slider.firstElementChild.getBoundingClientRect().width + 20
      : 320;

    $("#sliderPrev")?.addEventListener("click", () =>
      slider.scrollBy({ left: -step(), behavior: "smooth" }));
    $("#sliderNext")?.addEventListener("click", () =>
      slider.scrollBy({ left: step(), behavior: "smooth" }));
  };

  /* ============ 07 · MASONRY + FILTER ============ */

  let activeFilter = "alle";

  /** "Neu entdeckt": Produkte vom neuesten added-Datum in der Liste.
      Hat noch kein Produkt ein Datum, werden alle gezeigt. */
  const newestProducts = () => {
    const dated = PRODUCTS.filter((p) => p.added);
    if (!dated.length) return PRODUCTS;
    const latest = dated.map((p) => p.added).sort().pop();
    return dated.filter((p) => p.added === latest);
  };

  const buildMasonry = () => {
    const grid = $("#masonryGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const items =
  activeFilter === "alle"
    ? newestProducts()
    : PRODUCTS.filter((p) => p.category === activeFilter);

if (items.length === 0) {
  grid.innerHTML = `
    <div class="empty-category">
      <h3>🚀 Bald verfügbar</h3>
      <p>
        Für diese Kategorie werden gerade neue Produkte vorbereitet.
      </p>
    </div>
  `;
  return;
}
     
    items.forEach((p, i) => {
      const card = productCard(p);
      card.style.setProperty("--stagger", `${(i % 3) * 0.08}s`);
      grid.appendChild(card);
    });

    observeReveals(grid);
    /* Nach einem Filterwechsel sind die Karten bereits im Viewport —
       sie sollen sofort weich einblenden, nicht auf Scroll warten. */
    requestAnimationFrame(() =>
      $$(".reveal", grid).forEach((el) => el.classList.add("is-visible")));
  };

  const buildFilters = () => {
    const row = $("#filterRow");
    if (!row) return;

    row.innerHTML = "";

    const chips = [{ slug: "alle", name: "Neu" }, ...CATEGORIES];

    chips.forEach((cat) => {
      const chip = document.createElement("button");
      chip.className = "filter-chip" + (cat.slug === "alle" ? " is-active" : "");
      chip.type = "button";
      chip.setAttribute("role", "tab");
      chip.dataset.slug = cat.slug;
      chip.textContent = cat.name;
      chip.addEventListener("click", () => activateFilter(cat.slug));
      row.appendChild(chip);
    });
  };

  const activateFilter = (slug) => {
  activeFilter = slug;

  $$(".filter-chip").forEach((chip) =>
    chip.classList.toggle(
      "is-active",
      chip.dataset.slug === slug
    )
  );

  buildMasonry();
};

  /* ============ 08 · EDITORIAL-EMPFEHLUNGEN ============ */

  const buildEditorial = () => {
    const wrap = $("#editorialGrid");
    if (!wrap) return;

    const picks = PRODUCTS.filter((p) => p.pick).slice(0, 3);
    picks.forEach((product) => {
      const card = document.createElement("article");
      card.className = "editorial-card reveal";

      const media = document.createElement("div");
      media.className = "editorial-card__media";
      media.appendChild(productImage(product));

      const body = document.createElement("div");
      body.className = "editorial-card__body";
      body.innerHTML = `
        <span class="editorial-card__kicker">Redaktions-Empfehlung · ${categoryName(product.category)}</span>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <a class="product-card__cta" href="${product.link}" target="_blank"
           rel="sponsored noopener" data-ripple>
          Jetzt ansehen ${ARROW_SVG}
        </a>`;

      card.append(media, body);
      wrap.appendChild(card);
    });
  };

  /* ============ 09 · SCROLL-REVEAL ============ */

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  const observeReveals = (root = document) => {
    if (prefersReducedMotion) {
      $$(".reveal", root).forEach((el) => el.classList.add("is-visible"));
      return;
    }
    $$(".reveal:not(.is-visible)", root).forEach((el) => revealObserver.observe(el));
  };

  /* ============ 10 · NAVIGATION ============ */

  const initNav = () => {
    const nav = $("#nav");
    let lastY = 0;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 24);
      /* Nach unten scrollen: Leiste zieht sich zurück.
         Nach oben scrollen: sofort wieder da. */
      const hide = y > 480 && y > lastY && !$("#mobileMenu:not([hidden])");
      nav.style.transform = hide ? "translateY(-110%)" : "";
      lastY = y;
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    /* Mobiles Menü */
    const burger = $("#menuToggle");
    const menu = $("#mobileMenu");
    const closeMenu = () => {
      menu.hidden = true;
      burger.setAttribute("aria-expanded", "false");
    };
    burger.addEventListener("click", () => {
      const open = menu.hidden;
      menu.hidden = !open;
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    $$("a", menu).forEach((link) => link.addEventListener("click", closeMenu));
  };

  /* ============ 11 · DARK MODE ============ */

  const initTheme = () => {
    const stored = localStorage.getItem("tf-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (systemDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;

    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("tf-theme", next);
    });
  };

  /* ============ 12 · SUCHE ============ */

  const initSearch = () => {
    const overlay = $("#searchOverlay");
    const input = $("#searchInput");
    const results = $("#searchResults");
    const toggle = $("#searchToggle");

    const open = () => {
      overlay.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => input.focus());
    };
    const close = () => {
      overlay.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      input.value = "";
      results.innerHTML = "";
    };

    toggle.addEventListener("click", open);
    $("#searchClose").addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !overlay.hidden) close();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); open(); }
    });

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      results.innerHTML = "";
      if (query.length < 2) return;

      const hits = PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        categoryName(p.category).toLowerCase().includes(query)
      ).slice(0, 6);

      if (!hits.length) {
        results.innerHTML =
          '<p class="search__empty">Nichts gefunden — probiere einen anderen Begriff.</p>';
        return;
      }

      hits.forEach((p) => {
        const hit = document.createElement("a");
        hit.className = "search__hit";
        hit.href = p.link;
        hit.target = "_blank";
        hit.rel = "sponsored noopener";
        hit.setAttribute("role", "option");

        const thumb = document.createElement("div");
        thumb.className = "search__hit-thumb";
        thumb.appendChild(productImage(p, true));

        const body = document.createElement("div");
        body.className = "search__hit-body";
        body.innerHTML = `<strong>${p.title}</strong><span>${categoryName(p.category)}</span>`;

        hit.append(thumb, body);
        results.appendChild(hit);
      });
    });
  };

  /* ============ 13 · RIPPLE-EFFEKT ============ */
  /* Delegiert: funktioniert auch für Buttons, die später per JS
     entstehen. Der Ripple startet exakt am Klickpunkt. */

  document.addEventListener("pointerdown", (event) => {
    const target = event.target.closest("[data-ripple]");
    if (!target || prefersReducedMotion) return;

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = event.clientX - rect.left - size / 2 + "px";
    ripple.style.top = event.clientY - rect.top - size / 2 + "px";
    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  });

  /* ============ 14 · NEWSLETTER ============ */

  const initNewsletter = () => {
    const form = $("#newsletterForm");
    const note = $("#newsletterNote");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = $("#newsletterEmail");
      if (!email.checkValidity()) {
        note.textContent = "Bitte gib eine gültige E-Mail-Adresse ein.";
        email.focus();
        return;
      }
      /* Hier später den eigenen Newsletter-Dienst anbinden
         (z. B. per fetch an Brevo, Mailchimp o. ä.). */
      form.reset();
      note.textContent = "Danke! Du bekommst ab jetzt die besten Funde zuerst.";
      note.classList.add("is-success");
    });
  };

  /* ============ 15 · START ============ */

  const init = () => {
    buildHeroCards();
    buildCategories();
    buildBestsellers();
    buildFilters();
    buildMasonry();
    buildEditorial();
    observeReveals();
    initNav();
    initTheme();
    initSearch();
    initNewsletter();
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

