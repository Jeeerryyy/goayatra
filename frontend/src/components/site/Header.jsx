import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { CallButton, WhatsAppButton } from "./CTAButtons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-bg transition-[padding] duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex flex-col leading-none" data-testid="brand-mark">
          <span className="font-display text-[22px] md:text-[26px] text-maroon tracking-tight">
            Goa Yatra
          </span>
          <span className="mt-0.5 text-[9px] md:text-[10px] tracking-[0.28em] text-ink font-medium uppercase">
            TTG Travels
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              data-testid={`nav-${n.short.toLowerCase()}`}
              className={({ isActive }) =>
                `hover-underline text-[13px] font-medium tracking-wide ${
                  isActive ? "text-maroon" : "text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <span data-active={isActive ? "true" : "false"}>{n.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <CallButton label="Call" size="md" testId="header-call" />
          <WhatsAppButton label="WhatsApp" size="md" testId="header-whatsapp" />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-ink"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Hairline gold rule under nav — signature device */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mt-4 h-px w-full bg-gold/60" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-bg border-t border-hairline"
            data-testid="mobile-nav-panel"
          >
            <div className="mx-auto max-w-[1440px] px-6 py-6 flex flex-col gap-5">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  data-testid={`mobile-nav-${n.short.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-display text-3xl leading-tight ${
                      isActive ? "text-maroon" : "text-ink"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <div className="mt-4 flex gap-3">
                <CallButton label="Call now" testId="mobile-header-call" />
                <WhatsAppButton label="WhatsApp" testId="mobile-header-whatsapp" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
