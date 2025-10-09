import React, { useEffect, useRef, useState } from "react";
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
  FaCalendarCheck,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "../utils/i18n";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // mobile dropdown
  const [city, setCity] = useState("Moscow");
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const [showCityInit, setShowCityInit] = useState(false);
  const [showCitySelect, setShowCitySelect] = useState(false);

  useEffect(() => {
    const cityConfirmed = localStorage.getItem("cityConfirmed");
    if (!cityConfirmed) {
      // Show initial confirm popup only if not already confirmed
      setShowCityInit(true);
    }
  }, []);
  const handleCityConfirm = (confirmedCity) => {
    setCity(confirmedCity);
    setShowCityInit(false);
    localStorage.setItem("cityConfirmed", "true");
  };

  const handleShowCitySelect = () => {
    setShowCityInit(false);
    setShowCitySelect(true);
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setShowCitySelect(false);
    localStorage.setItem("cityConfirmed", "true");
  };

  // Handle language toggle
  const languages = [
    { code: "en", name: "English", flag: "/flags/us_flag.png" },
    { code: "ru", name: "Русский", flag: "/flags/russia_flag.png" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setDropdownOpen(false);
  };

  // City addresses
  const addresses = {
    Moscow: "Moscow, Lenina Street 10, Building A",
    Makhachkala: "Makhachkala, Gorkogo Street 25, Block B",
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
    <header className="w-full border-b border-brand4 text-brand1 fixed top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="flex w-full bg-[#f3f5f7]">
        <motion.div
          className="flex max-w-[90rem] w-full mx-auto flex-col md:flex-row items-center justify-between px-4 md:py-3 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* <div className="hidden md:flex flex-col">
            <label htmlFor="city" className="text-xs mb-1">
              Select your City:
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border rounded px-2 py-0.5"
            >
              <option value="Moscow">Moscow</option>
              <option value="Makhachkala">Makhachkala</option>
            </select>
          </div> */}

          <div className="hidden md:flex items-center gap-2">
            <img
              src="/HD.png"
              alt="Logo"
              className="h-5 md:h-6 object-contain"
            />
          </div>

          {/* City Confirmation Popup */}
          {showCityInit && (
            <div className="absolute z-50 top-20 left-1/2 translate-x-[-50%] md:translate-0 md:left-20  bg-white border border-brand4 shadow-black/70 shadow-2xl rounded-lg px-6 py-5 w-[95%] max-w-xs text-center flex flex-col items-center">
              <div className="text-lg md:text-xl font-semibold text-brand1 mb-3">
                {t("header.cityConfirm.question")}
              </div>
              <div className="flex gap-5 w-full justify-center">
                <button
                  className="bg-brand1 text-white font-semibold rounded-lg px-6 py-2 hover:bg-brand5 transition-all duration-300 cursor-pointer"
                  onClick={() => handleCityConfirm("Moscow")}
                >
                  {t("header.cityConfirm.yes")}
                </button>
                <button
                  className="bg-gray-200 text-brand1 font-semibold rounded-lg px-6 py-2 hover:bg-brand4/30 transition-all duration-300 cursor-pointer"
                  onClick={handleShowCitySelect}
                >
                  {t("header.cityConfirm.no")}
                </button>
              </div>
            </div>
          )}

          {/* City Selection Popup */}
          {showCitySelect && (
            <div className="absolute z-50 top-20 left-1/2 translate-x-[-50%] md:translate-0 md:left-20  bg-white border border-brand4 shadow-black/70 shadow-2xl rounded-lg px-6 py-5 w-[95%] max-w-xs text-center flex flex-col items-center">
              <div className="text-lg md:text-xl font-semibold text-brand1 mb-5">
                {t("header.citySelect")}
              </div>
              <div className="flex gap-5 justify-center">
                <button
                  className={`${
                    city === "Moscow"
                      ? "bg-brand1 text-white"
                      : "bg-gray-100 text-brand1"
                  } font-semibold rounded-lg px-6 py-2 hover:bg-brand5/80 transition-all duration-300 cursor-pointer`}
                  onClick={() => handleCitySelect("Moscow")}
                >
                  {t("header.moscow")}
                </button>
                <button
                  className={`${
                    city === "Makhachkala"
                      ? "bg-brand1 text-white"
                      : "bg-gray-100 text-brand1"
                  } font-semibold rounded-lg px-6 py-2 hover:bg-brand5/80 transition-all duration-300 cursor-pointer`}
                  onClick={() => handleCitySelect("Makhachkala")}
                >
                  {t("header.makhachkala")}
                </button>
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div className="hidden md:flex flex-wrap ml-8 items-center gap-5 flex-1  justify-center md:justify-start">
            <div className="flex flex-col  text-sm">
              <span className="whitespace-nowrap flex items-center gap-1  mb-1">
                <FaPhoneAlt /> +7 (495) 123-45-67
              </span>
              <a
                href="mailto:info@medclinic.ru"
                className="underline  flex items-center gap-1 whitespace-nowrap"
              >
                <FaEnvelope />
                info@medclinic.ru
              </a>
            </div>
            <div className=" items-center gap-1  whitespace-nowrap">
              <h6 className="font-semibold"> {t("header.moscow")} </h6>
              <p
                className="text-xs text-brand1 leading-4"
                dangerouslySetInnerHTML={{ __html: t("header.moscowAddress") }}
              ></p>
            </div>
            <div className=" items-center gap-1  whitespace-nowrap">
              <h6 className="font-semibold"> {t("header.makhachkala")} </h6>
              <p
                className="text-xs text-brand1 leading-4"
                dangerouslySetInnerHTML={{
                  __html: t("header.makhachkalaAddress"),
                }}
              ></p>
            </div>
          </div>

          {/* Socials & Language Switch */}
          <div className="hidden md:flex items-center gap-2 justify-end min-w-0">
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:scale-125 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/medclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 text-2xl hover:scale-125 transition-all duration-300"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
            <div
              className="relative md:ml-2 flex gap-1 md:gap-2 items-center"
              ref={dropdownRef}
            >
              <FaGlobe className="text-xl md:text-2xl text-brand1" />
              <div className="relative">
                <button
                  className="cursor-pointer border font-semibold   md:text-base px-2 hover:bg-brand1/10 transition-all duration-300 py-1 rounded-lg text-xs flex items-center gap-2"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img
                    src={
                      languages.find((lang) => lang.code === selectedLang)?.flag
                    }
                    alt="Flag"
                    className="w-3 md:w-4 h-3 md:h-4"
                  />
                  {languages.find((lang) => lang.code === selectedLang)?.name}
                  <IoIosArrowDown className=" text-sm " />
                </button>

                {dropdownOpen && (
                  <ul className="absolute md:top-9 w-full bg-white border border-[#002379] rounded-lg shadow-md mt-1 right-0 z-10 overflow-hidden">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        className="flex items-center gap-2 px-2 md:px-3 py-1 hover:bg-gray-200 cursor-pointer text-xs md:text-base"
                        onClick={() => changeLanguage(lang.code)}
                      >
                        <img
                          src={lang.flag}
                          className="w-3 md:w-4 h-3 md:h-4"
                          alt={`${lang.name} Flag`}
                        />
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <button className="border hidden md:flex border-[#125e84] text-[#125e84] px-4 py-1.5 rounded-lg font-medium hover:bg-[#125e84]/10 cursor-pointer transition-all duration-300 gap-2 items-center  whitespace-nowrap">
              <FaUser className="" />
              {t("header.personalAccount")}
            </button>
            <input
              type="text"
              className="border w-40 hidden md:flex border-[#125e84] text-[#125e84] px-4 py-1.5 rounded-lg font-medium hover:bg-[#125e84]/10 cursor-pointer transition-all duration-300 gap-2 items-center  whitespace-nowrap"
              placeholder={t("header.search")}
            >
              {/* <FaSearch className="" /> */}
            </input>
          </div>
        </motion.div>
      </div>

      {/* Desktop Nav Bar with Logo */}
      <motion.nav
        className="flex max-w-[90rem]  w-full mx-auto items-center justify-between px-4 py-4 md:py-2"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {/* Logo now here */}
        <div className="flex md:hidden items-center gap-2">
          <img src="/HD.png" alt="Logo" className="h-5 md:h-7 object-contain" />
        </div>

        <div className="hidden md:flex gap-6  items-center flex-1">
          {" "}
          <Link
            to="/"
            className="  hover:text-brand4 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            {t("header.home")}{" "}
          </Link>{" "}
          <Link
            to="/about"
            className="   hover:text-brand4 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            {t("header.about")}{" "}
          </Link>{" "}
          <Link
            to="/doctors"
            className=" whitespace-nowrap hover:text-brand4 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.doctors")}{" "}
          </Link>{" "}
          {/* Services Dropdown - Desktop */}{" "}
          <div className="relative group whitespace-nowrap  cursor-pointer">
            {" "}
            <button className=" flex cursor-pointer items-center gap-1 hover:text-brand4 transition-all duration-300">
              {" "}
              {t(
                "header.services"
              )} <FaChevronDown className="text-sm mt-1" />{" "}
            </button>{" "}
            <div className="absolute h-96 overflow-y-scroll text-sm left-1/2 mt-1 pt-2 -translate-x-1/2 hidden group-hover:block bg-white shadow-lg shadow-black/40 rounded p-2 z-40 min-w-72 w-full">
              {" "}
              {services.map((s, idx) => (
                <Link
                  key={idx}
                  to={s.path}
                  className="block px-2 py-2 text-wrap hover:bg-gray-100"
                >
                  {" "}
                  {s.label}{" "}
                </Link>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <Link
            to="/doctors"
            className=" whitespace-nowrap hover:text-brand4 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.forPatients")}
          </Link>{" "}
          <Link
            to="/doctors"
            className=" whitespace-nowrap hover:text-brand4 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.ctScan")}{" "}
          </Link>{" "}
          <Link
            to="/doctors"
            className=" whitespace-nowrap hover:text-brand4 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.offers")}
          </Link>{" "}
          <Link
            to="/hdmc-plus"
            className=" whitespace-nowrap hover:text-brand4 transition-all duration-300 cursor-pointer"
          >
            {" "}
            HDMC+{" "}
          </Link>{" "}
          <Link
            to="/doctors"
            className=" whitespace-nowrap hover:text-brand4 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.reviews")}{" "}
          </Link>{" "}
        </div>

        <div className="flex justify-between  md:justify-normal md:w-fit text-sm gap-3">
          <button className="  bg-[#125e84] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-brand5/90 cursor-pointer transition-all duration-300 whitespace-nowrap hidden md:flex items-center gap-2">
            <FaCalendarCheck className="text-lg" />

            {t("header.bookAppointment")}
          </button>
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
            className="fixed top-0 right-0 h-full w-[90vw] sm:w-1/2 bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              className="self-end text-2xl mb-6"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col mb-6">
              <label htmlFor="city" className="text-xs mb-1">
                Select your City:
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border rounded px-2 py-0.5"
              >
                <option value="Moscow">Moscow</option>
                <option value="Makhachkala">Makhachkala</option>
              </select>
            </div>

            <nav className="flex  flex-col gap-4 text-lg">
              <Link to="/" onClick={() => setIsOpen(false)}>
                {t("header.home")}
              </Link>
              <Link to="/about" className="  hover:underline whitespace-nowrap">
                {" "}
                About Us
              </Link>{" "}
              <Link to="/doctors" className=" whitespace-nowrap">
                {" "}
                {t("header.doctors")}{" "}
              </Link>{" "}
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
              <Link to="/about" className="  hover:underline whitespace-nowrap">
                {" "}
                For Patients
              </Link>{" "}
              <Link to="/doctors" className=" whitespace-nowrap">
                {" "}
                CT Scan 24/7
              </Link>{" "}
              <Link to="/about" className="  hover:underline whitespace-nowrap">
                {" "}
                Special Offers{" "}
              </Link>{" "}
              <Link to="/hdmc-plus" onClick={() => setIsOpen(false)}>
                HDMC+
              </Link>
              <Link to="/doctors" className=" whitespace-nowrap">
                {" "}
                Reviews{" "}
              </Link>{" "}
              <button className="bg-[#125e84] text-white px-6 py-2 rounded font-bold hover:bg-sky-600 transition flex items-center gap-2 mt-4">
                <FaUser className="text-lg" />
                {t("header.personalAccount")}
              </button>
              <button className="border border-[#125e84] text-[#125e84] px-6 py-2 rounded-lg font-medium flex gap-2 items-center hover:bg-[#125e84]/10 cursor-pointer transition whitespace-nowrap">
                <FaCalendarCheck className="text-lg" />

                {t("header.bookAppointment")}
              </button>
            </nav>

            <div className="flex  md:hidden items-center gap-2 justify-between mt-6 w-full">
              <div
                className="relative md:ml-2 flex gap-2 items-center"
                ref={dropdownRef}
              >
                <FaGlobe className="text-2xl text-brand1" />
                <div className="relative">
                  <button
                    className="cursor-pointer border font-semibold   md:text-base px-2 hover:bg-brand1/10 transition-all duration-300 py-1 rounded-lg text-lg flex items-center gap-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img
                      src={
                        languages.find((lang) => lang.code === selectedLang)
                          ?.flag
                      }
                      alt="Flag"
                      className="w-4 h-4"
                    />
                    {languages.find((lang) => lang.code === selectedLang)?.name}
                    <IoIosArrowDown className=" text-sm " />
                  </button>

                  {dropdownOpen && (
                    <ul className="absolute md:top-9 w-full bg-white border border-[#002379] rounded-lg shadow-md mt-1 right-0 z-10 overflow-hidden">
                      {languages.map((lang) => (
                        <li
                          key={lang.code}
                          className="flex items-center gap-2 px-2 md:px-3 py-1 hover:bg-gray-200 cursor-pointer text-xs md:text-base"
                          onClick={() => changeLanguage(lang.code)}
                        >
                          <img
                            src={lang.flag}
                            className="w-3 md:w-4 h-3 md:h-4"
                            alt={`${lang.name} Flag`}
                          />
                          {lang.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/74951234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 text-3xl hover:scale-125 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://t.me/medclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 text-3xl hover:scale-125 transition-all duration-300"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
