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
import { FaChild } from "react-icons/fa6";
import { RiSurgicalMaskFill } from "react-icons/ri";

const ExpertiseCenter = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const EXPERTISE_LIST = [
    {
      key: "oncogynecology",
      label: t("expertise.oncogynecology.title"),
      icon: <FaHeart className="text-brand4 text-2xl" />,
    },
    {
      key: "earlydiagnosis",
      label: t("expertise.earlydiagnosis.title"),
      icon: <FaSearch className="text-brand4 text-2xl" />,
    },

    {
      key: "traumatology",
      label: t("expertise.traumatology.title"),
      icon: <FaWrench className="text-brand4 text-2xl" />,
    },
    {
      key: "surgery",
      label: t("expertise.surgery.title"),
      icon: <FaUserMd className="text-brand4 text-2xl" />,
    },
    {
      key: "oncomammology",
      label: t("expertise.oncomammoology.title"),
      icon: <FaNotesMedical className="text-brand4 text-2xl" />,
    },
    {
      key: "oncoplastic",
      label: t("expertise.oncoplastic.title"),
      icon: <FaCut className="text-brand4 text-2xl" />,
    },
    {
      key: "antitumortherapy",
      label: t("expertise.antitumortherapy.title"),
      icon: <FaFlask className="text-brand4 text-2xl" />,
    },
    {
      key: "radiotherapy",
      label: t("expertise.radiotherapy.title"),
      icon: <FaBolt className="text-brand4 text-2xl" />,
    },

    {
      key: "neurooncology",
      label: t("expertise.neurooncology.title"),
      icon: <FaBrain className="text-brand4 text-2xl" />,
    },
    {
      key: "gynecology",
      label: t("expertise.gynecology.title"),
      icon: <FaStethoscope className="text-brand4 text-2xl" />,
    },
    {
      key: "oncoorthopedics",
      label: t("expertise.oncoorthopedics.title"),
      icon: <FaChild className="text-brand4 text-2xl" />,
    },
    {
      key: "oncocoloproctology",
      label: t("expertise.oncocoloproctology.title"),
      icon: <RiSurgicalMaskFill className="text-brand4 text-2xl" />,
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
            onClick={() => navigate(`/center-of-expertise/${item.key}`)}
            className="flex items-center gap-4 bg-white border border-brand4/10 rounded-2xl shadow-md hover:shadow-lg px-6 py-5 text-left transition ring-brand4/20 hover:ring-2 cursor-pointer"
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
