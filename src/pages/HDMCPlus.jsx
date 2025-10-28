import React from "react";
import HDMCPlusHero from "../components/HDMCPlus/HDMCPlusHero";
import HDMCPlusBenefits from "../components/HDMCPlus/HDMCPlusBenefits";
import MembershipSection from "../components/Home/MembershipSection";
import HDMCPlusFAQ from "../components/HDMCPlus/HDMCPlusFAQ";
import HDMCPlusCTA from "../components/HDMCPlus/HDMCPlusCTA";

const HDMCPlus = () => {
  return (
    <div>
      <HDMCPlusHero />
      {/* <HDMCPlusBenefits /> */}
      <MembershipSection />
      <HDMCPlusFAQ />
      <HDMCPlusCTA />
    </div>
  );
};

export default HDMCPlus;
