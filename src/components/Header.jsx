import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaGlobe,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "../utils/i18n";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // mobile dropdown

  // Handle language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Services list
  const services = [
    { path: "/services/diagnostics", label: t("header.service1") },
    { path: "/services/therapy", label: t("header.service2") },
    { path: "/services/consultation", label: t("header.service3") },
    { path: "/services/ct", label: t("header.service4") },
    { path: "/services/observation", label: t("header.service5") },
    { path: "/services/international", label: t("header.service6") },
    { path: "/services/international", label: t("header.service7") },
    { path: "/services/international", label: t("header.service8") },
    { path: "/services/international", label: t("header.service9") },
    { path: "/services/international", label: t("header.service10") },
    { path: "/services/international", label: t("header.service11") },
    { path: "/services/international", label: t("header.service12") },
    { path: "/services/international", label: t("header.service13") },
    { path: "/services/international", label: t("header.service14") },
  ];

  return (
    <header className="w-full  fixed top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="flex w-full bg-[#f3f5f7]">
        <motion.div
          className="flex max-w-[87rem] w-full mx-auto flex-col md:flex-row items-center justify-between px-4 py-3 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/HD.png" alt="Logo" className="h-6 object-contain" />
            </div>

            <button
              className="flex md:hidden items-center gap-1 border rounded px-2 py-1 ml-4 font-medium whitespace-nowrap"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              <FaGlobe />
              {i18n.language === "en" ? "EN" : "RU"}
            </button>
          </div>

          {/* Contact Info (hidden on mobile) */}
          <div className="hidden md:flex flex-wrap ml-4 items-center gap-4 flex-1 min-w-0 justify-center md:justify-start">
            <div className="flex flex-wrap gap-6 text-sm truncate">
              <span className="whitespace-nowrap flex items-center gap-1 text-gray-800">
                <FaPhoneAlt /> +7 (495) 123-45-67
              </span>
              <a
                href="mailto:info@medclinic.ru"
                className="underline text-gray-800 flex items-center gap-1 whitespace-nowrap"
              >
                <FaEnvelope />
                info@medclinic.ru
              </a>
              <span className="flex items-center gap-1 text-gray-500 whitespace-nowrap">
                <FaLocationDot /> {t("header.location")}
              </span>
            </div>
          </div>

          {/* Socials & Language Switch (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4 justify-end min-w-0">
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/medclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 text-xl"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
            <button
              className="flex items-center gap-1 border rounded px-2 py-1 ml-4 font-medium whitespace-nowrap"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              <FaGlobe />
              {i18n.language === "en" ? "EN" : "RU"}
            </button>
            <span className="text-gray-600 text-xs">
              {t("header.moscowTime")} | {t("header.mahachkalaTime")}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Desktop Nav Bar */}
      <motion.nav
        className="flex max-w-[87rem] w-full mx-auto items-center justify-between px-4 py-3"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="hidden md:flex gap-8 items-center flex-1">
          <Link
            to="/"
            className="text-sky-700 font-semibold hover:underline whitespace-nowrap"
          >
            {t("header.home")}
          </Link>

          {/* Services Dropdown - Desktop */}
          <div className="relative group whitespace-nowrap">
            <button className="font-semibold flex cursor-pointer items-center gap-1">
              {t("header.services")}
              <FaChevronDown className="text-sm mt-1" />
            </button>
            <div className="absolute h-96 overflow-y-scroll  text-sm left-1/2 mt-1 pt-2  -translate-x-1/2 hidden group-hover:block bg-white shadow-lg shadow-black/40 rounded p-2 z-40 min-w-72 w-full">
              {services.map((s, idx) => (
                <Link
                  key={idx}
                  to={s.path}
                  className="block px-2 py-2 text-wrap hover:bg-gray-100"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/doctors" className="font-semibold whitespace-nowrap">
            {t("header.doctors")}
          </Link>
          <Link to="/hdmc-plus" className="font-semibold whitespace-nowrap">
            HDMC+
          </Link>
        </div>
        <div className="flex justify-between w-full md:justify-normal md:w-fit text-sm gap-3">
          <button className="bg-[#125e84] text-white px-6 py-2 rounded font-medium hover:bg-sky-600 transition whitespace-nowrap">
            {t("header.personalAccount")}
          </button>
          {/* <button className="border hidden md:block px-6 py-2 rounded font-medium bg-white hover:bg-gray-100 transition whitespace-nowrap">
            {t("header.login")}
          </button> */}
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-[85vw] sm:w-1/2 bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              className="self-end text-2xl mb-6"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <nav className="flex  flex-col gap-6 font-medium text-lg">
              <Link to="/" onClick={() => setIsOpen(false)}>
                {t("header.home")}
              </Link>

              {/* Services Dropdown - Mobile */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full"
                >
                  {t("header.services")}
                  <FaChevronDown
                    className={`ml-2 transform transition ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 mt-2 max-h-80 py-2  overflow-y-auto text-sm font-normal flex flex-col gap-4"
                    >
                      {services.map((s, idx) => (
                        <Link
                          key={idx}
                          to={s.path}
                          onClick={() => setIsOpen(false)}
                          className="block"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/doctors" onClick={() => setIsOpen(false)}>
                {t("header.doctors")}
              </Link>
              <Link to="/hdmc-plus" onClick={() => setIsOpen(false)}>
                HDMC+
              </Link>

              <button className="bg-[#125e84] text-white px-6 py-2 rounded font-bold hover:bg-sky-600 transition mt-4">
                {t("header.personalAccount")}
              </button>
              {/* <button className="border px-6 py-2 rounded font-bold bg-white hover:bg-gray-100 transition mt-2">
                {t("header.login")}
              </button> */}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
