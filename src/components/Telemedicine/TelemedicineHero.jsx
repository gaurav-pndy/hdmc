import React from "react";
import { useTranslation } from "react-i18next";
import { FaUserMd, FaStethoscope, FaClock, FaArrowRight } from "react-icons/fa";

const TelemedicineHero = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col justify-center items-center text-center relative py-18 px-4 bg-gradient-to-br from-brand5 to-brand1 overflow-hidden">
      {/* Top pill label */}
      <div className="flex justify-center">
        <span className="flex items-center gap-2 px-6 py-2 text-base rounded-full bg-brand3 border border-brand5 text-white shadow">
          {t("telemedicine.hero.pill")}
        </span>
      </div>
      {/* Main Heading */}
      <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-6">
        {t("telemedicine.hero.titleLine1")}
        <br />
        <span>{t("telemedicine.hero.titleLine2")}</span>
      </h1>
      {/* Subtitle */}
      <p className="text-white text-lg md:text-2xl font-medium mb-6 drop-shadow">
        {t("telemedicine.hero.subtitle")}
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
        <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-white text-brand1 text-lg font-medium hover:text-white hover:bg-transparent cursor-pointer transition-all duration-300 border border-white">
          {t("telemedicine.hero.ctaConsult")}
          <FaArrowRight className="ml-2" />
        </button>
        <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg border border-white text-white text-lg font-medium bg-transparent hover:bg-white hover:text-brand1 transition-all duration-300 cursor-pointer">
          {t("telemedicine.hero.ctaMore")}
        </button>
      </div>
      {/* Stats */}
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-2">
        <div className="flex items-center gap-2 text-white/90 text-lg font-semibold">
          <FaUserMd className="text-white text-2xl" />
          50+ {t("telemedicine.hero.stats.experts")}
        </div>
        <div className="flex items-center gap-2 text-white/90 text-lg font-semibold">
          <FaStethoscope className="text-white text-2xl" />
          15+ {t("telemedicine.hero.stats.specialties")}
        </div>
        <div className="flex items-center gap-2 text-white/90 text-lg font-semibold">
          <FaClock className="text-white text-2xl" />
          {t("telemedicine.hero.stats.time")}
        </div>
      </div>
    </section>
  );
};

export default TelemedicineHero;
