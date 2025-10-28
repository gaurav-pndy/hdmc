import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutTabs from "../components/About/AboutTabs";
import AboutFooter from "../components/About/AboutFooter";

const AboutPage = () => {
  return (
    <div className="px-4 mb-10">
      <AboutHero />
      <AboutTabs />
      <AboutFooter />
    </div>
  );
};

export default AboutPage;
