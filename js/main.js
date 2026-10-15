/* =====================================================
   DREY INTERIOR - MAIN SCRIPT
   Shared by every page. Builds the header, footer and
   floating WhatsApp button, and fills the homepage
   sections from js/config.js and the photos loaded by
   js/photos.js.
   Load order: lucide, config.js, photos.js, then this file.
   ===================================================== */

(function () {
  "use strict";

  var D = window.DREY;
  var C = window.DREY_CONFIG;
  if (!D || !C) {
    console.error("config.js must load before main.js");
    return;
  }

  var ready = window.DREY_READY || Promise.resolve(false);

  /* ---------- SMALL HELPERS ---------- */
  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function esc(value) {
    var map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) { return map[ch]; });
  }

  function icon(name) {
    return '<i data-lucide="' + esc(name) + '" aria-hidden="true"></i>';
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function bg(src) {
    if (!src) return "";
    return ' style="background-image:url(\'' + esc(src) + '\')"';
  }

  function applyImage(el, src) {
    if (!el || !src) return;
    var img = new Image();
    img.onload = function () {
      el.style.backgroundImage = 'url("' + src + '")';
      el.classList.add("has-image");
    };
    img.src = src;
  }

  /* The first photo of a piece of furniture */
  function itemImage(item) {
    if (!item) return "";
    return item.image || (item.gallery && item.gallery[0]) || "";
  }

  /* The cover photo of a room: its own cover, else the first photo inside it */
  function coverFor(cat) {
    if (cat.image) return cat.image;
    for (var i = 0; i < cat.items.length; i++) {
      var pic = itemImage(cat.items[i]);
      if (pic) return pic;
    }
    return "";
  }

  var CATEGORY_ICONS = {
    parlor: "sofa",
    dining: "utensils",
    kitchen: "cooking-pot",
    wardrobes: "door-closed",
    bedroom: "bed-double",
    chairs: "armchair",
    office: "lamp-desk"
  };

  function categoryIcon(slug) {
    return CATEGORY_ICONS[slug] || "armchair";
  }

  function brandMark(color) {
    return '<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" style="color:' + color + '">' +
      '<path d="M6 28V15a10 10 0 0 1 20 0v13z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<path d="M11 28V16a5 5 0 0 1 10 0v12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>';
  }

  var WHATSAPP_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>' +
    '</svg>';

  function whatsappHref(message) {
    return D.isSet(C.business.whatsapp) ? D.whatsappLink(message) : "contact.html";
  }

  /* ---------- HEADER ---------- */
  function currentPage() {
    var file = window.location.pathname.split("/").pop();
    return file || "index.html";
  }

  function buildHeader() {
    var header = $("#siteHeader");
    if (!header) return;

    var page = currentPage();
    var links = C.nav.map(function (item) {
      var target = item.href.split("#")[0];
      var isActive = item.href.indexOf("#") === -1 && target === page;
      return '<a class="nav-link' + (isActive ? " active" : "") + '" href="' + esc(item.href) + '">' + esc(item.label) + "</a>";
    }).join("");

    header.innerHTML =
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="' + esc(C.business.name) + ' home">' +
          brandMark("var(--teal)") + "<span>" + esc(C.business.name) + "</span>" +
        "</a>" +
        '<button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="siteNav" aria-label="Open menu">' +
          icon("menu") +
        "</button>" +
        '<nav class="nav" id="siteNav" aria-label="Main">' +
          links +
          '<a class="btn btn-primary" href="book.html">Book a site visit</a>' +
        "</nav>" +
      "</div>";

    var toggle = $("#navToggle");
    var nav = $("#siteNav");

    function setOpen(open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.innerHTML = icon(open ? "x" : "menu");
      refreshIcons();
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("open"));
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) setOpen(false);
    });
  }

  /* ---------- FOOTER ---------- */
  function buildFooter() {
    var footer = $("#siteFooter");
    if (!footer) return;

    var b = C.business;

    var quickLinks = C.nav.map(function (item) {
      return '<li><a href="' + esc(item.href) + '">' + esc(item.label) + "</a></li>";
    }).join("") + '<li><a href="book.html">Book a site visit</a></li>';

    var serviceLinks = C.services.map(function (s) {
      return '<li><a href="services.html">' + esc(s.name) + "</a></li>";
    }).join("");

    var contact = "";
    if (D.isSet(b.phone)) {
      contact += '<li><a href="tel:' + esc(String(b.phone).replace(/\s+/g, "")) + '">' + esc(b.phone) + "</a></li>";
    }
    if (D.isSet(b.whatsapp)) {
      contact += '<li><a href="' + esc(D.whatsappLink()) + '" target="_blank" rel="noopener">WhatsApp</a></li>';
    }
    if (D.isSet(b.email)) {
      contact += '<li><a href="mailto:' + esc(b.email) + '">' + esc(b.email) + "</a></li>";
    }
    if (D.isSet(b.address)) {
      contact += "<li>" + esc(b.address) + "</li>";
    }
    if (b.workingHours) {
      contact += "<li>" + esc(b.workingHours) + "</li>";
    }

    var socialNames = { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", x: "X" };
    Object.keys(socialNames).forEach(function (key) {
      if (b.socials && b.socials[key]) {
        contact += '<li><a href="' + esc(b.socials[key]) + '" target="_blank" rel="noopener">' + socialNames[key] + "</a></li>";
      }
    });

    if (!contact) {
      contact = "<li>Contact details coming soon.</li>";
    }

    footer.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-about">' +
            '<a class="brand" href="index.html">' + brandMark("var(--oak)") + "<span>" + esc(b.name) + "</span></a>" +
            "<p>" + esc(b.shortDescription) + "</p>" +
          "</div>" +
          '<div><h4>Quick links</h4><ul>' + quickLinks + "</ul></div>" +
          '<div><h4>Services</h4><ul>' + serviceLinks + "</ul></div>" +
          '<div><h4>Contact</h4><ul>' + contact + "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">&copy; ' + new Date().getFullYear() + " " + esc(b.name) + ". All rights reserved.</div>" +
      "</div>";
  }

  /* ---------- FLOATING WHATSAPP ---------- */
  function buildWhatsappButton() {
    if ($(".whatsapp-float")) return;
    var link = document.createElement("a");
    link.className = "whatsapp-float";
    link.href = whatsappHref("Hello " + C.business.name + ", I would like to know more about your furniture.");
    link.setAttribute("aria-label", "Chat on WhatsApp");
    if (D.isSet(C.business.whatsapp)) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    link.innerHTML = WHATSAPP_SVG;
    document.body.appendChild(link);
  }

  /* ---------- HOMEPAGE SECTIONS ---------- */
  function bindText() {
    var nodes = document.querySelectorAll("[data-bind]");
    Array.prototype.forEach.call(nodes, function (node) {
      var key = node.getAttribute("data-bind");
      if (C.business[key]) node.textContent = C.business[key];
    });
  }

  /* Hero and workshop photos: from the admin if uploaded, else from assets/images */
  function loadPhotos() {
    var media = C.media || {};
    var hero = $("#heroVisual");
    var workshop = $("#scratchVisual");
    if (hero) applyImage(hero, media.hero || hero.getAttribute("data-image"));
    if (workshop) applyImage(workshop, media.workshop || workshop.getAttribute("data-image"));
  }

  function renderCategories() {
    var grid = $("#categoryGrid");
    if (!grid) return;

    grid.innerHTML = C.categories.map(function (cat) {
      var cover = coverFor(cat);
      var media = cover
        ? '<div class="category-card-media"' + bg(cover) + "></div>"
        : '<div class="category-card-media">' + icon(categoryIcon(cat.slug)) + "</div>";
      return '<a class="category-card" href="category.html?c=' + encodeURIComponent(cat.slug) + '">' +
        media +
        '<div class="category-card-body"><h3>' + esc(cat.name) + "</h3><p>" + esc(cat.blurb) + "</p></div>" +
        "</a>";
    }).join("");
  }

  /* Featured pieces: the best piece from each room, pieces with photos first */
  function renderFeatured() {
    var grid = $("#featuredGrid");
    var section = $("#featured");
    if (!grid) return;

    var picks = [];
    C.categories.forEach(function (cat) {
      var withPhoto = cat.items.filter(function (i) { return itemImage(i); })[0];
      var item = withPhoto || cat.items[0];
      if (item) picks.push({ cat: cat, item: item, photo: itemImage(item) });
    });

    picks.sort(function (a, b) { return (b.photo ? 1 : 0) - (a.photo ? 1 : 0); });
    picks = picks.slice(0, 6);

    /* no photos yet: keep the homepage clean and hide this section */
    var anyPhoto = picks.some(function (p) { return p.photo; });
    if (section) section.hidden = !anyPhoto;
    if (!anyPhoto) { grid.innerHTML = ""; return; }

    grid.innerHTML = picks.map(function (p) {
      return '<a class="featured-card" href="item.html?c=' + encodeURIComponent(p.cat.slug) + "&i=" + encodeURIComponent(p.item.id) + '">' +
        '<div class="featured-card-media"' + bg(p.photo) + "></div>" +
        '<div class="featured-card-body"><h3>' + esc(p.item.name) + "</h3><p>" + esc(p.cat.name) + "</p></div>" +
        "</a>";
    }).join("");
  }

  function renderProcess() {
    var list = $("#processList");
    if (!list) return;

    list.innerHTML = C.process.map(function (step) {
      return '<li class="step">' + icon(step.icon) +
        "<h3>" + esc(step.title) + "</h3><p>" + esc(step.text) + "</p></li>";
    }).join("");
  }

  function renderHighlights() {
    var list = $("#highlightList");
    if (!list) return;

    list.innerHTML = C.highlights.map(function (h) {
      return '<li class="highlight-item">' + icon(h.icon) +
        "<div><h3>" + esc(h.title) + "</h3><p>" + esc(h.text) + "</p></div></li>";
    }).join("");
  }

  function setupCtaWhatsapp() {
    var link = $("#ctaWhatsapp");
    if (!link) return;
    link.href = whatsappHref("Hello " + C.business.name + ", I would like to book a site visit.");
    if (D.isSet(C.business.whatsapp)) {
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.removeAttribute("target");
      link.textContent = "Contact us";
    }
  }

  /* ---------- START ---------- */
  function init() {
    /* things that do not depend on photos draw straight away */
    buildHeader();
    buildFooter();
    buildWhatsappButton();
    bindText();
    renderProcess();
    renderHighlights();
    setupCtaWhatsapp();
    refreshIcons();

    /* photo-dependent parts wait for the admin photos and furniture */
    ready.then(function () {
      renderCategories();
      renderFeatured();
      loadPhotos();
      refreshIcons();
    });
  }

  /* Shared tools for the other page scripts (category, item, booking) */
  window.DREYUI = {
    esc: esc,
    icon: icon,
    bg: bg,
    applyImage: applyImage,
    itemImage: itemImage,
    coverFor: coverFor,
    categoryIcon: categoryIcon,
    refreshIcons: refreshIcons,
    whatsappHref: whatsappHref
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();