import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail, Clock, Compass, Heart } from "lucide-react";
import { BRAND, NAV, telLink } from "@/lib/site";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="mt-20 bg-[#493129] text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand block */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <LogoIcon variant="full" className="h-16 md:h-20 w-auto" />
          </div>
          <p className="mt-4 text-[#F8DCC7] font-display text-lg font-medium tracking-wide">
            &ldquo;{BRAND.tagline}&rdquo;
          </p>
          <p className="mt-3 max-w-xs text-sm text-[#F8DCC7]/80 leading-relaxed font-body">
            We make every Goa trip simple, affordable, and unforgettable. Reliable cars, airport pickups, and group road trips.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={BRAND.instagram}
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
                {BRAND.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#EFA3A0] shrink-0" strokeWidth={2} />
              <a
                href={telLink}
                data-testid="footer-phone"
                className="text-[#F8DCC7] hover:text-[#EFA3A0] transition-colors font-medium"
              >
                {BRAND.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#EFA3A0] shrink-0" strokeWidth={2} />
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="footer-email"
                className="text-[#F8DCC7] hover:text-[#EFA3A0] transition-colors font-medium"
              >
                {BRAND.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-[#8B597B] shrink-0" strokeWidth={2} />
              <span className="text-[#F8DCC7]/90">{BRAND.hours}</span>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="md:col-span-4">
          <p className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-4">
            Explore Goa
          </p>
          <ul className="space-y-3 text-sm font-body">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  data-testid={`footer-nav-${n.short.toLowerCase()}`}
                  className="text-[#F8DCC7] hover:text-[#EFA3A0] transition-colors inline-flex items-center gap-2 group"
                >
                  <Compass size={14} className="text-[#EFA3A0] transition-transform group-hover:rotate-45" />
                  <span>{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#F8DCC7]/90">
            <span className="text-white font-bold">Ready for Beach &amp; Roads?</span>
            <p className="mt-1">Book your ride today and make memories tomorrow!</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#3C2721] border-t border-white/10 text-[#F8DCC7]/80">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs tracking-wider font-body">
          <span>© {year} Goa Yatra — TTG Travels. All Rights Reserved.</span>
          <span className="inline-flex items-center gap-1 text-[#F8DCC7]/80">
            Made with <Heart size={14} className="text-[#EFA3A0] fill-[#EFA3A0]" /> for Goa Yatra
          </span>
        </div>
      </div>
    </footer>
  );
}

