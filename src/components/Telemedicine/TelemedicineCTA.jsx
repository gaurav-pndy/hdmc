import React from "react";
import { useTranslation } from "react-i18next";
import { FaClock, FaShieldAlt, FaArrowRight } from "react-icons/fa";

const TelemedicineCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand5 to-brand1">
    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow">
        {t("telemedicine.cta.title")}
      </h2>
      <p className="text-white/90 text-lg lg:text-xl font-medium mb-9">
        {t("telemedicine.cta.subtitle")}
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <button  className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl  text-brand1  font-semibold hover:bg-transparent border border-white transition-all  duration-300 cursor-pointer hover:text-white">
          {t("telemedicine.cta.cta1")}
          <FaArrowRight className="ml-2" />
        </button>
        <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow text-brand1  font-semibold hover:bg-transparent border border-white transition-all  duration-300 cursor-pointer hover:text-white"
        >
          {t("telemedicine.cta.cta2")}
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-2">
        <div className="flex items-center gap-2 text-white  ">
          <FaClock className="text-white text-2xl" />
          {t("telemedicine.cta.feature1")}
        </div>
        <div className="flex items-center gap-2 text-white  ">
          <FaShieldAlt className="text-white text-2xl" />
          {t("telemedicine.cta.feature2")}
        </div>
      </div>
    </section>
  );
};

export default TelemedicineCTA;
