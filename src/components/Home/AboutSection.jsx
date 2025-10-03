import React from "react";
import { useTranslation } from "react-i18next";
import { FaCity, FaCheckCircle, FaUserMd, FaRegClock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

const features = [
  {
    icon: <LuBuilding2 className="text-brand4 text-xl" />,
    title: "aboutClinic.feature1.title",
    desc: "aboutClinic.feature1.desc",
  },
  {
    icon: <FiUsers className="text-brand5 text-xl" />,
    title: "aboutClinic.feature2.title",
    desc: "aboutClinic.feature2.desc",
  },
  {
    icon: <SlBadge className="text-brand4 text-xl" />,
    title: "aboutClinic.feature3.title",
    desc: "aboutClinic.feature3.desc",
  },
  {
    icon: <FaRegClock className="text-brand4 text-xl" />,
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
    <section className="w-full bg-[#fbfbfc] py-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full max-w-[87rem] px-4 w-full mx-auto">
        <div className="">
          <div className="">
            <h2 className="text-brand1 text-4xl font-bold mb-6">
              {t("aboutClinic.title")}
            </h2>
            <p className="text-lg text-brand1/80 mb-8 max-w-3xl">
              {t("aboutClinic.subtitle")}
            </p>

            {/* Features 2x2 grid */}
            <div className="flex flex-col gap-5 flex-1 ">
              <div className="grid md:grid-cols-2 gap-6 ">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 ">
                    <div className="flex h-10 w-10 items-center justify-center bg-brand4/10 rounded-lg shrink-0 mt-1">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-medium text-black  leading-snug mb-1">
                        {t(f.title)}
                      </div>
                      <div className="text-brand1/80 text-sm leading-tight">
                        {t(f.desc)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Button left aligned */}
              <button className="mt-5 bg-brand1 text-white font-semibold rounded-lg px-8 py-3 shadow hover:bg-brand5/90 cursor-pointer transition-all duration-300 w-fit text-center">
                {t("aboutClinic.moreBtn")}
              </button>
            </div>
          </div>
        </div>
        {/* Stats 2x2 grid */}
        <div className="h-full  grid grid-cols-2 gap-6 ">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl hover:scale-105 hover:bg-brand4/20 hover:shadow-lg cursor-pointer shadow-md transition-all duration-300 p-12 flex flex-col  "
            >
              <span className="text-brand1 text-3xl font-bold mb-2">
                {t(s.value)}
              </span>
              <span className="text-brand1/80  font-normal">{t(s.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
