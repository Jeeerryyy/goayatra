// All pricing data reproduced verbatim from PRD §4.
// Extra hour "N/A" indicates the source shows 000 for 24-hour packages.

export const chauffeurTables = [
  {
    id: "sedan",
    name: "Sedan AC",
    tagline: "The everyday, all-Goa companion.",
    rows: [
      { pkg: "8 hours / 80 km", price: "₹2,500", extraKm: "₹25 / km", extraHr: "₹200 / hr" },
      { pkg: "12 hours / 120 km", price: "₹4,500", extraKm: "₹25 / km", extraHr: "₹200 / hr" },
      { pkg: "24 hours / 120 km", price: "₹8,000", extraKm: "₹25 / km", extraHr: "N/A" },
    ],
  },
  {
    id: "ertiga-innova",
    name: "Ertiga AC / Innova AC",
    tagline: "Room for the family and the luggage.",
    rows: [
      { pkg: "8 hours / 80 km", price: "₹3,000", extraKm: "₹25 / km", extraHr: "₹200 / hr" },
      { pkg: "12 hours / 120 km", price: "₹5,000", extraKm: "₹25 / km", extraHr: "₹200 / hr" },
      { pkg: "24 hours / 120 km", price: "₹8,500", extraKm: "₹25 / km", extraHr: "N/A" },
    ],
  },
  {
    id: "innova",
    name: "Innova AC",
    tagline: "The workhorse of Goa's coastline.",
    rows: [
      { pkg: "8 hours / 80 km", price: "₹3,000", extraKm: "₹28 / km", extraHr: "₹200 / hr" },
      { pkg: "12 hours / 120 km", price: "₹5,000", extraKm: "₹28 / km", extraHr: "₹200 / hr" },
      { pkg: "24 hours / 120 km", price: "₹8,500", extraKm: "₹28 / km", extraHr: "N/A" },
    ],
  },
  {
    id: "crysta",
    name: "Crysta AC",
    tagline: "Long drives, quieter cabin.",
    rows: [
      { pkg: "8 hours / 80 km", price: "₹3,500", extraKm: "₹30 / km", extraHr: "₹300 / hr" },
      { pkg: "12 hours / 120 km", price: "₹6,000", extraKm: "₹30 / km", extraHr: "₹300 / hr" },
      { pkg: "24 hours / 120 km", price: "₹9,500", extraKm: "₹30 / km", extraHr: "N/A" },
    ],
  },
  {
    id: "hycross",
    name: "Hycross AC",
    tagline: "The top of the chauffeur line.",
    rows: [
      { pkg: "8 hours / 80 km", price: "₹4,500", extraKm: "₹30 / km", extraHr: "₹300 / hr" },
      { pkg: "12 hours / 120 km", price: "₹7,000", extraKm: "₹30 / km", extraHr: "₹300 / hr" },
      { pkg: "24 hours / 120 km", price: "₹10,500", extraKm: "₹30 / km", extraHr: "N/A" },
    ],
  },
];

export const driverNight = [
  { slot: "08 pm to 12 am", charge: "Rs.500/-" },
  { slot: "08 pm to 06 am", charge: "Rs.1000/-" },
];

export const selfDriveRows = [
  { veh: "Swift", manual: "₹1,200", auto: "₹1,400", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Baleno", manual: "₹1,300", auto: "₹1,500", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Ertiga", manual: "₹2,200", auto: "₹2,500", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Kia Carens", manual: "₹2,200", auto: "N/A", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Innova Crysta", manual: "₹3,000", auto: "₹3,500", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Kia Seltos", manual: "N/A", auto: "₹3,500", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Hyundai Alcazar", manual: "N/A", auto: "₹3,500", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Thar (ST/HT)", manual: "N/A", auto: "₹3,500", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Hyundai Creta", manual: "N/A", auto: "₹3,500", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Innova Hycross", manual: "N/A", auto: "₹4,000", delivery: "₹500", pickup: "₹500", deposit: "₹3,000" },
  { veh: "Thar Roxx", manual: "N/A", auto: "₹6,000", delivery: "₹500", pickup: "₹500", deposit: "₹5,000" },
  { veh: "Fortuner", manual: "N/A", auto: "₹6,000", delivery: "₹500", pickup: "₹500", deposit: "₹5,000" },
  { veh: "Fortuner Legender", manual: "N/A", auto: "₹8,000", delivery: "₹500", pickup: "₹500", deposit: "₹10,000" },
];

export const selfDriveNotes = [
  "All rates in Indian Rupees (₹).",
  "Rental day counted 9:00 am to 9:00 am (24 hours), strictly.",
  "Minimum rental duration: 2 days.",
  "Airport-to-airport bookings: minimum 3 days.",
  "Security deposit is refundable, subject to vehicle condition on return.",
  "Fuel is borne by the customer.",
  "Valid driving licence + original ID proof required at pickup.",
  "Late return after 9:00 am is charged as a full additional day.",
  "Advance booking required at least 24 hours ahead.",
  "Payment accepted via UPI, Net Banking, or Cash — full payment due at delivery.",
  "Terms & conditions apply per the rental agreement.",
];

export const groupTables = [
  {
    id: "tempo",
    name: "Tempo Traveller",
    tagline: "12–17 seats · Cars with drivers",
    image: "/images/cars/tempo.png",
    seats: "12 – 17 Seats",
    extraKm: "₹40 / km",
    extraHr: "₹400 / hr",
    rows: [
      { pkg: "8 hours 80 km", price: "₹6,000", extraKm: "₹40", extraHr: "₹400" },
      { pkg: "12 hours 120 km", price: "₹9,000", extraKm: "₹40", extraHr: "₹400" },
      { pkg: "24 hours 120 km", price: "₹14,000", extraKm: "₹40", extraHr: "₹400" },
    ],
  },
  {
    id: "urbania",
    name: "Urbania",
    tagline: "Up to 26 seats · Cars with drivers",
    image: "/images/cars/urbania.png",
    seats: "Up to 26 Seats",
    extraKm: "₹50 / km",
    extraHr: "₹500 / hr",
    rows: [
      { pkg: "8 hours 80 km", price: "₹10,000", extraKm: "₹50", extraHr: "₹500" },
      { pkg: "12 hours 120 km", price: "₹14,000", extraKm: "₹50", extraHr: "₹500" },
      { pkg: "24 hours 120 km", price: "₹20,000", extraKm: "₹50", extraHr: "₹500" },
    ],
  },
];

export const groupTravelMetadata = {
  validity: "Price from 3rd Jan to 28th Dec",
  heading: "Cars with drivers",
  phone: "7249216623",
  formattedPhone: "+91 7249216623",
  email: "infotriptogoa@gmail.com",
};


export const faqs = [
  {
    q: "How far in advance should I book?",
    a: "At least 24 hours ahead for both chauffeur and self-drive. During peak weekends and holiday season we suggest booking a few days earlier so we can guarantee your preferred vehicle.",
  },
  {
    q: "How does the driver night charge work?",
    a: "For any drive that runs past 8:00 pm, an overtime charge is compulsory — ₹500 if the driver is with you between 8:00 pm and 12:00 am, and ₹1,000 if the driver stays on with you between 8:00 pm and 6:00 am.",
  },
  {
    q: "Is the security deposit refundable?",
    a: "Yes. The self-drive security deposit is fully refundable, subject to the vehicle being returned in the same condition (no dents, no interior damage, no missing accessories) and within the agreed time.",
  },
  {
    q: "What documents do I need for self-drive?",
    a: "A valid driving licence and one original government-issued photo ID at pickup. Fuel is borne by the customer. All rentals are counted 9:00 am to 9:00 am — a late return past 9:00 am is charged as a full extra day.",
  },
  {
    q: "How can I pay?",
    a: "UPI, Net Banking or Cash. Full payment is due at the time of delivery for self-drive, and at the start of the trip for chauffeur rentals.",
  },
  {
    q: "Do you drive outside Goa?",
    a: "Yes — outstation runs are available across the chauffeur line-up (Sedan through Hycross) and for our Tempo Traveller and Urbania. Message us on WhatsApp with your route and dates for a quick quote.",
  },
];

export const manifesto = [
  {
    n: "01",
    title: "The Coast",
    body:
      "From Chogam Road we cover every mile of Goa — the north-beach strip from Anjuna to Morjim, the quiet mid-coast around Cavelossim, and the ferry-crossings down to Palolem. One number, every road.",
  },
  {
    n: "02",
    title: "The Car",
    body:
      "A quiet, clean, air-conditioned cabin. Sedan, Ertiga, Innova, Crysta, Hycross — through to Tempo Traveller and Urbania for group runs. Every vehicle checked before it leaves the yard.",
  },
  {
    n: "03",
    title: "The Driver",
    body:
      "Local, licensed, unhurried. Knows the short-cuts, the hidden shacks, the safest stretch of highway at 2 am. If you'd rather drive yourself, our self-drive line-up goes from Swift to Fortuner Legender.",
  },
  {
    n: "04",
    title: "The Journey",
    body:
      "No booking engine, no forms, no waiting on email. Tap Call or WhatsApp — you get a real person, a real quote, in a few minutes. That's the whole promise.",
  },
];
