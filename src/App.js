import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";

import Home from "@/pages/Home";
import CarsWithDriver from "@/pages/CarsWithDriver";
import SelfDrive from "@/pages/SelfDrive";
import GroupTravel from "@/pages/GroupTravel";
import AboutContact from "@/pages/AboutContact";
import Vehicle from "@/pages/Vehicle";

function Site() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars-with-driver" element={<CarsWithDriver />} />
        <Route path="/self-drive" element={<SelfDrive />} />
        <Route path="/group-travel" element={<GroupTravel />} />
        <Route path="/about" element={<AboutContact />} />
        <Route path="/vehicle/:slug" element={<Vehicle />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <MobileStickyBar />
      <div className="h-16 lg:hidden" aria-hidden />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
