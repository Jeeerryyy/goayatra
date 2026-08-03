import { motion } from "framer-motion";
import { CallButton, WhatsAppButton } from "./CTAButtons";
import { ease } from "@/lib/motion";
import { BRAND } from "@/lib/site";
import { Sparkles, MapPin, Sun, ShieldCheck, Waves, Compass } from "lucide-react";
import ThreeDBackground from "./ThreeDBackground";
import ThreeDTiltCard from "./ThreeDTiltCard";
import OceanWave3DAnimation from "./OceanWave3DAnimation";
import Floating3DElements from "./Floating3DElements";

export default function Hero() {
  return (
    <section
      data-testid="hero"
      className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden min-h-[60vh] flex items-center justify-center text-center bg-[#F5F3EE] border-b border-[#E8E4DC]"
    >
      {/* 3D Moving Ocean Waves Animation Layer */}
      <OceanWave3DAnimation className="opacity-95" />

      {/* Floating 3D Interactive Ambient Elements */}
      <Floating3DElements />

      {/* 3D Interactive Node/Particle Canvas */}
      <ThreeDBackground className="opacity-80 z-0" />

      {/* Crisp Sunset Beach Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Goa Sunset Beach Background"
          className="w-full h-full object-cover opacity-65 filter contrast-[1.08]"
        />
        {/* Crisp subtle overlay for perfect text legibility without obscuring the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/50 via-[#F5F3EE]/35 to-[#FAFAF8]/75" />
      </div>

      {/* Direct Content Overlay */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-10 relative z-10 flex flex-col items-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-[#1A1A1A] text-3xl sm:text-5xl md:text-[54px] lg:text-[60px] font-bold leading-[1.1] sm:leading-[1.08] tracking-tight max-w-4xl"
        >
          Your Beach &amp; Road Trip <br className="hidden sm:inline" />
          Starts Here in <span className="text-[#C49A3C] italic">Goa</span>
        </motion.h1>

        {/* Body Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mt-3 sm:mt-4 max-w-2xl text-base md:text-lg text-[#4A4A4A] font-body leading-relaxed"
        >
          Explore Goa with ease. Whether you need a self-drive car for coastal drives, a seamless airport transfer, or a Tempo Traveller for group travel, we deliver refined, transparent service.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <WhatsAppButton
            label="Book Your Ride"
            size="md"
            message="Hi Goa Yatra! I'd like to book a car."
            testId="hero-whatsapp"
            className="btn-primary text-sm sm:text-base font-semibold px-6 py-3 rounded-xl w-full sm:w-auto justify-center"
          />
          <CallButton
            label="Call +91 7249216623"
            size="md"
            testId="hero-call"
            className="btn-secondary text-sm sm:text-base font-semibold px-6 py-3 rounded-xl w-full sm:w-auto justify-center"
          />
        </motion.div>

        {/* Quick Value Props Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          className="mt-8 w-full max-w-2xl"
        >
          <ThreeDTiltCard maxTilt={6} scale={1.03} className="rounded-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full text-[#1A1A1A] font-body gap-4 bg-white/90 backdrop-blur-md p-5 rounded-[20px] shadow-large border border-[#E8E4DC]">
              <div className="flex flex-col items-center">
                <span className="font-heading font-extrabold text-2xl md:text-3xl text-[#1A1A1A]">24 / 7</span>
                <span className="text-[11px] text-[#6B6B6B] font-semibold mt-0.5 uppercase tracking-wider">Airport Transfers</span>
              </div>
              <div className="flex flex-col items-center border-t sm:border-t-0 sm:border-l border-[#E8E4DC] pt-3 sm:pt-0">
                <span className="font-heading font-extrabold text-2xl md:text-3xl text-[#C49A3C]">100%</span>
                <span className="text-[11px] text-[#6B6B6B] font-semibold mt-0.5 uppercase tracking-wider">Verified Fleet</span>
              </div>
              <div className="flex flex-col items-center border-t sm:border-t-0 sm:border-l border-[#E8E4DC] pt-3 sm:pt-0">
                <span className="font-heading font-extrabold text-2xl md:text-3xl text-[#1A1A1A]">0</span>
                <span className="text-[11px] text-[#6B6B6B] font-semibold mt-0.5 uppercase tracking-wider">Hidden Fees</span>
              </div>
            </div>
          </ThreeDTiltCard>
        </motion.div>
      </div>
    </section>
  );
}






