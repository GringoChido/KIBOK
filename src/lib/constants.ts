export const SITE = {
  name: "Ki'bok Coffee",
  url: "https://kibokcoffee-sma.com",
  instagram: "https://instagram.com/kibokcoffeesma",
  instagramHandle: "@kibokcoffeesma",
} as const;

export const LOCATION = {
  address: "Diez de Sollano y Dávalos #25",
  area: "Cuadrante 1, Centro",
  city: "San Miguel de Allende, Gto.",
  zip: "37700",
  fullAddress:
    "Diez de Sollano y Dávalos #25, Cuadrante 1, Centro, 37700 San Miguel de Allende, Gto.",
  rating: 4.6,
  reviewCount: 728,
  googleMapsUrl: "https://maps.app.goo.gl/iteJLPtgU6poAqnV9",
  coordinates: { lat: 20.9133, lng: -100.7441 },
  hours: "Open daily · Closes 7 PM",
} as const;

export const MARQUEE_ITEMS = [
  "KI'BOK COFFEE SMA",
  "ORGANIC MEXICAN COFFEE",
  "HOMEMADE PASTRIES",
  "SAN MIGUEL DE ALLENDE",
  "LOCALLY SOURCED",
  "CRAFTED WITH CARE",
];

export const NAV_LINKS = [
  { key: "menu", href: "/menu" },
  { key: "beans", href: "/beans" },
  { key: "about", href: "/about" },
  { key: "visit", href: "/visit" },
] as const;

export const SPOTIFY_PLAYLIST_ID = "37i9dQZF1DXdSjVZQzv2tl";

/* ─── Menu Types ─────────────────────────────────────────── */
export type TempIndicator = "hot" | "cold" | "both";
export type DietaryTag = "vegan" | "vegetarian";

export interface MenuItemDef {
  key: string;
  price: string;
  temp?: TempIndicator;
  dietary?: DietaryTag;
  seasonal?: boolean;
}

export interface MenuSectionDef {
  categoryKey: string;
  items: MenuItemDef[];
}

export interface MenuExtraDef {
  key: string;
  price: string;
}

/* ─── Drink Menu ─────────────────────────────────────────── */
export const DRINK_SECTIONS: MenuSectionDef[] = [
  {
    categoryKey: "espresso_bar",
    items: [
      { key: "long_black", price: "$50", temp: "hot" },
      { key: "espresso", price: "$55", temp: "hot" },
      { key: "espresso_allonge", price: "$55", temp: "hot" },
      { key: "americano", price: "$45", temp: "both" },
    ],
  },
  {
    categoryKey: "milk_bar",
    items: [
      { key: "cortado", price: "$50", temp: "hot" },
      { key: "macchiato", price: "$50", temp: "hot" },
      { key: "cappuccino", price: "$55", temp: "both" },
      { key: "piccolo", price: "$60", temp: "hot" },
      { key: "flat_white", price: "$65", temp: "hot" },
      { key: "latte", price: "$60", temp: "both" },
      { key: "mocha", price: "$60", temp: "both" },
      { key: "dirty_chai", price: "$65", temp: "both" },
      { key: "pumpkin_latte", price: "$75", temp: "both", seasonal: true },
    ],
  },
  {
    categoryKey: "coffee_free",
    items: [
      { key: "hot_chocolate", price: "$60", temp: "both" },
      { key: "taro_latte", price: "$65", temp: "both" },
      { key: "chai_latte", price: "$70", temp: "both" },
      { key: "tea_infusions", price: "$70", temp: "hot" },
      { key: "golden_milk", price: "$75", temp: "hot" },
      { key: "matcha", price: "$90", temp: "both" },
    ],
  },
  {
    categoryKey: "house_coffee",
    items: [
      { key: "cococcino", price: "$60", temp: "both" },
      { key: "oppenheimer", price: "$65", temp: "hot" },
      { key: "hemingway", price: "$70", temp: "hot" },
      { key: "latte_brulee", price: "$70", temp: "hot" },
      { key: "latte_de_olla", price: "$65", temp: "both" },
      { key: "buzz_latte", price: "$70", temp: "hot" },
      { key: "choco_oat", price: "$95", temp: "hot" },
      { key: "cold_brew", price: "$70", temp: "cold" },
      { key: "espresso_tonic", price: "$75", temp: "cold" },
      { key: "cold_brew_tonic", price: "$80", temp: "cold" },
      { key: "cold_brew_de_olla", price: "$90", temp: "cold" },
    ],
  },
  {
    categoryKey: "slow_bar",
    items: [
      { key: "v60", price: "$75", temp: "hot" },
      { key: "chemex", price: "$80", temp: "hot" },
    ],
  },
  {
    categoryKey: "house_dessert",
    items: [{ key: "affogato", price: "$85" }],
  },
  {
    categoryKey: "soft_drinks",
    items: [
      { key: "bottled_water", price: "$35", temp: "cold" },
      { key: "coconut_water", price: "$42", temp: "cold" },
      { key: "lemonade", price: "$45", temp: "cold" },
      { key: "naranjada", price: "$50", temp: "cold" },
      { key: "orange_crush", price: "$50", temp: "cold" },
      { key: "mineral_water", price: "$50", temp: "cold" },
      { key: "san_pellegrino_still", price: "$60", temp: "cold" },
      { key: "san_pellegrino_flavoured", price: "$70", temp: "cold" },
      { key: "agua_felix", price: "$70", temp: "cold" },
      { key: "artesanal_kombucha", price: "$80", temp: "cold" },
      { key: "ginger_beer", price: "$80", temp: "cold" },
    ],
  },
];

export const DRINK_EXTRAS: MenuExtraDef[] = [
  { key: "extra_shot", price: "+$15" },
  { key: "special_milk", price: "+$20" },
  { key: "cold_prep", price: "+$10" },
  { key: "syrups", price: "+$15" },
];

/* ─── Food Menu ──────────────────────────────────────────── */
export const FOOD_SECTIONS: MenuSectionDef[] = [
  {
    categoryKey: "entrees",
    items: [
      { key: "hummus_dish", price: "$110" },
      { key: "fruit_plate", price: "$105" },
      { key: "waffles", price: "$125" },
      { key: "avocado_toast", price: "$160" },
      { key: "toast_mexicana", price: "$200" },
      { key: "morning_bagel", price: "$125" },
      { key: "bagel_coffee", price: "$90" },
      { key: "american_breakfast", price: "$190" },
    ],
  },
  {
    categoryKey: "ciabatta_sandwich",
    items: [
      { key: "sandwich_blt", price: "$110" },
      { key: "sandwich_chicken", price: "$115" },
      { key: "sandwich_arrachera", price: "" },
    ],
  },
  {
    categoryKey: "quinoa_bowls",
    items: [
      { key: "bowl_rancho", price: "$120" },
      { key: "bowl_sin_carne", price: "$120", dietary: "vegan" },
    ],
  },
  {
    categoryKey: "platters",
    items: [
      { key: "chilaquiles_verdes", price: "$120", dietary: "vegan" },
      { key: "huevos_rancheros", price: "$135" },
      { key: "special_omelette", price: "$135", dietary: "vegetarian" },
      { key: "huevos_divorciados", price: "$140" },
      { key: "enchiladas_verdes_rojas", price: "$150" },
      { key: "enchiladas_mole", price: "$165" },
      { key: "enfrijoladas", price: "$120" },
      { key: "bone_broth", price: "$170" },
      { key: "calabrese_toast", price: "$175" },
    ],
  },
];

export const FOOD_EXTRAS: MenuExtraDef[] = [
  { key: "extra_avocado", price: "$30" },
  { key: "extra_bacon", price: "$25" },
  { key: "extra_egg", price: "$20" },
  { key: "extra_quinoa", price: "$25" },
];

/* ─── Flat price map (for carousel / other components) ───── */
export const MENU_PRICES: Record<string, string> = Object.fromEntries(
  [...DRINK_SECTIONS, ...FOOD_SECTIONS].flatMap((s) =>
    s.items.map((i) => [i.key, i.price]),
  ),
);
