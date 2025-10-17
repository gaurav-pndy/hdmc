import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaHospital, FaPhoneAlt, FaLock, FaUserFriends } from "react-icons/fa";

// Import your tab content components
import AboutInfo from "./AboutInfo";
import AboutContacts from "./AboutContacts";
import AboutLicenses from "./AboutLicenses";

import AboutPrivacyPolicy from "./AboutPrivacyPolicy";
import AboutOfferContract from "./AboutOfferContract";
import ForPatients from "../../pages/ForPatients";
import DoctorsPage from "../../pages/DoctorsPage";
import { TbLicense } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";
import PatientsInfo from "../ForPatients/PatientsInfo";
import PatientsAccordion from "../ForPatients/PatientsAccordion";

const TABS = [
  {
    key: "info",
    labelKey: "about.tabs.info",
    icon: <FaHospital />,
    component: AboutInfo,
  },
  {
    key: "licenses",
    labelKey: "about.tabs.licenses",
    icon: <TbLicense />,
    component: AboutLicenses,
  },
  {
    key: "contacts",
    labelKey: "about.tabs.contacts",
    icon: <FaPhoneAlt />,
    component: AboutContacts,
  },

  {
    key: "patients",
    labelKey: "about.tabs.patients",
    icon: <FaUserFriends />,
    component: ForPatients,
  },
  {
    key: "doctors",
    labelKey: "about.tabs.doctors",
    icon: <FaUserDoctor />,
    component: DoctorsPage,
  },
  {
    key: "privacy",
    labelKey: "about.tabs.privacy",
    icon: <LuShield />,
    component: AboutPrivacyPolicy,
  },
  {
    key: "offer",
    labelKey: "about.tabs.offer",
    icon: <MdOutlineLocalOffer />,
    component: AboutOfferContract,
  },
];

const AboutTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  return (
    <section className="max-w-7xl mx-auto px-2 py-12">
      {/* Tabs header */}
      <nav className="mb-6 grid grid-cols-2 md:grid-cols-3 lg:flex justify-between gap-4 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2  font-semibold rounded-xl cursor-pointer  transition-all 
              ${
                activeTab === tab.key
                  ? "bg-brand1 text-white"
                  : " text-brand1/70 bg-brand4/20 hover:text-brand1"
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
            {t(tab.labelKey)}
          </button>
        ))}
      </nav>

      {/* Tabs content */}
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-brand4/10">
        {TABS.map((tab) =>
          tab.key === activeTab ? (
            <div key={tab.key}>
              {tab.key === "patients" ? (
                <>
                  <PatientsInfo />
                  <PatientsAccordion />
                </>
              ) : (
                <tab.component />
              )}
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default AboutTabs;
