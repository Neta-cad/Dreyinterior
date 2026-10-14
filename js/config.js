/* =====================================================
   DREY INTERIOR - CONFIG
   Change details here and the whole website updates.
   Anything marked TO_BE_ADDED is waiting for the client.
   Colors live in css/styles.css (top of the file).
   ===================================================== */

window.DREY_CONFIG = {

  /* ---------- BUSINESS ---------- */
  business: {
    name: "Drey Interior",
    tagline: "Built from scratch, made to fit your space",
    shortDescription:
      "We visit your home, measure your space and build every piece of furniture from scratch. Serving customers across Nigeria.",
    phone: "TO_BE_ADDED",
    whatsapp: "2347053039227",          // digits only with country code
    email: "TO_BE_ADDED",
    address: "TO_BE_ADDED",
    workingHours: "Monday to Saturday, 9am to 6pm",
    coverage: "nationwide",             // site visits and delivery. Change here if the client limits it.
    socials: {
      instagram: "",
      facebook: "",
      tiktok: "",
      x: ""
    },
    domain: "",                         // add once bought, e.g. https://dreyinterior.com
    currency: "NGN",
    currencySymbol: "\u20A6"
  },

  /* ---------- NAVIGATION ---------- */
  nav: [
    { label: "Home",        href: "index.html" },
    { label: "Collections", href: "index.html#collections" },
    { label: "Services",    href: "services.html" },
    { label: "About",       href: "about.html" },
    { label: "Contact",     href: "contact.html" }
  ],

  /* ---------- CATEGORIES AND FURNITURE TYPES ----------
     Flow: Homepage tile -> category.html?c=slug -> item.html?c=slug&i=id
     Every piece is built from scratch, so these show the types we make
     and the photos are examples of our work.
     To add a type later, copy one item block and change its details.
     "image" and "gallery" stay empty until the client sends photos
     (put files in assets/images/ and write the path, e.g. "assets/images/sofa-1.jpg").
     "price": null shows "Price on request". */
  categories: [
    {
      slug: "parlor",
      name: "Parlor",
      blurb: "Sofas and living room pieces that make a first impression.",
      image: "",
      items: [
        { id: "sectional-sofa", name: "Sectional Sofas", description: "Large, comfortable L-shaped and U-shaped sofas built to the size of your parlor.", materials: ["Fabric", "Leather", "Velvet"], finishes: ["Custom colors"], price: null, image: "", gallery: [] },
        { id: "sofa-set",       name: "Sofa Sets",       description: "Matching 3-seater, 2-seater and single seater sets.",                              materials: ["Fabric", "Leather", "Velvet"], finishes: ["Custom colors"], price: null, image: "", gallery: [] },
        { id: "center-table",   name: "Center and Side Tables", description: "Coffee tables and side tables to complete the room.",                        materials: ["Solid wood", "Marble top", "Glass top"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "tv-stand",       name: "TV Stands and Consoles", description: "TV units with storage, built to fit your wall.",                              materials: ["Solid wood", "MDF", "Marble"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] }
      ]
    },
    {
      slug: "dining",
      name: "Dining",
      blurb: "Tables and seating for everyday meals and special gatherings.",
      image: "",
      items: [
        { id: "dining-set",   name: "Dining Sets",      description: "Complete tables with matching chairs, from 4 to 12 seats.", materials: ["Solid wood", "Marble top", "Glass top"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "dining-table", name: "Dining Tables",    description: "Round, rectangular and extendable tables.",                 materials: ["Solid wood", "Marble top", "Glass top"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "dining-chair", name: "Dining Chairs",    description: "Upholstered and wooden chairs, made singly or in sets.",    materials: ["Fabric", "Leather", "Wood"], finishes: ["Custom colors"], price: null, image: "", gallery: [] },
        { id: "sideboard",    name: "Sideboards and Cabinets", description: "Storage and display pieces for your dining area.",   materials: ["Solid wood", "MDF"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] }
      ]
    },
    {
      slug: "kitchen",
      name: "Kitchen",
      blurb: "Fitted cabinets and kitchen furniture built around your space.",
      image: "",
      items: [
        { id: "kitchen-cabinets", name: "Kitchen Cabinets", description: "Fitted upper and lower cabinets made to the exact measurements of your kitchen.", materials: ["MDF", "Solid wood", "Plywood"], finishes: ["Matte", "Gloss", "Wood grain"], price: null, image: "", gallery: [] },
        { id: "kitchen-island",   name: "Kitchen Islands",  description: "Island units with storage and seating.",                      materials: ["Solid wood", "Marble top", "Quartz top"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "bar-stools",       name: "Bar Stools",       description: "Counter-height stools for islands and breakfast bars.",        materials: ["Wood", "Metal", "Leather"], finishes: ["Custom colors"], price: null, image: "", gallery: [] },
        { id: "pantry-units",     name: "Pantry Units",     description: "Tall storage units for food and kitchen supplies.",            materials: ["MDF", "Solid wood"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] }
      ]
    },
    {
      slug: "wardrobes",
      name: "Wardrobes",
      blurb: "Wardrobes and closets designed for the space you have.",
      image: "",
      items: [
        { id: "sliding-wardrobe", name: "Sliding Door Wardrobes", description: "Space-saving wardrobes with smooth sliding doors.", materials: ["MDF", "Plywood", "Mirror panels"], finishes: ["Matte", "Gloss", "Wood grain"], price: null, image: "", gallery: [] },
        { id: "hinged-wardrobe",  name: "Hinged Door Wardrobes",  description: "Classic swing-door wardrobes with custom interiors.", materials: ["MDF", "Solid wood", "Plywood"], finishes: ["Matte", "Gloss", "Wood grain"], price: null, image: "", gallery: [] },
        { id: "walk-in-closet",   name: "Walk-in Closets",        description: "Full dressing rooms with shelves, hanging rails and drawers.", materials: ["MDF", "Plywood"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] }
      ]
    },
    {
      slug: "bedroom",
      name: "Bedroom",
      blurb: "Beds and bedroom furniture for restful, well-planned rooms.",
      image: "",
      items: [
        { id: "beds",        name: "Beds and Headboards", description: "Upholstered and wooden beds in all standard sizes.", materials: ["Solid wood", "Fabric", "Leather"], finishes: ["Custom colors"], price: null, image: "", gallery: [] },
        { id: "bedsides",    name: "Bedside Tables",      description: "Matching bedside tables with drawers.",              materials: ["Solid wood", "MDF"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "dressing",    name: "Dressing Tables",     description: "Dressing tables with mirrors and storage.",          materials: ["Solid wood", "MDF", "Mirror"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "chest-drawers", name: "Chest of Drawers",  description: "Extra storage for clothes and personal items.",      materials: ["Solid wood", "MDF"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] }
      ]
    },
    {
      slug: "chairs",
      name: "Chairs",
      blurb: "Accent, lounge and statement chairs for any room.",
      image: "",
      items: [
        { id: "accent-chairs", name: "Accent Chairs",  description: "Statement chairs that add character to a room.", materials: ["Fabric", "Velvet", "Leather"], finishes: ["Custom colors"], price: null, image: "", gallery: [] },
        { id: "lounge-chairs", name: "Lounge Chairs",  description: "Deep, comfortable seating for relaxing.",         materials: ["Fabric", "Leather"], finishes: ["Custom colors"], price: null, image: "", gallery: [] },
        { id: "office-chairs", name: "Office Chairs",  description: "Supportive chairs for desks and workspaces.",     materials: ["Mesh", "Leather", "Fabric"], finishes: ["Custom colors"], price: null, image: "", gallery: [] }
      ]
    },
    {
      slug: "office",
      name: "Office",
      blurb: "Desks, shelving and furniture for productive workspaces.",
      image: "",
      items: [
        { id: "office-desks",  name: "Desks and Workstations", description: "Executive desks, home office desks and workstations.", materials: ["Solid wood", "MDF", "Glass"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "bookshelves",   name: "Bookshelves and Shelving", description: "Open and closed shelving for books and display.",   materials: ["Solid wood", "MDF", "Metal"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] },
        { id: "reception",     name: "Reception Desks",         description: "Front-desk furniture for offices and showrooms.",      materials: ["MDF", "Solid wood", "Marble"], finishes: ["Matte", "Gloss"], price: null, image: "", gallery: [] }
      ]
    }
  ],

  /* ---------- SERVICES ---------- */
  services: [
    { id: "built-from-scratch", name: "Furniture Built from Scratch", icon: "hammer", description: "Every piece is designed and built for your space, in your choice of material, finish and color." },
    { id: "site-visit",         name: "Home Visit and Measurement",   icon: "ruler",  description: "We come to your home or office, measure everything ourselves and discuss your ideas on site." },
    { id: "interior-fitout",    name: "Full Interior Fit-out",        icon: "home",   description: "Complete furnishing for a home, apartment or office, from one team." },
    { id: "delivery",           name: "Delivery and Installation",    icon: "truck",  description: "Careful delivery and setup anywhere in Nigeria." }
  ],

  /* ---------- HOW IT WORKS (used on homepage and services page) ---------- */
  process: [
    { icon: "calendar-check", title: "Book a site visit",    text: "Choose the furniture you want and pick a date for our visit." },
    { icon: "ruler",          title: "We visit and measure", text: "We measure your space and agree the design with you on site." },
    { icon: "file-text",      title: "Approve your quote",   text: "You receive a written quote and pay a deposit to start building." },
    { icon: "truck",          title: "We build and deliver", text: "Your furniture is built, delivered and installed. The balance is paid on delivery." }
  ],

  /* ---------- WHY CHOOSE US (kept to 3 for a light homepage) ---------- */
  highlights: [
    { icon: "hammer",  title: "Built from scratch", text: "Nothing off the shelf. Every piece is made for you." },
    { icon: "ruler",   title: "We measure for you", text: "We visit your space so every piece fits exactly." },
    { icon: "map-pin", title: "Across Nigeria",     text: "Site visits and delivery in every state." }
  ],

  /* ---------- BOOKING ---------- */
  booking: {
    requireLogin: false,
    allowCustomerMeasurements: false,   // we always measure ourselves
    siteVisit: {
      enabled: true,
      coverage: "nationwide",
      feeDeductedFromOrder: true        // visit fee is taken off the final price if the customer orders
    },
    roomTypes: ["Parlor", "Dining room", "Kitchen", "Bedroom", "Office", "Whole house", "Other"],
    budgetRanges: ["Under \u20A6200,000", "\u20A6200,000 - \u20A6500,000", "\u20A6500,000 - \u20A61,000,000", "Above \u20A61,000,000", "Not sure yet"],
    minimumLeadDays: 2                  // earliest visit date from today
  },

  /* ---------- PAYMENT (paid in stages) ----------
     Stage 1: site visit fee at booking (deducted from the final price)
     Stage 2: deposit after the customer approves the quote
     Stage 3: balance on delivery and installation */
  payment: {
    enabled: true,
    provider: "paystack",
    paystackPublicKey: "TO_BE_ADDED",   // pk_test_... for testing, pk_live_... later
    siteVisitFee: null,                 // amount in naira, set when the client decides, e.g. 15000
    depositPercent: 50,
    balanceOn: "delivery",
    bankTransfer: {
      enabled: false,
      bankName: "TO_BE_ADDED",
      accountName: "TO_BE_ADDED",
      accountNumber: "TO_BE_ADDED"
    }
  },

  /* ---------- BACKEND (bookings and admin dashboard) ---------- */
  backend: {
    provider: "supabase",
    supabaseUrl: "https://aluemsmmwqehsvjcjpfn.supabase.co",
    supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsdWVtc21td3FlaHN2amNqcGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5NDA1MDksImV4cCI6MjEwNzUxNjUwOX0.vC2HKsn2t_lj-5EJsRq67OZ5D3IUY5n8GbT1Yqy3SlI",
    bookingsTable: "bookings"
  },

  /* ---------- LOCATIONS: ALL 36 STATES + FCT ---------- */
  states: [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
    "Taraba", "Yobe", "Zamfara"
  ],

  /* ---------- SEO ---------- */
  seo: {
    title: "Drey Interior | Furniture Built from Scratch in Nigeria",
    description:
      "Custom furniture built from scratch for parlor, dining, kitchen, wardrobes, bedroom and office. We visit, measure and deliver across Nigeria. Book online.",
    keywords: "custom furniture Nigeria, furniture built from scratch, interior design, wardrobes, sofas, dining sets, kitchen cabinets"
  }
};

/* ---------- HELPERS (used by every page) ---------- */
window.DREY = {
  config: window.DREY_CONFIG,

  getCategory: function (slug) {
    return window.DREY_CONFIG.categories.find(function (c) { return c.slug === slug; }) || null;
  },

  getItem: function (categorySlug, itemId) {
    var cat = this.getCategory(categorySlug);
    if (!cat) return null;
    return cat.items.find(function (i) { return i.id === itemId; }) || null;
  },

  isSet: function (value) {
    return Boolean(value) && value !== "TO_BE_ADDED";
  },

  formatPrice: function (price) {
    if (price === null || price === undefined || price === "") return "Price on request";
    return window.DREY_CONFIG.business.currencySymbol + Number(price).toLocaleString("en-NG");
  },

  visitFeeLabel: function () {
    var fee = window.DREY_CONFIG.payment.siteVisitFee;
    if (fee === null || fee === undefined || fee === "") return "Visit fee to be confirmed";
    return this.formatPrice(fee);
  },

  whatsappLink: function (message) {
    var number = window.DREY_CONFIG.business.whatsapp;
    if (!this.isSet(number)) return "#";
    var text = message ? "?text=" + encodeURIComponent(message) : "";
    return "https://wa.me/" + number + text;
  }
};