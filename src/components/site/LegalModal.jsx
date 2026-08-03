import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download, ShieldCheck, Lock } from "lucide-react";

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const isNDA = type === "nda";

  const title = isNDA
    ? "Website Non-Disclosure Agreement (NDA)"
    : "Website Standard Terms & Conditions";

  const fileUrl = isNDA
    ? "/documents/Website_Non_Disclosure_Agreement.Doc"
    : "/documents/Website_Standard_Terms_And_Conditions.Docx";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white text-[#1A1A1A] rounded-[24px] shadow-2xl border border-[#E8E4DC] overflow-hidden my-8"
        >
          {/* Modal Header */}
          <div className="bg-[#1A1A1A] text-white p-6 md:p-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#C49A3C] flex items-center justify-center text-white shrink-0">
                {isNDA ? <Lock size={20} /> : <ShieldCheck size={20} />}
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#E8D5A3]">
                  Official Legal Document
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  {title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto font-body text-sm text-[#4A4A4A] leading-relaxed space-y-4">
            {isNDA ? (
              <>
                <div className="p-4 bg-[#FAFAF8] border border-[#E8E4DC] rounded-xl font-semibold text-[#1A1A1A]">
                  THIS NON-DISCLOSURE AGREEMENT (&ldquo;Agreement&rdquo;) governs confidential disclosures between the Website Owner (Goa Yatra — TTG Travels) and service vendors/visitors.
                </div>

                <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-4">1. Confidential Information</h4>
                <p>
                  &ldquo;Confidential Information&rdquo; shall mean any invention, product, process, apparatus, design, business method, operating technique, customer and supplier information, sales and product plans, source code, data, reports, component parts, or proprietary materials related to the website and business.
                </p>

                <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-4">2. Non-Disclosure Obligations</h4>
                <p>
                  The receiving party agrees to maintain strict confidentiality of all disclosed information and shall not reproduce, distribute, publish, or disclose such information to third parties without prior express written consent.
                </p>

                <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-4">3. Protection of Intellectual Assets</h4>
                <p>
                  All drawings, disclosures, designs, code, calculations, and operational systems shall remain the sole intellectual property of the Website Owner and licensing partners.
                </p>
              </>
            ) : (
              <>
                <div className="p-4 bg-[#FAFAF8] border border-[#E8E4DC] rounded-xl font-semibold text-[#1A1A1A]">
                  THESE WEBSITE STANDARD TERMS AND CONDITIONS govern your use of this website (Goa Yatra — TTG Travels), including all pages contained herein.
                </div>

                <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-4">1. Introduction &amp; Acceptance</h4>
                <p>
                  By using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website if you have any objection to any of these terms.
                </p>

                <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-4">2. Intellectual Property Rights</h4>
                <p>
                  Other than content you own, Goa Yatra — TTG Travels and/or its licensors own all rights to the intellectual property and material contained on this Website, and all such rights are reserved.
                </p>

                <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-4">3. Use Restrictions</h4>
                <p>
                  You are restricted from publishing website material in any media, selling or sublicensing website material, engaging in data mining or harvesting, or using this website in any manner that causes harm or impacts user access.
                </p>

                <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-4">4. Limitation of Liability</h4>
                <p>
                  In no event shall Goa Yatra, nor any of its officers or employees, be liable for anything arising out of or in any way connected with your use of this Website.
                </p>
              </>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="bg-[#FAFAF8] p-4 md:p-6 border-t border-[#E8E4DC] flex items-center justify-between gap-4">
            <span className="text-xs font-semibold text-[#6B6B6B] flex items-center gap-1.5">
              <Lock size={13} className="text-[#C49A3C]" />
              <span>Protected View Only · Confidential</span>
            </span>
            <button
              onClick={onClose}
              className="btn-primary text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl text-center"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
