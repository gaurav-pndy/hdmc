import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  FaHospital,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "../utils/i18n";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TbLicense } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { IoInformation } from "react-icons/io5";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // mobile dropdown
  const [isAboutOpen, setIsAboutOpen] = useState(false); // mobile dropdown
  const [city, setCity] = useState("Moscow");
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setaboutDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const [showCityInit, setShowCityInit] = useState(false);
  const [showCitySelect, setShowCitySelect] = useState(false);

  const [showServices, setShowServices] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

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

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Services list
  const services = [
    {
      path: "/services/diagnostics",
      label: t("header.service1"),
      icon: "/services/1.svg",
    },
    {
      path: "/early-detection-program",
      label: t("header.service2"),
      icon: "/services/2.svg",
    },
    {
      path: "/services/consultation",
      label: t("header.service3"),
      icon: "/services/3.svg",
    },
    {
      path: "/services/ct",
      label: t("header.service4"),
      icon: "/services/4.svg",
    },
    {
      path: "/services/observation",
      label: t("header.service5"),
      icon: "/services/5.svg",
    },
    {
      path: "/services/international",
      label: t("header.service6"),
      icon: "/services/6.svg",
    },
    {
      path: "/services/international",
      label: t("header.service7"),
      icon: "/services/7.svg",
    },
    {
      path: "/services/international",
      label: t("header.service8"),
      icon: "/services/8.svg",
    },
    {
      path: "/services/international",
      label: t("header.service9"),
      icon: "/services/9.svg",
    },
    {
      path: "/services/international",
      label: t("header.service10"),
      icon: "/services/10.svg",
    },
    {
      path: "/services/international",
      label: t("header.service11"),
      icon: "/services/11.svg",
    },
    {
      path: "/services/international",
      label: t("header.service12"),
      icon: "/services/12.svg",
    },
  ];

  const aboutItems = [
    {
      path: "/",
      label: t("header.about1"),
      icon: <FaHospital className="text-xl text-white" />,
    },
    {
      path: "/",
      label: t("header.about2"),
      icon: <TbLicense className="text-xl text-white" />,
    },
    {
      path: "/",
      label: t("header.about3"),
      icon: <BiSolidContact className="text-xl text-white" />,
    },
    {
      path: "/",
      label: t("header.about4"),
      icon: <IoInformation className="text-xl text-white" />,
    },
    {
      path: "/",
      label: t("header.about5"),
      icon: <FaUsers className="text-xl text-white" />,
    },
    {
      path: "/",
      label: t("header.about6"),
      icon: <FaUser className="text-xl text-white" />,
    },
    {
      path: "/",
      label: t("header.about7"),
      icon: <FaHandshake className="text-xl text-white" />,
    },
  ];

  const scrollToSection = (sectionId) => {
    const target = document.querySelector(sectionId);
    if (target) {
      const topOffset =
        target.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      // Already on homepage → just scroll
      scrollToSection(sectionId);
    } else {
      // Go to homepage first, then scroll
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header className="w-full border-b border-brand4 text-brand1 fixed top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="flex w-full bg-[#f3f5f7]">
        <motion.div
          className="flex max-w-[90rem] w-full mx-auto flex-col lg:flex-row items-center justify-between lg:justify-end  px-4 lg:py-3 text-xs xl:text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="hidden lg:flex flex-col">
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

          {/* City Confirmation Popup */}
          {showCityInit && (
            <div className="absolute z-50 top-20 left-1/2 translate-x-[-50%]  bg-white border border-brand4 shadow-black/70 shadow-2xl rounded-lg px-6 py-5 w-[95%] max-w-xs text-center flex flex-col items-center">
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
            <div className="absolute z-50 top-20 left-1/2 translate-x-[-50%]   bg-white border border-brand4 shadow-black/70 shadow-2xl rounded-lg px-6 py-5 w-[95%] max-w-xs text-center flex flex-col items-center">
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
          <div className="hidden lg:flex mx-4 xl:mx-8 items-center gap-3 xl:gap-5  w-fit justify-center lg:justify-end">
            <div className="flex flex-col  text-xs xl:text-sm">
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
            <div className=" items-center gap-1   whitespace-nowrap">
              <h6 className="font-semibold "> {t("header.moscow")} </h6>
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
          <div className="hidden lg:flex items-center gap-2 justify-end min-w-0">
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/medclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
            <div
              className="relative md:ml-2 flex gap-1 md:gap-2 items-center"
              ref={dropdownRef}
            >
              <FaGlobe className="text-lg xl:text-2xl text-brand1" />
              <div className="relative">
                <button
                  className="cursor-pointer border font-semibold   xl:text-base px-2 hover:bg-brand1/10 transition-all duration-300 py-1 rounded-lg text-xs flex items-center gap-2"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img
                    src={
                      languages.find((lang) => lang.code === selectedLang)?.flag
                    }
                    alt="Flag"
                    className="w-3 xl:w-4 h-3 xl:h-4"
                  />
                  {languages.find((lang) => lang.code === selectedLang)?.name}
                  <IoIosArrowDown className=" text-sm " />
                </button>

                {dropdownOpen && (
                  <ul className="absolute md:top-9 w-full bg-white border border-[#002379] rounded-lg shadow-md mt-1 right-0 z-10 overflow-hidden">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        className="flex items-center gap-2 px-2 md:px-3 py-1 hover:bg-gray-200 cursor-pointer text-xs xl:text-base"
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
          </div>
        </motion.div>
      </div>

      {/* Desktop Nav Bar with Logo */}
      <motion.nav
        className="flex max-w-[90rem]  w-full mx-auto items-center justify-between px-4 py-4 lg:py-2"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {/* Logo now here */}
        <Link to="/" className="flex  items-center gap-2 mr-2">
          <img src="/HD.png" alt="Logo" className="h-5 md:h-7 object-contain" />
        </Link>

        <div className="hidden lg:flex justify-end gap-3 xl:gap-6 mr-3 xl:mr-6 items-center flex-1 text-sm xl:text-base font-medium">
          {" "}
          <div
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
            className="relative   whitespace-nowrap cursor-pointer"
          >
            <Link
              to="/about"
              className="flex items-center cursor-pointer gap-1 hover:text-brand2 transition-all duration-300"
            >
              {t("header.about")} <FaChevronDown className="text-sm mt-1" />
            </Link>

            {/* Animated dropdown */}
            <AnimatePresence>
              {showAboutDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/3 mt-2 grid grid-cols-4 gap-6 xl:gap-10 bg-white  shadow-lg shadow-black/40 rounded-xl p-6 z-40 w-3xl xl:w-5xl"
                >
                  {aboutItems.map((a, idx) => (
                    <Link
                      key={idx}
                      to={a.path}
                      className="block  group  text-wrap   transition-all duration-300 rounded-lg"
                    >
                      <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-gradient-to-br from-[#125e84] to-[#33babd] group-hover:from-brand2 group-hover:to-brand1 group-hover:rotate-15 group-hover:scale-110 flex items-center justify-center shrink-0   transition-all duration-300  xl:mb-2">
                        {a.icon}
                      </div>
                      <p className="group-hover:text-brand2 text-sm xl:text-base">
                        {a.label}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/about#doctors"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.doctors")}{" "}
          </Link>{" "}
          {/* Services Dropdown - Desktop */}{" "}
          <div
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
            className="relative   whitespace-nowrap cursor-pointer"
          >
            <button
              onClick={() => handleScrollToSection("#services")}
              className="flex items-center cursor-pointer gap-1 hover:text-brand2 transition-all duration-300"
            >
              {t("header.services")} <FaChevronDown className="text-sm mt-1" />
            </button>

            {/* Animated dropdown */}
            <AnimatePresence>
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 grid grid-cols-4 gap-6 xl:gap-10 bg-white  shadow-lg shadow-black/40 rounded-xl p-6 z-40 w-3xl xl:w-6xl"
                >
                  {services.map((s, idx) => (
                    <Link
                      key={idx}
                      to={s.path}
                      className="block  group  text-wrap   transition-all duration-300 rounded-lg"
                    >
                      <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-gradient-to-br from-[#125e84] to-[#33babd] group-hover:from-brand2 group-hover:to-brand1 group-hover:rotate-15 group-hover:scale-110 flex items-center justify-center shrink-0   transition-all duration-300  xl:mb-2">
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="w-4 xl:w-6 h-4 xl:h-6 object-contain brightness-0 invert"
                        />
                      </div>
                      <p className="group-hover:text-brand2 text-sm xl:text-base">
                        {s.label}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/about#patients"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.forPatients")}
          </Link>{" "}
          <button
            onClick={() => handleScrollToSection("#reviews")}
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.reviews")}{" "}
          </button>{" "}
          <Link
            to="/"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.offers")}
          </Link>{" "}
          <button
            onClick={() => handleScrollToSection("#contact")}
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.contact")}
          </button>{" "}
        </div>

        <div className="flex justify-between  md:justify-normal md:w-fit text-sm gap-3">
          <input
            type="text"
            className="border w-48 xl:min-w-56 hidden lg:flex border-[#125e84] text-[#125e84] px-4 py-1.5 rounded-lg font-medium hover:bg-[#125e84]/10 cursor-pointer transition-all duration-300 gap-2 items-center  whitespace-nowrap"
            placeholder={t("header.search")}
          >
            {/* <FaSearch className="" /> */}
          </input>
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      <nav className="hidden lg:flex  py-2 w-full bg-brand1/10 justify-end ">
        <div className="hidden max-w-[90rem] px-4  mx-auto md:flex gap-3 xl:gap-6  justify-end items-center flex-1 text-sm xl:text-base font-medium">
          {" "}
          <Link
            to="/"
            className="  hover:text-brand2 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            IMETC{" "}
          </Link>{" "}
          <Link
            to="/early-detection-program"
            className="   hover:text-brand2 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            {t("header.earlyDiagnosis")}{" "}
          </Link>{" "}
          <Link
            to="/doctors"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.expertise")}{" "}
          </Link>{" "}
          <Link
            to="/doctors"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            Pathologica
          </Link>{" "}
          <Link
            to="/hdmc-plus"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            HDMC+
          </Link>{" "}
          <button className=" min-w-48 xl:min-w-56 bg-[#125e84] text-white px-4 py-2 rounded-lg font-normal hover:bg-brand5/90 cursor-pointer transition-all duration-300 whitespace-nowrap hidden md:flex justify-center items-center gap-2">
            <FaCalendarCheck className="text-lg" />

            {t("header.bookAppointment")}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {" "}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              ref={sidebarRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[90vw] sm:w-1/2 bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto"
            >
              {/* Close Button */}
              <button
                className="self-end text-2xl mb-4"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

              <div className="flex  md:hidden items-center gap-2 justify-between mb-2 w-full">
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
                      {
                        languages.find((lang) => lang.code === selectedLang)
                          ?.name
                      }
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

              <div className="flex flex-col gap-2 text-lg mb-4">
                <button className="bg-[#125e84] text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-600 transition flex items-center gap-2 mt-4">
                  <FaUser className="text-lg" />
                  {t("header.personalAccount")}
                </button>
                <button className="border border-[#125e84] text-[#125e84] px-6 py-2 rounded-lg font-medium flex gap-2 items-center hover:bg-[#125e84]/10 cursor-pointer transition whitespace-nowrap">
                  <FaCalendarCheck className="text-lg" />

                  {t("header.bookAppointment")}
                </button>
              </div>

              <div className="flex flex-col mb-6">
                <label htmlFor="city" className="text-xs mb-1">
                  Select your City:
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border rounded-lg px-2 py-1"
                >
                  <option value="Moscow">Moscow</option>
                  <option value="Makhachkala">Makhachkala</option>
                </select>
              </div>

              <nav className="flex  flex-col gap-4 text-lg">
                <div>
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex items-center justify-between w-full"
                  >
                    {t("header.about")}
                    <FaChevronDown
                      className={`ml-2 transform transition ${
                        isAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 max-h-80 py-2  overflow-y-auto text-sm font-normal flex flex-col gap-4"
                      >
                        {aboutItems.map((a, idx) => (
                          <Link
                            key={idx}
                            to={a.path}
                            onClick={() => setIsOpen(false)}
                            className="block"
                          >
                            {a.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  to="/about#doctors"
                  className="text-left  whitespace-nowrap"
                >
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
                <Link
                  to="/about#patients"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  {t("header.forPatients")}
                </Link>{" "}
                <button
                  onClick={() => handleScrollToSection("#reviews")}
                  className="text-left  whitespace-nowrap"
                >
                  {" "}
                  {t("header.reviews")}
                </button>{" "}
                <Link to="/" className="  hover:underline whitespace-nowrap">
                  {" "}
                  {t("header.offers")}
                </Link>{" "}
                <button
                  onClick={() => handleScrollToSection("#contact")}
                  className="text-left   hover:underline whitespace-nowrap"
                >
                  {" "}
                  {t("header.contact")}
                </button>{" "}
                <Link to="/" className="  hover:underline whitespace-nowrap">
                  {" "}
                  IMETC
                </Link>{" "}
                <Link
                  to="/early-detection-program"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  {t("header.earlyDiagnosis")}
                </Link>{" "}
                <Link to="/" className="  hover:underline whitespace-nowrap">
                  {" "}
                  {t("header.expertise")}
                </Link>{" "}
                <Link to="/" className="  hover:underline whitespace-nowrap">
                  {" "}
                  Pathologica
                </Link>{" "}
                <Link
                  to="/hdmc-plus"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  HDMC+
                </Link>{" "}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
