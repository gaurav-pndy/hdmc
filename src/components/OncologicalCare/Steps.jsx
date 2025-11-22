import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");

  const stepsData = {
    tab1: {
      number: 1,
      title: t("care.tab1"),
      image:
        "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    tab2: {
      number: 2,
      title: t("care.tab2"),
      image:
        "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    tab3: {
      number: 3,
      title: t("care.tab3"),
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    tab4: {
      number: 4,
      title: t("care.tab4"),
      image:
        "https://images.unsplash.com/photo-1757833155170-211a15494193?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    tab5: {
      number: 5,
      title: t("care.tab5"),
      image:
        "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    tab6: {
      number: 6,
      title: t("care.tab6"),
      image:
        "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    tab7: {
      number: 7,
      title: t("care.tab7"),
      image:
        "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  return (
    <section className="grid max-w-7xl  mt-12 mx-auto md:grid-cols-2 md:gap-10">
      {/* Left Column - Tabs */}
      <div className="flex flex-col gap-2">
        {Object.keys(stepsData).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={`
                flex items-center gap-3 p-4 rounded-xl font-semibold text-left text-[1rem] cursor-pointer
                shadow transition-all duration-300
                hover:-translate-y-[2px] hover:shadow-lg
                ${
                  activeTab === tabKey
                    ? "bg-brand1 text-white shadow-md"
                    : "bg-white text-brand1"
                }
              `}
          >
            <span className="text-2xl">{stepsData[tabKey].number}.</span>
            {stepsData[tabKey].title}
          </button>
        ))}
      </div>

      {/* Right Column - Content */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow flex flex-col ">
        <h3 className="text-2xl md:text-3xl font-bold text-brand1 mb-8">
          {stepsData[activeTab].number}. {stepsData[activeTab].title}
        </h3>
        <img
          src={stepsData[activeTab].image}
          alt={stepsData[activeTab].title}
          className="w-full max-w-lg rounded-xl shadow border border-brand4 mb-4 object-cover"
          style={{ maxHeight: "320px" }}
        />
      </div>
    </section>
  );
};

export default Steps;
