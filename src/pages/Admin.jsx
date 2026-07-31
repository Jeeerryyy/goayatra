import { useState } from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "@/context/AdminContext";
import {
  Lock,
  LogOut,
  Key,
  ShieldCheck,
  DollarSign,
  Car,
  Star,
  Phone,
  RotateCcw,
  Check,
  Plus,
  Trash2,
  Edit,
  Save,
  Globe,
  Users,
} from "lucide-react";

export default function Admin() {
  const {
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
  } = useAdmin();

  // Login State
  const [pinInput, setPinInput] = useState("");
  const [loginError, setLoginError] = useState("");

  // Tab State: 'pricing' | 'vehicles' | 'reviews' | 'contact' | 'settings'
  const [activeTab, setActiveTab] = useState("pricing");
  const [toastMessage, setToastMessage] = useState("");

  // New Review Form State
  const [newReview, setNewReview] = useState({
    name: "",
    initials: "",
    rating: 5,
    vehicle: "",
    text: "",
    source: "Google",
    date: "Just Now",
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (login(pinInput)) {
      setLoginError("");
      setPinInput("");
    } else {
      setLoginError("Invalid PIN code. Default PIN is 1234.");
    }
  };

  // ----------------------------------------------------
  // LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#493129] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B597B]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EFA3A0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-md bg-white rounded-[28px] p-8 shadow-2xl border border-[#F0DED2]">
          <div className="text-center mb-6">
            <div className="h-16 w-16 bg-[#FFF3EB] text-[#8B597B] rounded-2xl mx-auto flex items-center justify-center border border-[#F0DED2] mb-3">
              <Lock size={32} />
            </div>
            <h1 className="font-display text-2xl font-bold text-[#493129]">
              Owner Admin Portal
            </h1>
            <p className="text-xs text-[#856A63] mt-1 font-body">
              Enter owner security PIN to manage prices, fleet, &amp; settings.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 font-body">
            <div>
              <label className="block text-xs font-bold text-[#493129] uppercase tracking-wider mb-2">
                Security PIN Code
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: 1234)"
                  className="w-full pl-11 pr-4 py-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl text-base font-bold text-[#493129] focus:ring-2 focus:ring-[#8B597B] outline-none"
                  autoFocus
                />
                <Key
                  size={20}
                  className="absolute left-3.5 top-3.5 text-[#8B597B]"
                />
              </div>
              {loginError && (
                <p className="mt-2 text-xs font-semibold text-red-600">
                  {loginError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-soft"
            >
              <ShieldCheck size={18} />
              <span>Unlock Admin Controls</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#F0DED2] text-center text-xs text-[#856A63]">
            <p>Default Owner PIN: <strong className="text-[#493129]">1234</strong></p>
            <Link
              to="/"
              className="mt-3 inline-block font-semibold text-[#8B597B] hover:underline"
            >
              ← Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // ADMIN DASHBOARD VIEW
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#FFF8F2] text-[#493129] pb-24 font-body">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#493129] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold border border-[#8B597B] animate-bounce">
          <Check size={18} className="text-[#EFA3A0]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Admin Header Bar */}
      <header className="bg-[#493129] text-white sticky top-0 z-40 shadow-soft">
        <div className="mx-auto max-w-[1440px] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#8B597B] flex items-center justify-center font-bold text-white">
              👑
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#EFA3A0]">
                Goa Yatra Owner Panel
              </span>
              <h1 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                Live Website Manager
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              <Globe size={14} />
              <span>View Website</span>
            </Link>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#8B597B] text-white text-xs font-semibold hover:bg-[#8B597B]/80 transition-colors"
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="bg-[#3C2721] border-t border-white/10 px-6 overflow-x-auto">
          <div className="mx-auto max-w-[1440px] flex items-center gap-2 py-2">
            {[
              { id: "pricing", label: "Group & Car Pricing", icon: DollarSign },
              { id: "vehicles", label: "Fleet Catalog", icon: Car },
              { id: "reviews", label: "Google Reviews", icon: Star },
              { id: "contact", label: "Business & Contact", icon: Phone },
              { id: "settings", label: "PIN & Reset", icon: RotateCcw },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? "bg-[#8B597B] text-white shadow-soft"
                      : "text-[#F8DCC7]/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 py-8">
        {/* ====================================================
            TAB 1: GROUP & CAR PRICING MANAGER
           ==================================================== */}
        {activeTab === "pricing" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#F0DED2] shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#493129]">
                    Group Travel Rates (Tempo Traveller &amp; Urbania)
                  </h2>
                  <p className="text-xs text-[#856A63] mt-1">
                    Update individual package pricing shown on the Group Travel page.
                  </p>
                </div>
                <button
                  onClick={() => showToast("Pricing updated live on website!")}
                  className="btn-primary text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 font-bold"
                >
                  <Save size={14} /> Save Pricing
                </button>
              </div>

              {/* Tempo Traveller Rates Editor */}
              <div className="space-y-6">
                <div className="p-4 bg-[#FFF8F2] rounded-2xl border border-[#F0DED2]">
                  <h3 className="font-heading font-bold text-base text-[#493129] mb-4 flex items-center gap-2">
                    <span>🚌 Tempo Traveller Rates (12 – 17 Seats)</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pricing.tempoTraveller?.rows?.map((row, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-xl border border-[#F0DED2]"
                      >
                        <span className="text-xs font-bold text-[#8B597B] block mb-1">
                          {row.pkg}
                        </span>
                        <label className="text-[11px] font-semibold text-[#856A63] block">
                          Price (₹)
                        </label>
                        <input
                          type="text"
                          value={row.price}
                          onChange={(e) => {
                            const updated = { ...pricing };
                            updated.tempoTraveller.rows[idx].price = e.target.value;
                            updatePricing(updated);
                          }}
                          className="w-full mt-1 p-2 bg-[#FFF8F2] border border-[#F0DED2] rounded-lg font-bold text-sm text-[#493129]"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-[#F0DED2]">
                    <div>
                      <label className="text-xs font-semibold text-[#856A63]">
                        Extra Km Rate (Tempo)
                      </label>
                      <input
                        type="text"
                        value={pricing.tempoTraveller?.extraKm || "₹40/km"}
                        onChange={(e) => {
                          const updated = { ...pricing };
                          updated.tempoTraveller.extraKm = e.target.value;
                          updatePricing(updated);
                        }}
                        className="w-full mt-1 p-2 bg-white border border-[#F0DED2] rounded-lg font-bold text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#856A63]">
                        Extra Hour Rate (Tempo)
                      </label>
                      <input
                        type="text"
                        value={pricing.tempoTraveller?.extraHr || "₹400/hr"}
                        onChange={(e) => {
                          const updated = { ...pricing };
                          updated.tempoTraveller.extraHr = e.target.value;
                          updatePricing(updated);
                        }}
                        className="w-full mt-1 p-2 bg-white border border-[#F0DED2] rounded-lg font-bold text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Force Urbania Rates Editor */}
                <div className="p-4 bg-[#FFF8F2] rounded-2xl border border-[#F0DED2]">
                  <h3 className="font-heading font-bold text-base text-[#493129] mb-4 flex items-center gap-2">
                    <span>🚐 Force Urbania Rates (Luxury Group Van)</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pricing.urbania?.rows?.map((row, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-xl border border-[#F0DED2]"
                      >
                        <span className="text-xs font-bold text-[#8B597B] block mb-1">
                          {row.pkg}
                        </span>
                        <label className="text-[11px] font-semibold text-[#856A63] block">
                          Price (₹)
                        </label>
                        <input
                          type="text"
                          value={row.price}
                          onChange={(e) => {
                            const updated = { ...pricing };
                            updated.urbania.rows[idx].price = e.target.value;
                            updatePricing(updated);
                          }}
                          className="w-full mt-1 p-2 bg-[#FFF8F2] border border-[#F0DED2] rounded-lg font-bold text-sm text-[#493129]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Driver Night Pay Editor */}
                <div className="p-4 bg-[#FFF8F2] rounded-2xl border border-[#F0DED2]">
                  <h3 className="font-heading font-bold text-base text-[#493129] mb-3">
                    🌙 Driver Night Overtime Pay Rates
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#856A63]">
                        08:00 PM to 12:00 AM Slot Rate
                      </label>
                      <input
                        type="text"
                        value={pricing.driverNight?.slot1 || "Rs.500/-"}
                        onChange={(e) => {
                          const updated = { ...pricing };
                          if (!updated.driverNight) updated.driverNight = {};
                          updated.driverNight.slot1 = e.target.value;
                          updatePricing(updated);
                        }}
                        className="w-full mt-1 p-2 bg-white border border-[#F0DED2] rounded-lg font-bold text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#856A63]">
                        08:00 PM to 06:00 AM Full Night Slot Rate
                      </label>
                      <input
                        type="text"
                        value={pricing.driverNight?.slot2 || "Rs.1000/-"}
                        onChange={(e) => {
                          const updated = { ...pricing };
                          if (!updated.driverNight) updated.driverNight = {};
                          updated.driverNight.slot2 = e.target.value;
                          updatePricing(updated);
                        }}
                        className="w-full mt-1 p-2 bg-white border border-[#F0DED2] rounded-lg font-bold text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================
            TAB 2: VEHICLE CATALOG & AVAILABILITY MANAGER
           ==================================================== */}
        {activeTab === "vehicles" && (
          <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#F0DED2] shadow-card">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#493129]">
                  Fleet &amp; Vehicle Catalog ({vehicles.length} Vehicles)
                </h2>
                <p className="text-xs text-[#856A63] mt-1">
                  Toggle availability or edit daily rental rates for each car.
                </p>
              </div>
              <button
                onClick={() => showToast("Fleet changes updated live!")}
                className="btn-primary text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 font-bold"
              >
                <Save size={14} /> Save Fleet Changes
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((v, idx) => (
                <div
                  key={v.id || idx}
                  className="p-5 rounded-2xl border border-[#F0DED2] bg-[#FFF8F2] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8B597B] bg-[#FFF3EB] px-2.5 py-1 rounded-badge border border-[#F0DED2]">
                        {v.category}
                      </span>
                      <button
                        onClick={() => {
                          const updated = [...vehicles];
                          updated[idx].isAvailable = !updated[idx].isAvailable;
                          updateVehicles(updated);
                          showToast(
                            `${v.name} is now ${
                              updated[idx].isAvailable ? "Available" : "Booked Out"
                            }`
                          );
                        }}
                        className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                          v.isAvailable !== false
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-amber-100 text-amber-800 border border-amber-300"
                        }`}
                      >
                        {v.isAvailable !== false ? "✓ Available" : "✗ Booked Out"}
                      </button>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#493129]">
                      {v.name}
                    </h3>
                    <p className="text-xs text-[#856A63] mt-0.5 font-body">
                      {v.seats} Seats · {v.transmission} · {v.fuel}
                    </p>

                    <div className="mt-4 space-y-3">
                      <div>
                        <label className="text-[11px] font-semibold text-[#856A63]">
                          Daily Price Text (e.g. ₹2,500/day)
                        </label>
                        <input
                          type="text"
                          value={v.priceDisplay}
                          onChange={(e) => {
                            const updated = [...vehicles];
                            updated[idx].priceDisplay = e.target.value;
                            updateVehicles(updated);
                          }}
                          className="w-full mt-1 p-2 bg-white border border-[#F0DED2] rounded-lg font-bold text-xs text-[#493129]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0DED2] flex items-center justify-between text-xs text-[#856A63]">
                    <span>ID: {v.id}</span>
                    <span className="font-bold text-[#493129]">
                      Deposit: ₹{v.deposit || "3,000"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================
            TAB 3: GOOGLE REVIEWS MANAGER
           ==================================================== */}
        {activeTab === "reviews" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#F0DED2] shadow-card">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#493129] mb-4">
                Add New Customer Google Review
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-[#856A63]">
                    Reviewer Name
                  </label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value, initials: e.target.value.slice(0, 2).toUpperCase() })
                    }
                    placeholder="e.g. Rahul Sharma"
                    className="w-full mt-1 p-2.5 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#856A63]">
                    Vehicle Rented
                  </label>
                  <input
                    type="text"
                    value={newReview.vehicle}
                    onChange={(e) =>
                      setNewReview({ ...newReview, vehicle: e.target.value })
                    }
                    placeholder="e.g. Innova Crysta · Self-drive"
                    className="w-full mt-1 p-2.5 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#856A63]">
                    Rating Stars (1 to 5)
                  </label>
                  <select
                    value={newReview.rating}
                    onChange={(e) =>
                      setNewReview({ ...newReview, rating: Number(e.target.value) })
                    }
                    className="w-full mt-1 p-2.5 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl text-xs font-semibold"
                  >
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★</option>
                    <option value={3}>3 Stars ★★★</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#856A63]">
                    Source Badge
                  </label>
                  <input
                    type="text"
                    value={newReview.source}
                    onChange={(e) =>
                      setNewReview({ ...newReview, source: e.target.value })
                    }
                    className="w-full mt-1 p-2.5 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xs font-semibold text-[#856A63]">
                  Review Feedback Text
                </label>
                <textarea
                  rows={3}
                  value={newReview.text}
                  onChange={(e) =>
                    setNewReview({ ...newReview, text: e.target.value })
                  }
                  placeholder="Enter traveler feedback..."
                  className="w-full mt-1 p-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl text-xs font-medium"
                />
              </div>

              <button
                onClick={() => {
                  if (!newReview.name || !newReview.text) {
                    alert("Please enter reviewer name and feedback text.");
                    return;
                  }
                  const added = [
                    { ...newReview, id: Date.now(), initials: newReview.name.slice(0, 2).toUpperCase() },
                    ...reviewsList,
                  ];
                  updateReviews(added);
                  setNewReview({
                    name: "",
                    initials: "",
                    rating: 5,
                    vehicle: "",
                    text: "",
                    source: "Google",
                    date: "Just Now",
                  });
                  showToast("New review added to auto-scrolling marquee!");
                }}
                className="btn-primary py-2.5 px-6 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <Plus size={16} /> Add Review To Live Marquee
              </button>
            </div>

            {/* Existing Reviews List */}
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#F0DED2] shadow-card">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#493129] mb-4">
                Active Marquee Reviews ({reviewsList.length})
              </h2>
              <div className="space-y-4">
                {reviewsList.map((r, idx) => (
                  <div
                    key={r.id || idx}
                    className="p-4 rounded-2xl bg-[#FFF8F2] border border-[#F0DED2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-[#493129]">{r.name}</span>
                        <span className="text-xs text-[#8B597B] font-semibold">• {r.vehicle}</span>
                      </div>
                      <p className="text-xs text-[#6D4F47] italic">&ldquo;{r.text}&rdquo;</p>
                    </div>
                    <button
                      onClick={() => {
                        const filtered = reviewsList.filter((_, i) => i !== idx);
                        updateReviews(filtered);
                        showToast("Review deleted.");
                      }}
                      className="text-xs font-bold text-red-600 hover:text-red-800 p-2 rounded-lg bg-red-50 border border-red-200 shrink-0"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ====================================================
            TAB 4: CONTACT & BUSINESS DETAILS MANAGER
           ==================================================== */}
        {activeTab === "contact" && (
          <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#F0DED2] shadow-card space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#493129]">
                  Business Contact &amp; Information
                </h2>
                <p className="text-xs text-[#856A63] mt-1">
                  Update phone, WhatsApp, email, and address displayed across the site.
                </p>
              </div>
              <button
                onClick={() => showToast("Business details updated live!")}
                className="btn-primary text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 font-bold"
              >
                <Save size={14} /> Save Contact Details
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-[#493129] uppercase tracking-wider block">
                  Primary Phone Number
                </label>
                <input
                  type="text"
                  value={brand.phone || "+91 7249216623"}
                  onChange={(e) => updateBrand({ ...brand, phone: e.target.value })}
                  className="w-full mt-1.5 p-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl font-bold text-sm text-[#493129]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#493129] uppercase tracking-wider block">
                  Contact Email Address
                </label>
                <input
                  type="text"
                  value={brand.email || "infotriptogoa@gmail.com"}
                  onChange={(e) => updateBrand({ ...brand, email: e.target.value })}
                  className="w-full mt-1.5 p-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl font-bold text-sm text-[#493129]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-[#493129] uppercase tracking-wider block">
                  Physical Office Address
                </label>
                <input
                  type="text"
                  value={brand.address || "Chogam Road, near Sapna Garden, Porvorim, Bardez, Goa – 403501"}
                  onChange={(e) => updateBrand({ ...brand, address: e.target.value })}
                  className="w-full mt-1.5 p-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl font-bold text-sm text-[#493129]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#493129] uppercase tracking-wider block">
                  Business Hours Display
                </label>
                <input
                  type="text"
                  value={brand.hours || "Open 24 / 7"}
                  onChange={(e) => updateBrand({ ...brand, hours: e.target.value })}
                  className="w-full mt-1.5 p-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl font-bold text-sm text-[#493129]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#493129] uppercase tracking-wider block">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  value={brand.instagram || "https://www.instagram.com/goa.yatra.ttg"}
                  onChange={(e) => updateBrand({ ...brand, instagram: e.target.value })}
                  className="w-full mt-1.5 p-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl font-bold text-sm text-[#493129]"
                />
              </div>
            </div>
          </div>
        )}

        {/* ====================================================
            TAB 5: PIN SECURITY & RESTORE DEFAULTS
           ==================================================== */}
        {activeTab === "settings" && (
          <div className="space-y-8">
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#F0DED2] shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#493129]">
                Change Owner Security PIN
              </h2>
              <div className="max-w-md space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#856A63]">
                    New Security PIN (Default is 1234)
                  </label>
                  <input
                    type="password"
                    defaultValue={adminPin}
                    onChange={(e) => {
                      if (e.target.value.length >= 4) {
                        updatePin(e.target.value);
                      }
                    }}
                    className="w-full mt-1 p-3 bg-[#FFF8F2] border border-[#F0DED2] rounded-xl font-bold text-base"
                  />
                </div>
                <button
                  onClick={() => showToast("Owner security PIN updated!")}
                  className="btn-primary py-2.5 px-6 rounded-xl text-xs font-bold"
                >
                  Update Security PIN
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#F0DED2] shadow-card space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-red-700">
                Reset Site Data To Factory Defaults
              </h2>
              <p className="text-xs text-[#856A63]">
                This will clear all custom pricing, review, and fleet edits and restore original default settings.
              </p>
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to reset all custom edits to original default settings?")) {
                    resetToDefaults();
                    showToast("Site data reset to original defaults.");
                  }
                }}
                className="bg-red-600 text-white hover:bg-red-700 transition-colors py-3 px-6 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <RotateCcw size={16} /> Reset All Data To Factory Defaults
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
