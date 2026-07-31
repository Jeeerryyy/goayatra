// Central brand + contact constants
export const BRAND = {
  name: "Goa Yatra",
  sub: "TTG Travels",
  tagline: "Fun Rides. Good Vibes. Endless Memories.",
  positioning:
    "We make every Goa trip simple, affordable, and unforgettable with reliable cars, airport pickups, and group rides.",
  phone: "+91 7249216623",
  phoneRaw: "+917249216623",
  email: "infotriptogoa@gmail.com",
  address:
    "Chogam Road, near Sapna Garden, Porvorim, Bardez, Goa – 403501",
  hours: "Open 24 / 7",
  owner: "Yuvraj Banothkar",
  instagram: "https://www.instagram.com/goa.yatra.ttg",
  values: ["Fun", "Trust", "Freedom", "Simplicity", "Adventure", "Hospitality"],
};

export const waLink = (msg) =>
  `https://wa.me/917249216623?text=${encodeURIComponent(
    msg || "Hi Goa Yatra! Let's explore Goa together. I'd like to enquire about a car rental."
  )}`;

export const telLink = `tel:+917249216623`;

export const NAV = [
  { to: "/", label: "Home", short: "Home" },
  { to: "/fleet", label: "Fleet & Rentals", short: "Fleet" },
  { to: "/about", label: "About & FAQ", short: "About" },
];

