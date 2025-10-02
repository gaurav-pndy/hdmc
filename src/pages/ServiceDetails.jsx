import React, { useState } from "react";

import ServiceAbout from "../components/ServiceDetails/ServiceAbout";
import ServiceDoctors from "../components/ServiceDetails/ServiceDoctors";
import ServiceReviews from "../components/ServiceDetails/ServiceReviews";
import ServicePrices from "../components/ServiceDetails/ServicePrices";
import ServiceVideos from "../components/ServiceDetails/ServiceVideos";

const tabs = [
  { key: "about", label: "О сервисе" },
  { key: "video", label: "Видео" }, // Uncomment if video is added in future
  { key: "doctors", label: "Врачи" },
  { key: "reviews", label: "Отзывы" },
  { key: "prices", label: "Цены" },
];

const tabContent = {
  about: ServiceAbout,
  video: ServiceVideos,
  doctors: ServiceDoctors,
  reviews: ServiceReviews,
  prices: ServicePrices,
};

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Hero section from content
  return (
    <div className="w-full min-h-screen bg-brand4/10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-b from-brand4/10 to-white rounded-xl shadow p-10 mb-3 flex flex-col items-center">
          <h1 className="font-extrabold text-3xl md:text-4xl text-center text-brand1 mb-2">
            FULL-TIME
            <br className="hidden md:block" />
            AND REMOTE CONSULTATIONS
          </h1>
          <p className="text-brand1/70 text-lg text-center mb-5">
            In-person and remote consultations
          </p>
          <button className="bg-brand1 text-white font-semibold px-7 py-3 rounded-lg shadow hover:bg-brand5/90 transition mb-2">
            Make an appointment
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-6 mb-7 flex-wrap items-center justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-2 px-5 text-base font-semibold rounded-t-lg border-b-2 transition 
                ${
                  activeTab === tab.key
                    ? "border-brand1 bg-white text-brand1 shadow"
                    : "border-transparent text-brand1/60 bg-brand4/10 hover:bg-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div>{React.createElement(tabContent[activeTab])}</div>
      </div>
    </div>
  );
};

export default ServiceDetails;
