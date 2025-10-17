import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegHospital } from "react-icons/fa";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-[40vh] py-20 md:py-24 flex flex-col items-center justify-center text-center relative bg-gradient-to-br from-brand5 to-brand1">
      <FaRegHospital className="text-white text-5xl mb-6 drop-shadow-lg" />
      <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-4 ">
        {t("about.hero.title")}
      </h1>
      <p className="text-white text-lg md:text-2xl font-medium mb-2 drop-shadow">
        {t("about.hero.subtitle")}
      </p>
    </section>
  );
};

export default AboutHero;
