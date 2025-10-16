import React from "react";
import PatientsHero from "../components/ForPatients/PatientsHero";
import PatientsInfo from "../components/ForPatients/PatientsInfo";
import PatientsAccordion from "../components/ForPatients/PatientsAccordion";

const ForPatients = () => {
  return (
    <div>
      <PatientsHero />
      <PatientsInfo />
      <PatientsAccordion />
    </div>
  );
};

export default ForPatients;
