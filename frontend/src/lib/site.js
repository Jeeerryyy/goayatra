// Central brand + contact constants
export const BRAND = {
  name: "Goa Yatra",
  sub: "TTG Travels",
  tagline: "Cars with drivers",
  positioning:
    "Reliable cars with drivers & self-drive rentals across Goa.",
  phone: "+91 7249216623",
  phoneRaw: "+917249216623",
  email: "infotriptogoa@gmail.com",
  address:
    "Chogam Road, near Sapna Garden, Porvorim, Bardez, Goa – 403501",
  hours: "Open 24 / 7",
  owner: "Yuvraj Banothkar",
  instagram: "https://www.instagram.com/goa.yatra.ttg",
};

export const waLink = (msg) =>
  `https://wa.me/917249216623?text=${encodeURIComponent(
    msg || "Hi Goa Yatra, I'd like to enquire about a car rental."
  )}`;

export const telLink = `tel:+917249216623`;

export const NAV = [
  { to: "/", label: "Home", short: "Home" },
  { to: "/cars-with-driver", label: "Cars with Driver", short: "Chauffeur" },
  { to: "/self-drive", label: "Self-Drive", short: "Self-Drive" },
  { to: "/group-travel", label: "Group Travel", short: "Group" },
  { to: "/about", label: "About & Contact", short: "About" },
];
