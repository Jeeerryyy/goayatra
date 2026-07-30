import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { NAV } from "@/lib/site";
import { CallButton, WhatsAppButton } from "./CTAButtons";
import LogoIcon from "./LogoIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-bg/95 backdrop-blur-md shadow-sm"
          : "py-5 bg-bg/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        {/* Brand Mark */}
        <Link to="/" className="group flex items-center gap-3" data-testid="brand-mark">
          <LogoIcon className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl md:text-[26px] text-maroon tracking-tight transition-opacity duration-200 group-hover:opacity-90">
              Goa Yatra
            </span>
            <span className="mt-1 text-[9px] md:text-[10px] tracking-[0.3em] text-ink-muted font-medium uppercase">
              TTG Travels
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              data-testid={`nav-${n.short.toLowerCase()}`}
              className={({ isActive }) =>
                `relative py-1 text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isActive ? "text-maroon font-semibold" : "text-ink hover:text-maroon"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-maroon rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <CallButton label="Call" size="md" testId="header-call" />
          <WhatsAppButton label="WhatsApp" size="md" testId="header-whatsapp" />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline bg-bg hover:bg-gold/10 transition-colors"
        >
          {open ? <X size={20} className="text-ink" /> : <Menu size={20} className="text-ink" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-bg border-t border-hairline overflow-hidden shadow-lg"
            data-testid="mobile-nav-panel"
          >
            <div className="mx-auto max-w-[1440px] px-6 py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  data-testid={`mobile-nav-${n.short.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-display text-2xl leading-tight transition-colors ${
                      isActive ? "text-maroon font-medium pl-2 border-l-2 border-maroon" : "text-ink hover:text-maroon"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-hairline flex gap-3">
                <CallButton label="Call now" testId="mobile-header-call" className="w-full justify-center" />
                <WhatsAppButton label="WhatsApp" testId="mobile-header-whatsapp" className="w-full justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
