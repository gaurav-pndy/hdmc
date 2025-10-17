import React from "react";
import TelemedicineHero from "../components/Telemedicine/TelemedicineHero";
import TelemedicineAdvantages from "../components/Telemedicine/TelemedicineAdvantages";
import TelemedicineExperts from "../components/Telemedicine/TelemedicineExperts";

const Telemedicine = () => {
  return (
    <div>
      <TelemedicineHero />
      <TelemedicineAdvantages />
      <TelemedicineExperts />
    </div>
  );
};

export default Telemedicine;
