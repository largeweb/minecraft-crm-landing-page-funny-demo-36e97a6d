// app/components/FeatureHighlight.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

interface Props {
  title: string;
  description: string;
  icon?: string; // Path to the icon (e.g., "/diamond_sword_icon.png")
}

const FeatureHighlight: React.FC<Props> = ({ title, description, icon }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-start space-x-4 p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {icon && (
        <div className="w-16 h-16 relative mb-4 md:mb-0">
          <Image
            src={icon}
            alt={`${title} Icon`}
            width={64}
            height={64}
            className="object-contain"
            priority // Consider using next/image optimization
          />
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

return FeatureHighlight;