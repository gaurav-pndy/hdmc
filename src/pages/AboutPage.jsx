import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutTabs from "../components/About/AboutTabs";
import AboutFooter from "../components/About/AboutFooter";

const AboutPage = ({ city }) => {
  console.log(city);

  return (
    <div className="px-4 mb-10">
      <AboutHero />
      <AboutTabs city={city} />
      <AboutFooter city={city} />
    </div>
  );
};

export default AboutPage;
