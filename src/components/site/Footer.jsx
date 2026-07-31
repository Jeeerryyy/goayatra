import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail, Clock, Compass, Heart, ShieldCheck, Lock, FileText, Download, UserCheck } from "lucide-react";
import { BRAND as defaultBrand, NAV, telLink } from "@/lib/site";
import { useAdmin } from "@/context/AdminContext";
import LogoIcon from "./LogoIcon";
import LegalModal from "./LegalModal";

export default function Footer() {
  const year = new Date().getFullYear();
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'nda' | 'terms' | null
  const { brand: activeBrand } = useAdmin();
  const currentBrand = activeBrand || defaultBrand;

  return (
    <footer data-testid="site-footer" className="mt-20 bg-[#493129] text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand block */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <LogoIcon variant="full" className="h-16 md:h-20 w-auto" />
          </div>
          <p className="mt-4 text-[#F8DCC7] font-display text-lg font-medium tracking-wide">
            &ldquo;{currentBrand.tagline}&rdquo;
          </p>
          <p className="mt-3 max-w-xs text-sm text-[#F8DCC7]/80 leading-relaxed font-body">
            We make every Goa trip simple, affordable, and unforgettable. Reliable cars, airport pickups, and group road trips.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={currentBrand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F8DCC7]/20 bg-white/5 text-[#F8DCC7] hover:bg-[#EFA3A0] hover:text-[#493129] transition-all transform hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={2} />
            </a>
            <span className="text-xs font-semibold tracking-wider text-[#F8DCC7]/90 font-body">
              @goa.yatra.ttg
            </span>
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-4">
            Get In Touch
          </p>
          <div className="space-y-4 text-sm font-body">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-[#EFA3A0] shrink-0" strokeWidth={2} />
              <span className="text-[#F8DCC7]/90" data-testid="footer-address">
                {currentBrand.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#EFA3A0] shrink-0" strokeWidth={2} />
              <a
                href={`tel:${currentBrand.phoneRaw || currentBrand.phone}`}
                data-testid="footer-phone"
                className="text-[#F8DCC7] hover:text-[#EFA3A0] transition-colors font-medium"
              >
                {currentBrand.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#EFA3A0] shrink-0" strokeWidth={2} />
              <a
                href={`mailto:${currentBrand.email}`}
                data-testid="footer-email"
                className="text-[#F8DCC7] hover:text-[#EFA3A0] transition-colors font-medium"
              >
                {currentBrand.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-[#8B597B] shrink-0" strokeWidth={2} />
              <span className="text-[#F8DCC7]/90">{currentBrand.hours}</span>
            </div>
          </div>
        </div>

        {/* Legal Safety & Sitemap */}
        <div className="md:col-span-4">
          <p className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-4">
            Website Safety &amp; Legal
          </p>
          <div className="space-y-3 font-body text-xs text-[#F8DCC7]/90">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                <ShieldCheck size={16} className="text-[#EFA3A0]" />
                <span>Protected Website Agreements</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveLegalModal("nda")}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left text-xs text-[#F8DCC7] hover:text-white group"
                >
                  <span className="inline-flex items-center gap-2">
                    <Lock size={14} className="text-[#EFA3A0]" />
                    <span className="font-semibold">Non-Disclosure Agreement (NDA)</span>
                  </span>
                  <FileText size={14} className="text-[#8B597B] group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() => setActiveLegalModal("terms")}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left text-xs text-[#F8DCC7] hover:text-white group"
                >
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#EFA3A0]" />
                    <span className="font-semibold">Standard Terms &amp; Conditions</span>
                  </span>
                  <FileText size={14} className="text-[#8B597B] group-hover:scale-110 transition-transform" />
                </button>
              </div>

              <div className="pt-1 text-[11px] text-[#F8DCC7]/70 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Lock size={12} className="text-[#EFA3A0]" />
                  <span>View agreements in secure modal.</span>
                </span>
                <Link
                  to="/admin"
                  className="hover:text-[#EFA3A0] underline inline-flex items-center gap-1 font-semibold"
                >
                  <UserCheck size={12} /> Owner Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Credits Bar */}
      <div className="bg-[#3C2721] border-t border-white/10 text-[#F8DCC7]/80">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body">
          <span>© {year} Goa Yatra — TTG Travels. All Rights Reserved.</span>

          {/* User Requested Credit */}
          <div className="flex items-center gap-2 font-heading font-bold text-sm tracking-wide text-white">
            <span>Made by</span>
            <span className="bg-gradient-to-r from-[#EFA3A0] via-white to-[#8B597B] bg-clip-text text-transparent uppercase font-extrabold tracking-widest text-xs py-0.5 px-2 rounded bg-white/5 border border-white/10">
              Nirvanaa Studios
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#F8DCC7]/90">
            <button onClick={() => setActiveLegalModal("nda")} className="hover:text-[#EFA3A0] transition-colors">
              NDA
            </button>
            <span>·</span>
            <button onClick={() => setActiveLegalModal("terms")} className="hover:text-[#EFA3A0] transition-colors">
              Terms &amp; Conditions
            </button>
            <span>·</span>
            <Link to="/admin" className="hover:text-[#EFA3A0] transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Legal Document Modals */}
      <LegalModal
        isOpen={activeLegalModal !== null}
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </footer>
  );
}


