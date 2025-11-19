import React from "react";

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

export default InsuranceTab;