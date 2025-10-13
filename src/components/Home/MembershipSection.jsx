import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { IoDocumentTextOutline, IoShieldOutline } from "react-icons/io5";
import { LuCrown, LuUsers } from "react-icons/lu";
import { RiStethoscopeFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MembershipSection = () => {
  // Which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const { t } = useTranslation();

  // FEATURES
  const features = [
    {
      icon: <CiCalendar className="text-[#125e84] text-4xl" />,
      title: t("membership.features.feature1.title"),
      text: t("membership.features.feature1.desc"),
    },
    {
      icon: <IoShieldOutline className="text-[#125e84] text-4xl" />,
      title: t("membership.features.feature2.title"),
      text: t("membership.features.feature2.desc"),
    },
    {
      icon: <LuUsers className="text-[#125e84] text-4xl" />,
      title: t("membership.features.feature3.title"),
      text: t("membership.features.feature3.desc"),
    },
    {
      icon: <RiStethoscopeFill className="text-[#125e84] text-4xl" />,
      title: t("membership.features.feature4.title"),
      text: t("membership.features.feature4.desc"),
    },
    {
      icon: <IoDocumentTextOutline className="text-[#125e84] text-4xl" />,
      title: t("membership.features.feature5.title"),
      text: t("membership.features.feature5.desc"),
    },
    {
      icon: <FiCheckCircle className="text-[#125e84] text-4xl" />,
      title: t("membership.features.feature6.title"),
      text: t("membership.features.feature6.desc"),
    },
  ];

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
    <section className="w-full bg-[#fbfbfb] py-16">
      <div className="max-w-[87rem] text-center mx-auto px-4 ">
        <div className="flex justify-center">
          <span className="bg-brand4/30 px-4 py-2 text-brand1  rounded-full font-medium mb-2 flex items-center gap-2">
            <LuCrown className="text-lg" /> {t("membership.badge")}
          </span>
        </div>
        <h2 className="text-brand1 mx-auto px-4 text-center text-4xl md:text-5xl font-bold mb-6">
          {" "}
          {t("membership.title")}
        </h2>
        <p className="md:text-lg  px-4 text-center text-brand1/90  max-w-3xl mx-auto mb-10">
          {t("membership.subtitle")}
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-8 py-7 flex flex-col items-center text-center hover:scale-105 hover:bg-brand4/20 hover:shadow-lg cursor-pointer shadow-md transition-all duration-300 group"
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-brand1/30 mb-4">
                {f.icon}
              </span>
              <div className="text-black group-hover:text-brand2 transition-all duration-300 font-medium text-xl mb-2">
                {f.title}
              </div>
              <div className="text-brand1 group-hover:text-brand2 transition-all duration-300 text-base">
                {f.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-2">
          <button className="bg-brand1 text-white font-semibold rounded-lg px-8 py-3 shadow hover:bg-brand5/90 cursor-pointer transition-all duration-300 block mx-auto">
            {t("membership.button")}
          </button>
        </div>
        <div className="text-sm text-brand1/80 text-center mt-4">
          {t("membership.contactText")}{" "}
        </div>

        {/* FAQ Accordion */}
        <div>
          <div className="text-center text-brand1 font-bold text-2xl md:text-4xl mb-16 mt-16">
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
      </div>
    </section>
  );
};

export default MembershipSection;
