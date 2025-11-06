import React from "react";
import { useTranslation } from "react-i18next";
import { FiUsers } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { FaRegClock, FaStethoscope } from "react-icons/fa";
import WaveBackground from "../WaveBackground";
import { Link } from "react-router-dom";
import { FaUsersLine } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

const features = [
  // {
  //   icon: <LuBuilding2 className="text-white text-xl" />,
  //   title: "aboutClinic.feature1.title",
  //   desc: "aboutClinic.feature1.desc",
  // },
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
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "aboutClinic.feature4.title",
    desc: "aboutClinic.feature4.desc",
  },
  {
    icon: <FaRegClock className="text-white text-xl" />,
    title: "aboutClinic.feature5.title",
    desc: "aboutClinic.feature5.desc",
  },
];

const stats = [
  { value: "aboutClinic.stat1.value", label: "aboutClinic.stat1.label" },
  { value: "aboutClinic.stat2.value", label: "aboutClinic.stat2.label" },
  {
    label: "aboutClinic.stat3.label",
    icon: <FaUsersLine className="text-4xl text-brand1 mb-1" />,
  },
  {
    label: "aboutClinic.stat4.label",
    icon: <GiMedicines className="text-4xl text-brand1 mb-1" />,
  },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full py-16 ">
      <div className="max-w-[87rem] relative bg-gradient-to-r from-gray-300  to-gray-100 mx-auto px-4 md:p-10 rounded-xl w-full">
        <WaveBackground
          stroke="rgba(340, 340, 340,"
          custStyle="md:w-1/2 h-1/2 left-0 top-0"
        />
        {/* Top Section - Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text & Features */}
          <div>
            <h2 className="text-brand1 text-4xl font-bold relative z-40 mb-6">
              {t("aboutClinic.title")}
            </h2>
            <p className="text-lg text-brand1/80 mb-8 relative z-40 max-w-3xl">
              {t("aboutClinic.subtitle")}
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-br z-40 from-[#125e84] to-[#33babd] rounded-lg shrink-0 mt-1">
                    {f.icon}
                  </div>
                  <div>
                    {f.title && (
                      <div className="font-medium z-40 text-black leading-5 mb-1">
                        {t(f.title)}
                      </div>
                    )}

                    <div className="text-brand1/80 z-40 text-sm leading-tight">
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
                  className="bg-white rounded-xl hover:scale-105  hover:shadow-lg cursor-pointer z-40  transition-all duration-300 p-4 flex flex-col items-center justify-center text-center"
                >
                  {s.value && (
                    <span className="text-brand1 text-2xl md:text-3xl font-bold mb-1">
                      {t(s.value)}
                    </span>
                  )}
                  {
                    s.icon &&
                      // <span className="text-brand1 text-2xl md:text-3xl font-bold mb-1">
                      s.icon
                    // </span>
                  }

                  <span className="text-brand1/80 leading-5 text-sm md:text-base font-normal">
                    {t(s.label)}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              to={"/about"}
              className="bg-brand1 relative z-40 text-white font-semibold rounded-lg px-8 py-3 shadow hover:bg-brand5/90 cursor-pointer transition-all duration-300 w-fit"
            >
              {t("moreBtn")}
            </Link>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/about3.png" // Replace with your image
              alt="About Clinic"
              className="w-full max-w-2xl  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
