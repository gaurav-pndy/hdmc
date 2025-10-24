import React from "react";
import { useTranslation } from "react-i18next";
import { FiUsers } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import WaveBackground from "../WaveBackground";

const features = [
  {
    icon: <LuBuilding2 className="text-white text-xl" />,
    title: "aboutClinic.feature1.title",
    desc: "aboutClinic.feature1.desc",
  },
  {
    icon: <FiUsers className="text-white text-xl" />,
    title: "aboutClinic.feature2.title",
    desc: "aboutClinic.feature2.desc",
  },
  {
    icon: <SlBadge className="text-white text-xl" />,
    title: "aboutClinic.feature3.title",
    desc: "aboutClinic.feature3.desc",
  },
  {
    icon: <FaRegClock className="text-white text-xl" />,
    title: "aboutClinic.feature4.title",
    desc: "aboutClinic.feature4.desc",
  },
];

const stats = [
  { value: "aboutClinic.stat1.value", label: "aboutClinic.stat1.label" },
  { value: "aboutClinic.stat2.value", label: "aboutClinic.stat2.label" },
  { value: "aboutClinic.stat3.value", label: "aboutClinic.stat3.label" },
  { value: "aboutClinic.stat4.value", label: "aboutClinic.stat4.label" },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full py-16 ">
      <div className="max-w-[87rem] mx-auto w-full">
        {/* Top Section - Text + Image */}
        <section className="relative rounded-xl  mx-auto grid md:grid-cols-2 items-center overflow-hidden md:min-h-96">
          <WaveBackground
            stroke="rgba(251, 186, 189,"
            custStyle="md:w-1/2 h-[80%] left-0 top-0"
          />
          {/* Left - Text & Features */}
          <div className="text-left  w-full md:min-h-96  h-full z-30 p-6 pb-16 md:p-6 lg:pl-10 xl:pl-12 bg-gradient-to-t md:bg-gradient-to-l from-[#c6bf78] to-[#5b6838]">
            <h2 className="text-white text-4xl font-bold mb-4">
              {t("aboutClinic.title")}
            </h2>
            <p className="text-lg text-white mb-4 max-w-3xl">
              {t("aboutClinic.subtitle")}
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-lg shrink-0 mt-1">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white leading-snug mb-1">
                      {t(f.title)}
                    </div>
                    <div className="text-gray-200 text-sm leading-tight">
                      {t(f.desc)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats - 4 Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl hover:scale-105  hover:shadow-lg cursor-pointer  transition-all duration-300 p-4 flex flex-col items-center text-center"
                >
                  <span className="text-brand1 text-2xl md:text-3xl font-bold ">
                    {t(s.value)}
                  </span>
                  <span className="text-brand1/80 text-sm md:text-base font-normal leading-5">
                    {t(s.label)}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-brand1 text-white font-semibold rounded-lg px-8 py-3 shadow hover:bg-brand5/90 cursor-pointer transition-all duration-300 w-fit">
              {t("aboutClinic.moreBtn")}
            </button>
          </div>

          {/* Right - Image */}
          <div className="w-full   h-full z-30 -mt-[2px] md:-mt-0">
            <div className="relative w-full  h-full">
              <img
                src="/about-color.jpg" // Replace with your image
                alt="About Clinic"
                className="max-w-2xl w-full md:min-h-96  h-full object-cover md:rounded-tr-2xl md:rounded-br-2xl"
              />
              <div
                className={`absolute   inset-0 bg-gradient-to-b via-20%  md:bg-gradient-to-r from-[#c6bf78] via-[#c6bf78]/40 to-transparent  `}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
