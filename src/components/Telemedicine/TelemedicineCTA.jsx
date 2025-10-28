import React from "react";
import { useTranslation } from "react-i18next";
import { FaClock, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import WaveBackground from "../WaveBackground";

const TelemedicineCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[87rem] my-16 text-center mx-auto px-4 ">
      <div className="relative rounded-xl  mx-auto grid md:grid-cols-2 items-center overflow-hidden md:min-h-96">
        <WaveBackground
          stroke="rgba(151, 186, 189,"
          custStyle="md:w-1/2 h-1/2 right-0 bottom-0"
        />
        <div className="w-full   h-full z-30 -mb-[1px] md:-mb-0">
          <div className="relative w-full  h-full">
            {" "}
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2375959511/display_1500/stock-photo-search-magnifying-idea-find-light-bulb-magnifier-research-analysis-exploration-magnify-2375959511.jpg"
              alt="Membership illustration"
              className="max-w-2xl w-full md:min-h-80 max-h-48 md:max-h-full h-full object-cover md:rounded-tr-2xl md:rounded-br-2xl"
            />
            <div
              className={`absolute   inset-0 bg-gradient-to-t via-30%  md:bg-gradient-to-l from-[#94bfe9] via-[#94bfe9]/40 to-transparent  `}
            ></div>
          </div>
        </div>
        <div className="text-left md:text-right w-full md:min-h-96  h-full  p-6  md:p-6 lg:pr-10 xl:pr-12 bg-gradient-to-t md:bg-gradient-to-l from-[#024879] flex flex-col justify-center to-[#94bfe9]">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow">
            {t("telemedicine.cta.title")}
          </h2>
          <p className="text-white/90 text-lg lg:text-xl font-medium mb-9">
            {t("telemedicine.cta.subtitle")}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl  text-brand1  font-semibold hover:bg-transparent border border-white transition-all  duration-300 cursor-pointer hover:text-white">
              {t("telemedicine.cta.cta1")}
              <FaArrowRight className="ml-2" />
            </button>
            <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow text-brand1  font-semibold hover:bg-transparent border border-white transition-all  duration-300 cursor-pointer hover:text-white">
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
        </div>
      </div>
    </section>
  );
};

export default TelemedicineCTA;
