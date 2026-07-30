import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";

import Home from "@/pages/Home";
import Fleet from "@/pages/Fleet";
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
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/cars-with-driver" element={<Fleet />} />
        <Route path="/self-drive" element={<Fleet />} />
        <Route path="/group-travel" element={<Fleet />} />
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
