// app/components/HeroSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className="relative py-16 bg-blue-100 min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image (replace with your Minecraft-themed image) */}
      <div
        className="absolute inset-0 bg-[url('/demo.png')] bg-cover bg-center opacity-30"
      />

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Minecraft CRM:
          <br />
          Manage Your Server Like a Diamond Baron!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Tired of creepers messing with your vibe? Get diamond-level
          organization! (Just kidding... sort of).
        </motion.p>
      </div>
    </div>
  );
};

return HeroSection;