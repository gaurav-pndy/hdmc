import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../data/services";
import { BiChevronRight } from "react-icons/bi";

// Dummy video link (replace with your real one if you have)
const VIDEO_URL = "/chemo.mp4";

const ServiceDetailsExpertAssessment = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("about");

  const TABS = [
    { key: "about", label: t("services.tab1") },
    { key: "doctors", label: t("services.tab2") },
    { key: "reviews", label: t("services.tab3") },
    { key: "prices", label: t("services.tab4") },
  ];

  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  const navigate = useNavigate();

  const scrollToServices = () => {
    navigate("/"); // go to home
    setTimeout(() => {
      const el = document.querySelector("#services");
      if (el) {
        const yOffset = -100; // offset for top margin (adjust as needed)
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100); // delay to ensure home page has rendered
  };

  return (
    <div className="bg-[#f6fcfd] min-h-screen pb-16 mt-52 max-w-[87rem] mx-auto px-4">
      <div className="mb-4 text-brand1 flex gap-2 font-semibold items-center">
        {" "}
        <button
          onClick={scrollToServices}
          className="text-brand4 hover:underline font-normal cursor-pointer"
        >
          {t("services.services")}
        </button>
        <BiChevronRight className="text-xl" />
        {t(service.title)}
      </div>
      {/* HERO */}
      <section className=" rounded-xl mx-auto p-4 md:p-6 lg:p-10 xl:p-12 flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-brand5 to-brand1">
        {/* Left: Title and CTA */}
        <div className="flex-1 min-w-0">
          <h1 className="text-white text-4xl md:text-5xl  font-bold mb-6">
            {t(service.title)}
          </h1>
          <p className="text-white text-lg md:text-2xl  mb-6 drop-shadow">
            {service.subtitle && t(service.subtitle)}
          </p>
          <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-white text-brand1 text-lg font-medium hover:text-white hover:bg-transparent cursor-pointer transition-all duration-300 border border-white">
            {service.btn ? t(service.btn) : t("services.s1.btn")}
          </button>
        </div>
        {/* Right: Video */}
        {service.video && (
          <div className="flex-1 w-full max-w-lg">
            <div className="aspect-w-16 aspect-h-9 rounded-xl shadow-lg border-4 border-white overflow-hidden bg-black min-h-[230px]">
              <video autoPlay loop src="/chemo.mp4" className=" h-full"></video>
            </div>
          </div>
        )}
      </section>

      {/* TABS */}
      <nav className=" mx-auto flex gap-2 bg-[#e9f6f7] rounded-xl  py-1 my-10">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`flex-1 text-lg py-3 rounded-lg font-semibold transition ${
              activeTab === tab.key
                ? "bg-white shadow text-brand1"
                : "text-brand4 hover:bg-white/80"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* TAB PANES */}
      <div className=" mx-auto px-5">
        {/* О УСЛУГЕ */}
        {activeTab === "about" && (
          <div
            className="bg-white rounded-2xl shadow p-8 text-lg text-brand1/90"
            dangerouslySetInnerHTML={{ __html: t(service.about) }}
          ></div>
        )}
        {/* ВРАЧИ */}
        {activeTab === "doctors" && (
          <div className="bg-white rounded-2xl shadow p-8">
            {/* Place your doctors grid or reusable doctors component here. */}
            <div className="text-brand1 font-bold text-xl mb-3">
              Врачи этого направления
            </div>
            <div className="text-brand1/70">Докторский штат будет здесь.</div>
          </div>
        )}
        {/* ОТЗЫВЫ */}
        {activeTab === "reviews" && (
          <div className="bg-white rounded-2xl shadow p-8">
            <div className="text-brand1/70">
              Отзывов еще нет, либо они не добавлены.
            </div>
          </div>
        )}
        {/* ЦЕНЫ */}
        {activeTab === "prices" && (
          <div className="bg-white rounded-2xl shadow p-8">
            {/* Insert your pricing table here */}
            <div className="text-brand1 font-bold text-xl mb-3">
              Стоимость консультации
            </div>
            <table className="w-full mt-4 border">
              <thead>
                <tr className="bg-brand4/20 text-left">
                  <th className="px-4 py-2">Наименование</th>
                  <th className="px-4 py-2">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-2">
                    Экспертная оценка результатов КТ/МРТ/ПЭТ-КТ
                  </td>
                  <td className="border-t px-4 py-2">15 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailsExpertAssessment;
