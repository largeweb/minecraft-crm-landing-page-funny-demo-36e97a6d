// app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import DemoSection from "./components/DemoSection";
import FeatureHighlight from "./components/FeatureHighlight";
import Footer from "./components/Footer";

// Mock data for feature highlights
const features = [
  {
    title: "Player Management",
    description:
      "Ban griefers with a single click! (Disclaimer: May or may not involve a giant TNT explosion.)",
    icon: "diamond_sword_icon.png",
  },
  {
    title: "Activity Tracking",
    description: "Know who's mining all your diamonds! (Probably Steve.)",
    icon: "pickaxe_icon.png",
  },
  {
    title: "Engagement Boosting",
    description:
      "Turn casual players into loyal subscribers! (Guaranteed to increase your server's awesomeness by at least 50%).",
    icon: "chest_icon.png",
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white font-pixel">
      <motion.div
        className="container mx-auto py-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <HeroSection />
        </motion.div>

        {/* Demo Section */}
        <motion.div variants={itemVariants}>
          <DemoSection demoImage="/demo.png" />
        </motion.div>

        {/* Feature Highlights Section */}
        <motion.section
          className="mt-12"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Diamond-Level Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureHighlight
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={itemVariants}>
          <Footer />
        </motion.footer>
      </motion.div>
    </div>
  );
}