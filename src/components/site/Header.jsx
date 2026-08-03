import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
          ? "py-3 bg-[#FAFAF8]/95 backdrop-blur-md shadow-soft border-b border-[#E8E4DC]"
          : "py-4 bg-[#FAFAF8]/85 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        {/* Brand Mark */}
        <Link to="/" className="group flex items-center gap-2.5 sm:gap-3" data-testid="brand-mark">
          <LogoIcon variant="icon" className="h-10 sm:h-12 md:h-16 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl sm:text-2xl md:text-[28px] font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#C49A3C] transition-colors">
              Goa Yatra
            </span>
            <span className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C49A3C] font-bold uppercase font-body">
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
                `relative py-1 text-base font-medium transition-colors duration-200 ${
                  isActive ? "text-[#C49A3C] font-bold" : "text-[#1A1A1A] hover:text-[#C49A3C]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#C49A3C] rounded-full"
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
          <CallButton label="Call Us" size="md" testId="header-call" className="btn-secondary" />
          <WhatsAppButton label="WhatsApp" size="md" testId="header-whatsapp" className="btn-primary" />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-btn border border-[#E8E4DC] bg-white text-[#1A1A1A] hover:bg-[#F5F3EE] transition-colors shadow-soft"
        >
          {open ? <X size={22} className="text-[#1A1A1A]" /> : <Menu size={22} className="text-[#1A1A1A]" />}
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
            className="lg:hidden bg-[#FAFAF8] border-t border-[#E8E4DC] overflow-hidden shadow-large"
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
                      isActive ? "text-[#C49A3C] font-bold pl-3 border-l-4 border-[#C49A3C]" : "text-[#1A1A1A] hover:text-[#C49A3C]"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-[#E8E4DC] flex flex-col sm:flex-row gap-3">
                <CallButton label="Call now" testId="mobile-header-call" className="btn-secondary w-full justify-center" />
                <WhatsAppButton label="WhatsApp" testId="mobile-header-whatsapp" className="btn-primary w-full justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


