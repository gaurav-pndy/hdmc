import React from "react";
import TelemedicineHero from "../components/Telemedicine/TelemedicineHero";
import TelemedicineAdvantages from "../components/Telemedicine/TelemedicineAdvantages";
import TelemedicineExperts from "../components/Telemedicine/TelemedicineExperts";
import TelemedicineHowItWorks from "../components/Telemedicine/TelemedicineHowItWorks";
import TelemedicineCTA from "../components/Telemedicine/TelemedicineCTA";

const Telemedicine = ({ setShowPopup }) => {
  return (
    <div>
      <TelemedicineHero setShowPopup={setShowPopup} />
      <TelemedicineAdvantages />
      <TelemedicineExperts />
      <TelemedicineHowItWorks />
      <TelemedicineCTA setShowPopup={setShowPopup} />
    </div>
  );
};

export default Telemedicine;
