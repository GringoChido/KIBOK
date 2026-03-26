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
  googleMapsUrl:
    "https://www.google.com/maps/place/Ki'bok+Coffee+SMA/@20.9133,-100.7441,17z",
  coordinates: { lat: 20.9133, lng: -100.7441 },
} as const;

export const NAV_LINKS = [
  { key: "menu", href: "/menu" },
  { key: "about", href: "/about" },
  { key: "visit", href: "/visit" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export const MENU_PRICES = {
  espresso: "$55",
  cortado: "$65",
  cappuccino: "$70",
  flat_white: "$75",
  americano: "$60",
  latte: "$75",
  pourover: "$80",
  chemex: "$120",
  aeropress: "$75",
  cold_brew: "$75",
  iced_latte: "$80",
  iced_matcha: "$85",
  horchata: "$85",
  agua_fresca: "$55",
  croissant: "$55",
  banana_bread: "$50",
  avocado_toast: "$95",
  chilaquiles: "$110",
  granola: "$85",
} as const;

export const MENU_STRUCTURE = [
  {
    categoryKey: "espresso",
    items: ["espresso", "cortado", "cappuccino", "flat_white", "americano", "latte"],
  },
  {
    categoryKey: "filter",
    items: ["pourover", "chemex", "aeropress", "cold_brew"],
  },
  {
    categoryKey: "cold",
    items: ["iced_latte", "iced_matcha", "horchata", "agua_fresca"],
  },
  {
    categoryKey: "food",
    items: ["croissant", "banana_bread", "avocado_toast", "chilaquiles", "granola"],
  },
] as const;
