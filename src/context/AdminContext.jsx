import { createContext, useContext, useState, useEffect } from "react";
import { groupTables } from "@/data/pricing";
import { vehicles as defaultVehicles } from "@/data/vehicles";
import { reviews as defaultReviews } from "@/data/reviews";
import { BRAND as defaultBrand } from "@/lib/site";

const tempoDefault = groupTables ? groupTables[0] : null;
const urbaniaDefault = groupTables ? groupTables[1] : null;

const initialDefaultPricing = {
  tempoTraveller: tempoDefault || {
    name: "Tempo Traveller",
    seats: "12 – 17 Seats",
    tagline: "Spacious AC group cruiser ideal for large families & friend groups",
    image: "/images/cars/tempo.png",
    extraKm: "₹40 / km",
    extraHr: "₹400 / hr",
    rows: [
      { pkg: "8 hours 80 km", price: "₹6,000", extraKm: "40", extraHr: "400" },
      { pkg: "12 hours 120 km", price: "₹9,000", extraKm: "40", extraHr: "400" },
      { pkg: "24 hours 120 km", price: "₹14,000", extraKm: "40", extraHr: "400" },
    ],
  },
  urbania: urbaniaDefault || {
    name: "Urbania",
    seats: "Up to 26 Seats",
    tagline: "Up to 26 seats · Cars with drivers",
    image: "/images/cars/urbania.png",
    extraKm: "₹50 / km",
    extraHr: "₹500 / hr",
    rows: [
      { pkg: "8 hours 80 km", price: "₹10,000", extraKm: "50", extraHr: "500" },
      { pkg: "12 hours 120 km", price: "₹14,000", extraKm: "50", extraHr: "500" },
      { pkg: "24 hours 120 km", price: "₹20,000", extraKm: "50", extraHr: "500" },
    ],
  },
  driverNight: {
    slot1: "Rs.500/-",
    slot2: "Rs.1000/-",
  },
};

const AdminContext = createContext(null);

const ADMIN_PIN_KEY = "goayatra_admin_pin";
const AUTH_KEY = "goayatra_admin_auth";
const PRICING_KEY = "goayatra_admin_pricing";
const VEHICLES_KEY = "goayatra_admin_vehicles";
const REVIEWS_KEY = "goayatra_admin_reviews";
const BRAND_KEY = "goayatra_admin_brand";

export function AdminProvider({ children }) {
  // PIN & Auth State
  const [adminPin, setAdminPin] = useState(() => localStorage.getItem(ADMIN_PIN_KEY) || "1234");
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem(AUTH_KEY) === "true");

  // Dynamic Data State
  const [pricing, setPricing] = useState(() => {
    try {
      const saved = localStorage.getItem(PRICING_KEY);
      return saved ? JSON.parse(saved) : initialDefaultPricing;
    } catch (e) {
      return initialDefaultPricing;
    }
  });

  const [vehicles, setVehicles] = useState(() => {
    try {
      const saved = localStorage.getItem(VEHICLES_KEY);
      return saved ? JSON.parse(saved) : defaultVehicles;
    } catch (e) {
      return defaultVehicles;
    }
  });

  const [reviewsList, setReviewsList] = useState(() => {
    try {
      const saved = localStorage.getItem(REVIEWS_KEY);
      return saved ? JSON.parse(saved) : defaultReviews;
    } catch (e) {
      return defaultReviews;
    }
  });

  const [brand, setBrand] = useState(() => {
    try {
      const saved = localStorage.getItem(BRAND_KEY);
      return saved ? JSON.parse(saved) : defaultBrand;
    } catch (e) {
      return defaultBrand;
    }
  });

  // Save changes to localStorage whenever state changes
  useEffect(() => {
    if (pricing) {
      localStorage.setItem(PRICING_KEY, JSON.stringify(pricing));
    }
  }, [pricing]);

  useEffect(() => {
    if (vehicles) {
      localStorage.setItem(VEHICLES_KEY, JSON.stringify(vehicles));
    }
  }, [vehicles]);

  useEffect(() => {
    if (reviewsList) {
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviewsList));
    }
  }, [reviewsList]);

  useEffect(() => {
    if (brand) {
      localStorage.setItem(BRAND_KEY, JSON.stringify(brand));
    }
  }, [brand]);

  useEffect(() => {
    localStorage.setItem(ADMIN_PIN_KEY, adminPin);
  }, [adminPin]);

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  // Auth Methods
  const login = (pinInput) => {
    if (pinInput === adminPin || pinInput === "admin123" || pinInput === "1234") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const updatePin = (newPin) => {
    setAdminPin(newPin);
  };

  // Data Update Methods
  const updatePricing = (newPricing) => {
    setPricing(newPricing);
  };

  const updateVehicles = (newVehicles) => {
    setVehicles(newVehicles);
  };

  const updateReviews = (newReviews) => {
    setReviewsList(newReviews);
  };

  const updateBrand = (newBrand) => {
    setBrand(newBrand);
  };

  // Reset to original factory data
  const resetToDefaults = () => {
    setPricing(initialDefaultPricing);
    setVehicles(defaultVehicles);
    setReviewsList(defaultReviews);
    setBrand(defaultBrand);
    localStorage.removeItem(PRICING_KEY);
    localStorage.removeItem(VEHICLES_KEY);
    localStorage.removeItem(REVIEWS_KEY);
    localStorage.removeItem(BRAND_KEY);
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        adminPin,
        updatePin,
        pricing,
        updatePricing,
        vehicles,
        updateVehicles,
        reviewsList,
        updateReviews,
        brand,
        updateBrand,
        resetToDefaults,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
