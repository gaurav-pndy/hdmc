import React, { useState } from "react";
import HDMCPlusHero from "../components/HDMCPlus/HDMCPlusHero";
import HDMCPlusBenefits from "../components/HDMCPlus/HDMCPlusBenefits";
import MembershipSection from "../components/Home/MembershipSection";
import HDMCPlusFAQ from "../components/HDMCPlus/HDMCPlusFAQ";
import HDMCPlusCTA from "../components/HDMCPlus/HDMCPlusCTA";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HDMCPlus = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const { t } = useTranslation();

  // FAQ
  const faq = [
    {
      question: t("membership.faq.faq1.question"),
      answer: t("membership.faq.faq1.answer"),
    },
    {
      question: t("membership.faq.faq2.question"),
      answer: t("membership.faq.faq2.answer"),
    },
    {
      question: t("membership.faq.faq3.question"),
      answer: t("membership.faq.faq3.answer"),
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return (
    <div>
      <HDMCPlusHero />
      {/* <HDMCPlusBenefits /> */}
      <MembershipSection />
      <div className="pb-16">
        <div className="text-center text-brand1 font-bold text-2xl md:text-4xl mb-16 ">
          {t("membership.faq.title")}{" "}
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-7">
          {faq.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleFAQ(idx)}
              className="rounded-lg bg-white border border-brand4/20 px-6 py-4 cursor-pointer transition shadow-md"
            >
              {/* Question + Icon */}
              <div className="flex justify-between items-center font-medium text-black text-lg">
                <span>{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-brand1" />
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 text-brand1 text-left">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      {/* <HDMCPlusFAQ /> */}
      <HDMCPlusCTA />
    </div>
  );
};

export default HDMCPlus;
