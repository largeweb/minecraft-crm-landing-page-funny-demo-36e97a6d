// app/components/DemoSection.tsx

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  demoImage?: string;
  demoVideo?: string;
}

const DemoSection: React.FC<Props> = ({ demoImage, demoVideo }) => {
  const breathingAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="py-12 bg-green-100 border-t border-b border-green-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-8">
          Witness the Diamond-Level Organization!
        </h2>
        {demoImage && (
          <motion.div
            variants={breathingAnimation}
            animate="scale"
            className="mx-auto max-w-md"
          >
            <Image
              src={demoImage}
              alt="Minecraft CRM Demo"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        )}
        {demoVideo && (
          <motion.div
            variants={breathingAnimation}
            animate="scale"
            className="mx-auto max-w-md"
          >
            <video src={demoVideo} autoPlay loop muted className="rounded-lg shadow-xl"></video>
          </motion.div>
        )}
        {!demoImage && !demoVideo && (
          <p className="text-gray-700">
            (Demo content not available. Imagine something blocky and
            amazing!)
          </p>
        )}
      </div>
    </div>
  );
};

return DemoSection;