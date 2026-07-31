import { motion } from "framer-motion";
import { Sparkles, Sun, Waves, Compass, ShieldCheck, Anchor } from "lucide-react";

export default function Floating3DElements() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating 3D Badge 1: Top Left */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-28 left-[6%] hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-badge bg-white/85 backdrop-blur-md border border-[#F0DED2] shadow-large text-xs font-bold text-[#493129]"
      >
        <div className="h-7 w-7 rounded-full bg-[#8B597B]/15 text-[#8B597B] flex items-center justify-center">
          <Sun size={16} />
        </div>
        <span>Sunny Goa Drives</span>
      </motion.div>

      {/* Floating 3D Badge 2: Top Right */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [4, -4, 4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-32 right-[7%] hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-badge bg-white/85 backdrop-blur-md border border-[#F0DED2] shadow-large text-xs font-bold text-[#493129]"
      >
        <div className="h-7 w-7 rounded-full bg-[#8B597B]/15 text-[#8B597B] flex items-center justify-center">
          <Waves size={16} />
        </div>
        <span>Beach Coastlines</span>
      </motion.div>

      {/* Floating 3D Badge 3: Bottom Left */}
      <motion.div
        animate={{
          y: [6, -12, 6],
          rotate: [-2, 4, -2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-16 left-[8%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-badge bg-white/85 backdrop-blur-md border border-[#F0DED2] shadow-large text-xs font-bold text-[#493129]"
      >
        <div className="h-7 w-7 rounded-full bg-[#8B597B]/15 text-[#8B597B] flex items-center justify-center">
          <Compass size={16} />
        </div>
        <span>24/7 Road Assistance</span>
      </motion.div>

      {/* Floating 3D Badge 4: Bottom Right */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-20 right-[9%] hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-badge bg-white/85 backdrop-blur-md border border-[#F0DED2] shadow-large text-xs font-bold text-[#493129]"
      >
        <div className="h-7 w-7 rounded-full bg-[#8B597B]/15 text-[#8B597B] flex items-center justify-center">
          <Sparkles size={16} />
        </div>
        <span>Transparent Pricing</span>
      </motion.div>
    </div>
  );
}
