import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { BRAND, NAV, telLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="mt-24 border-t border-hairline">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand block */}
        <div className="md:col-span-4">
          <div className="flex flex-col leading-none">
            <span className="font-display text-3xl text-maroon">Goa Yatra</span>
            <span className="mt-1 text-[10px] tracking-[0.28em] text-ink font-medium uppercase">
              TTG Travels
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm text-ink-muted leading-relaxed">
            Chauffeur and self-drive rentals across Goa — one number, every road.
            Tempo Traveller and Urbania for group runs.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink text-ink hover:bg-ink hover:text-bg transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.7} />
            </a>
            <span className="text-[11px] tracking-[0.22em] uppercase text-ink-muted">
              @goa.yatra.ttg
            </span>
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="overline">Contact</p>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-gold" strokeWidth={1.6} />
              <span className="text-ink" data-testid="footer-address">
                {BRAND.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-gold" strokeWidth={1.6} />
              <a
                href={telLink}
                data-testid="footer-phone"
                className="text-ink hover:text-maroon transition-colors"
              >
                {BRAND.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-gold" strokeWidth={1.6} />
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="footer-email"
                className="text-ink hover:text-maroon transition-colors"
              >
                {BRAND.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={14} className="text-gold" strokeWidth={1.6} />
              <span className="text-ink">{BRAND.hours}</span>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="md:col-span-4">
          <p className="overline">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  data-testid={`footer-nav-${n.short.toLowerCase()}`}
                  className="text-ink hover-underline"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-maroon-deep text-bg">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] tracking-[0.2em] uppercase">
          <span>© {year} Goa Yatra · TTG Travels</span>
          <span className="text-bg/70">Cars with drivers · Porvorim, Goa</span>
        </div>
      </div>
    </footer>
  );
}
