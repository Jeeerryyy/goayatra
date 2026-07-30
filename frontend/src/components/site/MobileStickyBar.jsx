import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./CTAButtons";
import { telLink, waLink } from "@/lib/site";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="mobile-sticky-bar"
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 border-t border-hairline">
        <a
          href={telLink}
          data-testid="sticky-call"
          className="flex items-center justify-center gap-2 bg-maroon text-bg py-4 text-sm font-medium tracking-wide"
        >
          <Phone size={15} strokeWidth={1.7} />
          Call Now
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="sticky-whatsapp"
          className="flex items-center justify-center gap-2 bg-whatsapp text-[#0b3d1c] py-4 text-sm font-medium tracking-wide"
        >
          <WhatsAppIcon size={15} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
