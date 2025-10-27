import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const ForPatients = () => {
  const { t } = useTranslation();
  const PATIENT_LINKS = [
    {
      id: "appointment",
      header: t("forPatientsPage.heading1"),
      desc: t("forPatientsPage.text1"),
      button: { text: t("forPatientsPage.btn1"), to: "/appointment" },
      isFirst: true,
    },
    {
      id: "preparation",
      header: t("forPatientsPage.heading2"),
      desc: t("forPatientsPage.text2"),
      button: { text: t("forPatientsPage.btn2"), to: "/appointment" },
    },
    {
      id: "offers",
      header: t("forPatientsPage.heading3"),
      desc: t("forPatientsPage.text3"),
      button: { text: t("forPatientsPage.btn3"), to: "/appointment" },
    },
    {
      id: "insurance",
      header: t("forPatientsPage.heading4"),
      desc: t("forPatientsPage.text4"),
      button: { text: t("forPatientsPage.btn4"), to: "/appointment" },
    },
    {
      id: "blog",
      header: t("forPatientsPage.heading5"),
      desc: t("forPatientsPage.text5"),
      button: { text: t("forPatientsPage.btn5"), to: "/appointment" },
    },
    {
      id: "price",
      header: t("forPatientsPage.heading6"),
      desc: t("forPatientsPage.text6"),
      button: { text: t("forPatientsPage.btn6"), to: "/appointment" },
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      // Give the DOM some time to render the section
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          const topOffset =
            target.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 400);
    }
  }, [location]);

  return (
    <div className="bg-[#f6fcfd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center relative py-18 px-4 bg-gradient-to-br from-brand5 to-brand1 overflow-hidden">
        <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-6">
          {t("forPatientsPage.title")}
        </h1>
        <div className="text-white text-lg md:text-2xl font-medium mb-2 drop-shadow">
          {t("forPatientsPage.subtitle")}
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-5 py-12 space-y-6">
        {PATIENT_LINKS.map((item) => (
          <div id={item.id} key={item.header} className="pt-10">
            <h2 className="text-3xl font-bold text-black mb-3 pb-3 border-b border-brand4">
              {item.header}
            </h2>
            <div className="text-brand1/90 md:text-lg mb-4">{item.desc}</div>
            <button
              className={`inline-block  cursor-pointer  rounded-lg font-semibold px-5 py-2 shadow  transition-all duration-300 ${
                item.isFirst
                  ? "bg-brand3 text-white hover:bg-brand1"
                  : "border border-brand3 text-brand3 hover:bg-gray-200"
              } `}
            >
              {item.button.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForPatients;
