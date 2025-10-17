import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    t("earlyDetection.hero.benefit1"),
    t("earlyDetection.hero.benefit2"),
    t("earlyDetection.hero.benefit3"),
  ];

  // Cycle through features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="w-full flex flex-col justify-center items-center text-center relative py-18 px-4 bg-gradient-to-br from-brand5 to-brand1 overflow-hidden">
      {/* Background watermark */}
      <img
        src="/hero1.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-[45rem] left-1/2 top-1/2 -translate-1/2 object-cover object-center pointer-events-none opacity-10 select-none z-0"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="flex items-center gap-2 px-6 py-2 text-base rounded-full bg-brand3 border border-brand5 text-white shadow">
            {t("earlyDetection.hero.programBadge")}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-6">
          {t("earlyDetection.hero.title")}
        </h1>

        {/* ✨ Animated feature slideshow */}
        <div className="relative h-8 w-full  text-center md:h-10 mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute  mx-auto  w-full text-center text-pink-200 drop-shadow-lg drop-shadow-black/30 text-xl md:text-3xl font-semibold"
            >
              {features[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtitle + Description */}
        <div className="text-white text-lg md:text-2xl font-medium mb-2 drop-shadow">
          {t("earlyDetection.hero.subtitle")}
        </div>
        <div className="text-white/90 text-lg font-normal max-w-2xl mx-auto mb-10 drop-shadow">
          {t("earlyDetection.hero.description")}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center">
          <button className="bg-white text-brand1 font-semibold px-8 py-3 text-lg rounded-lg hover:bg-transparent hover:text-white transition shadow cursor-pointer border border-white">
            {t("earlyDetection.hero.programButton")}
          </button>
          <button className="bg-transparent text-white font-semibold px-8 py-3 text-lg rounded-lg hover:bg-white hover:text-brand1 transition shadow cursor-pointer border border-white">
            {t("earlyDetection.hero.moreButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
