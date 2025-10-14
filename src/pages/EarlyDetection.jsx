import React from "react";
import HeroSection from "../components/EarlyDetection/HeroSection";
import EarlyAbout from "../components/EarlyDetection/EarlyAbout";
import EarlyWhy from "../components/EarlyDetection/EarlyWhy";
import OncoInsurance from "../components/EarlyDetection/OncoInsurance";

const EarlyDetection = () => {
  return (
    <div>
      <HeroSection />
      <EarlyAbout />
      <EarlyWhy />
      <OncoInsurance />
    </div>
  );
};

export default EarlyDetection;
