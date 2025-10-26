import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaStethoscope,
  FaUserMd,
  FaFlask,
  FaBrain,
  FaMicroscope,
  FaSyringe,
  FaBolt,
  FaCut,
  FaWrench,
  FaSearch,
  FaNotesMedical,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ExpertiseCenter = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const EXPERTISE_LIST = [
    {
      key: "onco-gynecology",
      label: t("expertise.area1"),
      icon: <FaHeart className="text-brand4 text-2xl" />,
    },
    {
      key: "gynecology",
      label: t("expertise.area2"),
      icon: <FaStethoscope className="text-brand4 text-2xl" />,
    },
    {
      key: "traumatology",
      label: t("expertise.area3"),
      icon: <FaWrench className="text-brand4 text-2xl" />,
    },
    {
      key: "head-neck-surgery",
      label: t("expertise.area4"),
      icon: <FaUserMd className="text-brand4 text-2xl" />,
    },
    {
      key: "onco-mammology",
      label: t("expertise.area5"),
      icon: <FaNotesMedical className="text-brand4 text-2xl" />,
    },
    {
      key: "onco-plastic",
      label: t("expertise.area6"),
      icon: <FaCut className="text-brand4 text-2xl" />,
    },
    {
      key: "chemo-therapy",
      label: t("expertise.area7"),
      icon: <FaFlask className="text-brand4 text-2xl" />,
    },
    {
      key: "radiotherapy",
      label: t("expertise.area8"),
      icon: <FaBolt className="text-brand4 text-2xl" />,
    },
    {
      key: "early-diagnosis",
      label: t("expertise.area9"),
      icon: <FaSearch className="text-brand4 text-2xl" />,
    },
    {
      key: "neuro-oncology",
      label: t("expertise.area10"),
      icon: <FaBrain className="text-brand4 text-2xl" />,
    },
  ];

  return (
    <div className="bg-[#f6fcfd] min-h-screen ">
      {/* Hero / Title */}
      <section className="w-full flex flex-col justify-center items-center text-center relative py-18 px-4 bg-gradient-to-br from-brand5 to-brand1 overflow-hidden">
        <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-6">
          {t("expertise.title")}{" "}
        </h1>
        <div className="text-white text-lg md:text-2xl font-medium mb-2 drop-shadow">
          {t("expertise.subtitle")}
        </div>
      </section>
      {/* Cards grid */}
      <div className="max-w-[87rem] mx-auto px-4 py-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE_LIST.map((item) => (
          <button
            key={item.key}
            onClick={() => navigate(`/expertise/${item.key}`)}
            className="flex items-center gap-4 bg-white border border-brand4/10 rounded-2xl shadow-md hover:shadow-lg px-6 py-5 text-left transition ring-brand4/20 hover:ring-2"
          >
            <span className="bg-brand4/10 p-4 rounded-xl">{item.icon}</span>
            <span className="font-semibold text-brand1 text-lg">
              {item.label}
            </span>
            <FaArrowRight className="ml-auto text-brand4/60" />
          </button>
        ))}
      </div>
      {/* CTA block */}
      <div className="w-full bg-gradient-to-br from-brand5 to-brand1 py-12 text-center mt-10">
        <h3 className="text-white text-2xl md:text-4xl font-bold mb-4">
          {t("expertise.cta.title")}{" "}
        </h3>
        <div className="text-white/80 md:text-lg mb-5">
          {t("expertise.cta.subtitle")}{" "}
        </div>
        <button className="mb-1 px-7 py-3 rounded-xl bg-white/80 text-brand1 font-bold text-lg shadow hover:bg-white transition">
          {t("expertise.cta.btn")}
        </button>
      </div>
    </div>
  );
};

export default ExpertiseCenter;
