import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaUserMd, FaHeartbeat } from "react-icons/fa";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col justify-center items-center text-center relative py-18 px-4 bg-gradient-to-br from-brand5 to-brand1">
      {/* Soft watermark illustration */}
      <img
        src="/hero1.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-[45rem] left-1/2 top-1/2 -translate-1/2  object-cover object-center pointer-events-none opacity-10 select-none z-0"
      />

      {/* Content sits above the background */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Top badge */}
        <div className="flex justify-center ">
          <span className="flex items-center gap-2 px-6 py-2 text-base  rounded-full bg-brand3 border border-brand5 text-white shadow">
            {t("earlyDetection.hero.programBadge")}
          </span>
        </div>
        {/* Main title */}
        <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-4 ">
          {t("earlyDetection.hero.title")}
        </h1>
        <div className="text-white text-lg md:text-2xl font-medium mb-2 drop-shadow">
          {t("earlyDetection.hero.subtitle")}
        </div>
        <div className="text-white/90 text-lg font-normal max-w-2xl mx-auto mb-10 drop-shadow">
          {t("earlyDetection.hero.description")}
        </div>
        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
          <div className="flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-4 rounded-lg text-white text-lg  shadow">
            <FaCheckCircle className="text-2xl text-white" />
            {t("earlyDetection.hero.benefit1")}
          </div>
          <div className="flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-4 rounded-lg text-white text-lg  shadow">
            <FaUserMd className="text-2xl text-white" />
            {t("earlyDetection.hero.benefit2")}
          </div>
          <div className="flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-4 rounded-lg text-white text-lg  shadow">
            <FaHeartbeat className="text-2xl text-white" />
            {t("earlyDetection.hero.benefit3")}
          </div>
        </div>
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center">
          <button className="bg-white text-brand1  font-semibold px-8 py-3 text-lg rounded-lg hover:bg-transparent hover:text-white transition shadow cursor-pointer border border-white ">
            {t("earlyDetection.hero.programButton")}
          </button>
          <button className="bg-transparent text-white font-semibold px-8 py-3 text-lg rounded-lg hover:bg-white hover:text-brand1 transition shadow cursor-pointer border border-white ">
            {t("earlyDetection.hero.moreButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
