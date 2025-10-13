import React from "react";
import { useTranslation } from "react-i18next";
import { FiUsers } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";

const features = [
  {
    icon: <LuBuilding2 className="text-brand1 text-xl" />,
    title: "aboutClinic.feature1.title",
    desc: "aboutClinic.feature1.desc",
  },
  {
    icon: <FiUsers className="text-brand1 text-xl" />,
    title: "aboutClinic.feature2.title",
    desc: "aboutClinic.feature2.desc",
  },
  {
    icon: <SlBadge className="text-brand1 text-xl" />,
    title: "aboutClinic.feature3.title",
    desc: "aboutClinic.feature3.desc",
  },
  {
    icon: <FaRegClock className="text-brand1 text-xl" />,
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
      <div className="max-w-[87rem] bg-gradient-to-br from-brand1/30  to-brand2/30 mx-auto px-4 md:p-10 rounded-xl w-full">
        {/* Top Section - Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text & Features */}
          <div>
            <h2 className="text-brand1 text-4xl font-bold mb-6">
              {t("aboutClinic.title")}
            </h2>
            <p className="text-lg text-brand1/80 mb-8 max-w-3xl">
              {t("aboutClinic.subtitle")}
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-brand4 rounded-lg shrink-0 mt-1">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-medium text-black leading-snug mb-1">
                      {t(f.title)}
                    </div>
                    <div className="text-brand1/80 text-sm leading-tight">
                      {t(f.desc)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats - 4 Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl hover:scale-105  hover:shadow-lg cursor-pointer  transition-all duration-300 p-4 flex flex-col items-center text-center"
                >
                  <span className="text-brand1 text-2xl md:text-3xl font-bold mb-1">
                    {t(s.value)}
                  </span>
                  <span className="text-brand1/80 text-sm md:text-base font-normal">
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
          <div className="flex justify-center lg:justify-end">
            <img
              src="/about.jpg" // Replace with your image
              alt="About Clinic"
              className="w-full max-w-lg  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
