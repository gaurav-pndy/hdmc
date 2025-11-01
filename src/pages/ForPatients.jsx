import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import WaveBackground from "../components/WaveBackground";
import {
  FaCalendarCheck,
  FaTag,
  FaShieldAlt,
  FaBlog,
  FaDollarSign,
  FaFileAlt,
  FaClock,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import AppointmentTab from "../components/ForPatients/AppointmentTab";
import PreparationTab from "../components/ForPatients/PreparationTab";

// Preparation Tab Component

// Other tab components remain the same
const OffersTab = ({ t }) => (
  <div className="space-y-4">
    <h2 className="text-3xl font-bold text-black mb-3 pb-3 border-b border-brand4">
      {t("forPatientsPage.heading3")}
    </h2>
    <div className="text-brand1/90 md:text-lg mb-4">
      {t("forPatientsPage.text3")}
    </div>
    <button className="inline-block cursor-pointer rounded-lg font-semibold px-5 py-2 shadow transition-all duration-300 border border-brand3 text-brand3 hover:bg-gray-200">
      {t("forPatientsPage.btn3")}
    </button>
  </div>
);

const InsuranceTab = ({ t }) => (
  <div className="space-y-4">
    <h2 className="text-3xl font-bold text-black mb-3 pb-3 border-b border-brand4">
      {t("forPatientsPage.heading4")}
    </h2>
    <div className="text-brand1/90 md:text-lg mb-4">
      {t("forPatientsPage.text4")}
    </div>
    <button className="inline-block cursor-pointer rounded-lg font-semibold px-5 py-2 shadow transition-all duration-300 border border-brand3 text-brand3 hover:bg-gray-200">
      {t("forPatientsPage.btn4")}
    </button>
  </div>
);

const BlogTab = ({ t }) => (
  <div className="space-y-4">
    <h2 className="text-3xl font-bold text-black mb-3 pb-3 border-b border-brand4">
      {t("forPatientsPage.heading5")}
    </h2>
    <div className="text-brand1/90 md:text-lg mb-4">
      {t("forPatientsPage.text5")}
    </div>
    <button className="inline-block cursor-pointer rounded-lg font-semibold px-5 py-2 shadow transition-all duration-300 border border-brand3 text-brand3 hover:bg-gray-200">
      {t("forPatientsPage.btn5")}
    </button>
  </div>
);

const DocumentsTab = ({ t }) => {
  const documents = [
    {
      id: 1,
      name: "ЕГРЮЛ ЭЙЧДИ КЛИНИК",
      date: "01-11-2025 12:19",
      size: "185 KB",
      icon: <FaFileAlt className="text-brand1 text-3xl" />,
      url: "/docs/ЕГРЮЛ ЭЙЧДИ КЛИНИК.pdf", // Update with actual path
    },
    {
      id: 2,
      name: "Карточка ЭЙЧДИ КЛИНИК",
      date: "01-11-2025 12:19",
      size: "181 KB",
      icon: <FaFileAlt className="text-brand1 text-3xl" />,
      url: "/docs/Карточка ЭЙЧДИ КЛИНИК.pdf",
    },
    {
      id: 3,
      name: "ОГРН ИНН ЭЙЧДИ КЛИНИК",
      date: "01-11-2025 12:19",
      size: "226 KB",
      icon: <FaFileAlt className="text-brand1 text-3xl" />,
      url: "/docs/ОГРН ИНН ЭЙЧДИ КЛИНИК.pdf",
    },
    {
      id: 4,
      name: "Устав ЭЙЧДИ КЛИНИК",
      date: "01-11-2025 22:55",
      size: "4,425 KB",
      icon: <FaFileAlt className="text-brand1 text-3xl" />,
      url: "/docs/Устав ЭЙЧДИ КЛИНИК.pdf",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-brand1">
          Документы
        </h2>
      </div>

      {/* Documents Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg hover:border-brand3 transition-all group flex justify-between"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 bg-brand1/20 p-3 rounded-lg group-hover:bg-brand1/40 transition-colors">
                {doc.icon}
              </div>

              {/* Content */}

              <h3 className="font-semibold text-lg text-brand1  group-hover:text-brand3 transition-colors line-clamp-2">
                {doc.name}
              </h3>
              {/* <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-gray-400" />
                    <span>{doc.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaFileAlt className="text-gray-400 text-xs" />
                    <span>{doc.size}</span>
                  </div>
                </div> */}

              {/* Download Arrow */}
            </div>
            <div className="flex-shrink-0 ">
              <div className="w-10 h-10 bg-brand4/20 rounded-full flex items-center justify-center group-hover:bg-brand3 transition-colors">
                <FaDownload className="text-brand3 text-xl group-hover:text-white transition-colors" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const PATIENT_TABS = [
  {
    key: "appointment",
    labelKey: "forPatientsPage.heading1",
    icon: <FaCalendarCheck />,
    component: AppointmentTab,
  },
  {
    key: "preparation",
    labelKey: "forPatientsPage.heading2",
    icon: <FaFileAlt />,
    component: PreparationTab,
  },
  {
    key: "offers",
    labelKey: "forPatientsPage.heading3",
    icon: <FaTag />,
    component: OffersTab,
  },
  {
    key: "insurance",
    labelKey: "forPatientsPage.heading4",
    icon: <FaShieldAlt />,
    component: InsuranceTab,
  },
  {
    key: "blog",
    labelKey: "forPatientsPage.heading5",
    icon: <FaBlog />,
    component: BlogTab,
  },
  {
    key: "documents",
    labelKey: "forPatientsPage.heading6",
    icon: <FaFileAlt />,
    component: DocumentsTab,
  },
];

const ForPatients = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(PATIENT_TABS[0].key);

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const hashKey = location.hash.replace("#", "");
      const tabExists = PATIENT_TABS.some((tab) => tab.key === hashKey);
      if (tabExists) setActiveTab(hashKey);
    }
  }, [location.hash]);

  // Handle scroll to section from navigation state
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo.replace("#", "");
      const tabExists = PATIENT_TABS.some((tab) => tab.key === sectionId);
      if (tabExists) {
        setActiveTab(sectionId);
        // Scroll to top of tabs section
        setTimeout(() => {
          const tabsSection = document.querySelector("#patient-tabs");
          if (tabsSection) {
            const topOffset =
              tabsSection.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: topOffset, behavior: "smooth" });
          }
        }, 400);
      }
    }
  }, [location]);

  return (
    <div className="bg-[#f6fcfd] min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-[87rem] rounded-xl mx-auto grid md:grid-cols-2 items-center mt-20 lg:mt-52 overflow-hidden md:min-h-80">
        <WaveBackground
          stroke="rgb(70, 70, 70,"
          custStyle="md:w-1/2 h-1/2 left-0 top-0"
        />

        <div className="w-full md:min-h-80 flex flex-col justify-center h-full p-6 pb-16 md:p-6 lg:p-10 xl:p-12 bg-gradient-to-b md:bg-gradient-to-r from-[#6f452f] to-[#242a2d]">
          <h1 className="text-white relative z-40 text-4xl md:text-6xl xl:text-7xl font-bold mb-4">
            {t("forPatientsPage.title")}
          </h1>
          <p className="text-white relative z-40 text-lg md:text-2xl font-medium drop-shadow">
            {t("forPatientsPage.subtitle")}
          </p>
        </div>

        <div className="w-full h-full z-30 -mt-[3px] md:-mt-0">
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://www.shutterstock.com/shutterstock/videos/3761850711/preview/stock-footage-question-hand-and-therapist-with-patient-office-and-counselling-for-mental-health-talking-and.webm"
              alt="Services illustration"
              className="w-full md:min-h-80 h-full object-cover md:rounded-tr-2xl md:rounded-br-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b via-30% md:bg-gradient-to-r from-[#242a2d] via-[#242a2d]/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section id="patient-tabs" className="max-w-[87rem] mx-auto px-5 py-12">
        {/* Tabs Navigation */}
        <nav className="mb-6 grid grid-cols-2  lg:grid-cols-3 gap-4">
          {PATIENT_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-3 font-semibold rounded-xl cursor-pointer transition-all 
                ${
                  activeTab === tab.key
                    ? "bg-brand1 text-white"
                    : "text-brand1/70 bg-brand4/20 hover:text-brand1"
                }
              `}
            >
              <span
                className={`${
                  activeTab === tab.key ? "text-white" : "text-brand4"
                } text-xl`}
              >
                {tab.icon}
              </span>
              <span className="break-all">{t(tab.labelKey)}</span>
            </button>
          ))}
        </nav>

        {/* Tabs Content */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border border-brand4/10">
          {PATIENT_TABS.map((tab) =>
            tab.key === activeTab ? <tab.component key={tab.key} t={t} /> : null
          )}
        </div>
      </section>
    </div>
  );
};

export default ForPatients;
