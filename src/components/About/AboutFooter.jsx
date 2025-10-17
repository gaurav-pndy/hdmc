import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AboutFooter = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand5 to-brand1">
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow">
        {t("about.footer.title")}
      </h2>
      <p className="text-white/90 text-lg lg:text-xl font-medium mb-9">
        {t("about.footer.subtitle")}
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a
          href="tel:+74951234567"
          className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl  text-brand1  font-semibold hover:bg-transparent border border-white transition-all  duration-300 cursor-pointer hover:text-white"
        >
          <FaPhoneAlt className="text-2xl text-brand4" />
          <span>+7 (495) 123-45-67</span>
        </a>
        <a
          href="mailto:info@healthdirect.ru"
          className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow text-brand1  font-semibold hover:bg-transparent border border-white transition-all  duration-300 cursor-pointer hover:text-white"
        >
          <FaEnvelope className="text-2xl text-brand4" />
          <span>info@healthdirect.ru</span>
        </a>
      </div>
    </section>
  );
};

export default AboutFooter;
