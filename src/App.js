import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";
import { AdminProvider } from "@/context/AdminContext";

import Home from "@/pages/Home";
import Fleet from "@/pages/Fleet";
import CarsWithDriver from "@/pages/CarsWithDriver";
import SelfDrive from "@/pages/SelfDrive";
import GroupTravel from "@/pages/GroupTravel";
import AboutContact from "@/pages/AboutContact";
import Vehicle from "@/pages/Vehicle";
import Admin from "@/pages/Admin";

function Site() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  const isAdminRoute = pathname === "/admin";

  return (
    <div className="relative min-h-screen bg-[#FFF8F2] text-[#493129] font-body selection:bg-[#8B597B] selection:text-white">
      {/* Global Soft Sunset Background Ambient Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F8DCC7]/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EFA3A0]/15 rounded-full filter blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10">
        {!isAdminRoute && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/cars-with-driver" element={<CarsWithDriver />} />
          <Route path="/self-drive" element={<SelfDrive />} />
          <Route path="/group-travel" element={<GroupTravel />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/vehicle/:slug" element={<Vehicle />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {!isAdminRoute && <Footer />}
        {!isAdminRoute && <MobileStickyBar />}
        {!isAdminRoute && <div className="h-16 lg:hidden" aria-hidden />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </AdminProvider>
  );
}
