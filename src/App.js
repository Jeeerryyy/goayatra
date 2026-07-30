import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLenis } from "@/lib/lenis";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";
import ScrollToTop from "@/components/site/ScrollToTop";

import Home from "@/pages/Home";
import CarsWithDriver from "@/pages/CarsWithDriver";
import SelfDrive from "@/pages/SelfDrive";
import GroupTravel from "@/pages/GroupTravel";
import AboutContact from "@/pages/AboutContact";
import Vehicle from "@/pages/Vehicle";

function Site() {
  useLenis();
  return (
    <div className="App min-h-screen bg-bg text-ink">
      <ScrollToTop />
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
      {/* Bottom padding to clear mobile sticky bar */}
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
