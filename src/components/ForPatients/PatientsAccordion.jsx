import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileMedical,
  FaCalendarCheck,
  FaClipboardList,
  FaCheckCircle,
  FaCalendarDay,
  FaStethoscope,
  FaWallet,
  FaUserMd,
  FaPills,
  FaLightbulb,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ACCORDION_DATA = [
  {
    key: "freeCare",
    icon: <FaFileMedical className="text-white text-2xl" />,
    title: "forPatients.accordion.freeCareTitle",
    subtitle: "forPatients.accordion.freeCareSubtitle",
    contentKey: "forPatients.accordion.freeCareContent",
  },
  {
    key: "careConditions",
    icon: <FaClipboardList className="text-white text-2xl" />,
    title: "forPatients.accordion.careConditionsTitle",
    subtitle: "forPatients.accordion.careConditionsSubtitle",
    contentKey: "forPatients.accordion.careConditionsContent",
  },
  {
    key: "careQuality",
    icon: <FaCheckCircle className="text-white text-2xl" />,
    title: "forPatients.accordion.careQualityTitle",
    subtitle: "forPatients.accordion.careQualitySubtitle",
    contentKey: "forPatients.accordion.careQualityContent",
  },
  {
    key: "appointment",
    icon: <FaCalendarCheck className="text-white text-2xl" />,
    title: "forPatients.accordion.appointmentTitle",
    subtitle: "forPatients.accordion.appointmentSubtitle",
    contentKey: "forPatients.accordion.appointmentContent",
  },
  {
    key: "diagnostics",
    icon: <FaStethoscope className="text-white text-2xl" />,
    title: "forPatients.accordion.diagnosticsTitle",
    subtitle: "forPatients.accordion.diagnosticsSubtitle",
    contentKey: "forPatients.accordion.diagnosticsContent",
  },
  {
    key: "hospitalization",
    icon: <FaCalendarDay className="text-white text-2xl" />,
    title: "forPatients.accordion.hospitalizationTitle",
    subtitle: "forPatients.accordion.hospitalizationSubtitle",
    contentKey: "forPatients.accordion.hospitalizationContent",
  },
  {
    key: "paidServices",
    icon: <FaWallet className="text-white text-2xl" />,
    title: "forPatients.accordion.paidServicesTitle",
    subtitle: "forPatients.accordion.paidServicesSubtitle",
    contentKey: "forPatients.accordion.paidServicesContent",
  },
  {
    key: "vacancies",
    icon: <FaUserMd className="text-white text-2xl" />,
    title: "forPatients.accordion.vacanciesTitle",
    subtitle: "forPatients.accordion.vacanciesSubtitle",
    contentKey: "forPatients.accordion.vacanciesContent",
  },
  {
    key: "medList",
    icon: <FaPills className="text-white text-2xl" />,
    title: "forPatients.accordion.medListTitle",
    subtitle: "forPatients.accordion.medListSubtitle",
    contentKey: "forPatients.accordion.medListContent",
  },
  {
    key: "standards",
    icon: <FaLightbulb className="text-white text-2xl" />,
    title: "forPatients.accordion.standardsTitle",
    subtitle: "forPatients.accordion.standardsSubtitle",
    contentKey: "forPatients.accordion.standardsContent",
  },
];

const PatientsAccordion = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-6xl mx-auto py-4 px-4">
      {ACCORDION_DATA.map((panel, idx) => (
        <div
          key={panel.key}
          className={`mb-5 bg-white rounded-2xl border border-brand4/20 shadow ${
            openIndex === idx ? "mb-8" : ""
          }`}
        >
          <button
            className="w-full flex items-center cursor-pointer justify-between gap-6 px-6 py-5 text-left focus:outline-none"
            onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`panel-content-${panel.key}`}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-lg shrink-0 mt-1">
                {panel.icon}
              </div>
              <div>
                <div className="text-lg md:text-xl font-semibold text-brand1">
                  {t(panel.title)}
                </div>
                <div className="text-brand1/80 text-sm md:text-base">
                  {t(panel.subtitle)}
                </div>
              </div>
            </div>
            <span
              className={`transition-transform duration-200 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-brand4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.354a.75.75 0 111.02 1.1l-4.25 3.84a.75.75 0 01-1.02 0l-4.25-3.84a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                key={panel.key}
                id={`panel-content-${panel.key}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-7 pb-8 pt-0 accordion-content">
                  <div
                    className="prose max-w-none text-brand1 text-base"
                    dangerouslySetInnerHTML={{ __html: t(panel.contentKey) }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default PatientsAccordion;
