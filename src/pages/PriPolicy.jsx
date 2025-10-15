import React from "react";
import { useTranslation } from "react-i18next";

const PriPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-52 min-h-[70vh]">
      <h2 className="text-brand1 mx-auto px-4 text-center text-4xl md:text-5xl font-bold mb-6">
        {t("privacy.title")}
      </h2>
    </div>
  );
};

export default PriPolicy;
