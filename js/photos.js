/* =====================================================
   DREY INTERIOR - PHOTOS AND FURNITURE FROM SUPABASE
   Loads what the client added in the admin (photos and
   furniture designs) and merges it into the site config.
   Load order: config.js, photos.js, main.js
   Pages wait for window.DREY_READY before drawing photos.
   ===================================================== */

(function () {
  "use strict";

  var C = window.DREY_CONFIG;
  var D = window.DREY;
  if (!C || !D) return;

  var B = C.backend;
  var CACHE_KEY = "drey_site_data_v1";
  var TIMEOUT_MS = 3000;

  if (!D.isSet(B.supabaseUrl) || !D.isSet(B.supabaseAnonKey)) {
    window.DREY_READY = Promise.resolve(false);
    return;
  }

  var base = B.supabaseUrl.replace(/\/$/, "") + "/rest/v1/";

  function fetchRows(path) {
    return fetch(base + path, {
      headers: {
        "apikey": B.supabaseAnonKey,
        "Authorization": "Bearer " + B.supabaseAnonKey
      }
    }).then(function (res) {
      if (!res.ok) throw new Error("request failed");
      return res.json();
    });
  }

  function load() {
    return Promise.all([
      fetchRows("site_images?select=*&order=sort_order.asc,created_at.asc&limit=1000"),
      fetchRows("products?select=*&published=eq.true&order=created_at.desc&limit=500")
    ]).then(function (results) {
      return { images: results[0] || [], products: results[1] || [] };
    });
  }

  function splitList(text) {
    return String(text || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function apply(data) {
    var images = data.images || [];
    var products = data.products || [];

    C.media = C.media || {};

    /* Homepage photos, room covers and photos on the preset types */
    images.forEach(function (img) {
      if (img.kind === "hero") {
        C.media.hero = img.url;
      } else if (img.kind === "workshop") {
        C.media.workshop = img.url;
      } else if (img.kind === "category") {
        var cat = D.getCategory(img.category_slug);
        if (cat) cat.image = img.url;
      } else if (img.kind === "item") {
        var item = D.getItem(img.category_slug, img.item_id);
        if (item) {
          item.gallery = item.gallery || [];
          if (item.gallery.indexOf(img.url) === -1) item.gallery.push(img.url);
          if (!item.image) item.image = img.url;
        }
      }
    });

    /* Furniture designs the client added */
    var photosByProduct = {};
    images.forEach(function (img) {
      if (img.kind === "product" && img.product_id) {
        (photosByProduct[img.product_id] = photosByProduct[img.product_id] || []).push(img.url);
      }
    });

    var addedByRoom = {};
    products.forEach(function (p) {
      var cat = D.getCategory(p.category_slug);
      if (!cat) return;
      var pics = photosByProduct[p.id] || [];
      (addedByRoom[cat.slug] = addedByRoom[cat.slug] || []).push({
        id: "p-" + p.id,
        name: p.name,
        description: p.description || "",
        materials: splitList(p.materials),
        finishes: splitList(p.finishes),
        price: p.price === null || p.price === undefined ? null : Number(p.price),
        image: pics[0] || "",
        gallery: pics,
        isProduct: true
      });
    });

    C.categories.forEach(function (cat) {
      /* remove designs from an earlier run so nothing is added twice */
      cat.items = cat.items.filter(function (i) { return !i.isProduct; });

      var added = addedByRoom[cat.slug];
      if (added && added.length) {
        /* once a room has real designs, hide the preset types that have no photos */
        var kept = cat.items.filter(function (i) {
          return i.image || (i.gallery && i.gallery.length);
        });
        cat.items = added.concat(kept);
      }
    });
  }

  var cached = null;
  try { cached = JSON.parse(sessionStorage.getItem(CACHE_KEY)); } catch (e) { cached = null; }

  var applied = false;

  window.DREY_READY = new Promise(function (resolve) {
    if (cached && cached.images && cached.products) {
      apply(cached);
      applied = true;
      resolve(true);
    }

    var timer = setTimeout(function () { resolve(applied); }, TIMEOUT_MS);

    load().then(function (data) {
      clearTimeout(timer);
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (e) { /* storage full or blocked */ }
      if (!applied) {
        apply(data);
        applied = true;
      }
      resolve(true);
    }).catch(function () {
      clearTimeout(timer);
      resolve(applied);
    });
  });
})();