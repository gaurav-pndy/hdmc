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
  FaArrowRight,
  FaUserPlus,
  FaUserFriends,
  FaClipboardList,
  FaTag,
  FaMoneyBillAlt,
  FaFemale,
  FaDna,
  FaUserMd,
  FaHeartbeat,
  FaBrain,
  FaEye,
  FaUserNurse,
  FaUserTie,
  FaBone,
  FaStethoscope,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "../utils/i18n";
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TbLicense } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { IoDocumentText, IoInformation } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import {
  MdFamilyRestroom,
  MdMedicalServices,
  MdOutlineLocalOffer,
  MdPsychology,
} from "react-icons/md";
import { ImUsers } from "react-icons/im";
import {
  GiBrain,
  GiHeartOrgan,
  GiKidneys,
  GiMedicines,
  GiNoseFront,
  GiPsychicWaves,
  GiScalpel,
  GiStomach,
} from "react-icons/gi";
import { BsThermometerHalf } from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";

const Header = ({ city, setCity }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // mobile dropdown
  const [isAboutOpen, setIsAboutOpen] = useState(false); // mobile dropdown
  const [isPatientsOpen, setIsPatientsOpen] = useState(false); // mobile dropdown
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const [showCityInit, setShowCityInit] = useState(false);
  const [showCitySelect, setShowCitySelect] = useState(false);

  const [showServices, setShowServices] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showPatientsDropdown, setShowPatientsDropdown] = useState(false);
  const [showDoctorsDropdown, setShowDoctorsDropdown] = useState(false);
  const [activeSub, setActiveSub] = useState();

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
      path: "/services/service1",
      label: t("header.service1"),
      icon: "/services/1.svg",
    },
    {
      path: "/services/service2",
      label: t("header.service2"),
      icon: "/services/2.svg",
    },
    {
      path: "/services/service3",
      label: t("header.service3"),
      icon: "/services/3.svg",
    },
    {
      path: "/services/service4",
      label: t("header.service4"),
      icon: "/services/4.svg",
    },
    {
      path: "/services/service5",
      label: t("header.service5"),
      icon: "/services/5.svg",
    },
    {
      path: "/services/service6",
      label: t("header.service6"),
      icon: "/services/6.svg",
    },
    {
      path: "/services/service7",
      label: t("header.service7"),
      icon: "/services/7.svg",
    },
    {
      path: "/services/service8",
      label: t("header.service8"),
      icon: "/services/8.svg",
    },
    {
      path: "/services/service9",
      label: t("header.service9"),
      icon: "/services/9.svg",
    },
    {
      path: "/services/service10",
      label: t("header.service10"),
      icon: "/services/10.svg",
    },
    {
      path: "/services/service11",
      label: t("header.service11"),
      icon: "/services/11.svg",
    },
    {
      path: "/services/service12",
      label: t("header.service12"),
      icon: "/services/12.svg",
    },
  ];

  const aboutItems = [
    {
      path: "/about#info",
      label: t("header.about1"),
      icon: <FaHospital className="text-xl text-white" />,
    },
    {
      path: "/about#licenses",
      label: t("header.about2"),
      icon: <TbLicense className="text-xl text-white" />,
    },
    {
      path: "/about#contacts",
      label: t("header.about3"),
      icon: <BiSolidContact className="text-xl text-white" />,
    },
    {
      path: "/about#patients",
      label: t("header.about4"),
      icon: <FaUserFriends className="text-xl text-white" />,
    },
    {
      path: "/about#privacy",
      label: t("header.about5"),
      icon: <LuShield className="text-xl text-white" />,
    },

    {
      path: "/about#offer",
      label: t("header.about6"),
      icon: <MdOutlineLocalOffer className="text-xl text-white" />,
    },
    {
      path: "/about#vacancies",
      label: t("header.about7"),
      icon: <FaUserPlus className="text-xl text-white" />,
    },
    {
      path: "/about#partners",
      label: t("header.about8"),
      icon: <FaUsers className="text-xl text-white" />,
    },
  ];

  const patientItems = [
    {
      path: "#appointment",
      label: t("header.patient1"),
      icon: <ImUsers className="text-xl text-white" />,
    },
    {
      path: "#preparation",
      label: t("header.patient2"),
      icon: <FaClipboardList className="text-xl text-white" />,
    },
    {
      path: "#offers",
      label: t("header.patient3"),
      icon: <FaTag className="text-xl text-white" />,
    },
    {
      path: "#insurance",
      label: t("header.patient4"),
      icon: <MdMedicalServices className="text-xl text-white" />,
    },
    {
      path: "#blog",
      label: t("header.patient5"),
      icon: <IoDocumentText className="text-xl text-white" />,
    },
    {
      path: "#price",
      label: t("header.patient6"),
      icon: <FaMoneyBillAlt className="text-xl text-white" />,
    },
  ];

  const doctorsItems = [
    {
      label: t("header.doctorsDrop.d1"),
      icon: <FaFemale className=" text-white" />,
      subItems: [
        {
          category: t("header.doctorsDrop.subItems.h1"),
          items: [
            {
              label: t("header.doctorsDrop.subItems.s1"),
              path: "/doctors#specialization1",
            },
            {
              label: t("header.doctorsDrop.subItems.s2"),
              path: "/doctors#specialization2",
            },
          ],
        },
        {
          category: t("header.doctorsDrop.subItems.h2"),
          items: [
            {
              label: t("header.doctorsDrop.subItems.s3"),
              path: "/doctors#specialization3",
            },
            {
              label: t("header.doctorsDrop.subItems.s4"),
              path: "/doctors#specialization4",
            },
            {
              label: t("header.doctorsDrop.subItems.s5"),
              path: "/doctors#specialization5",
            },
            {
              label: t("header.doctorsDrop.subItems.s6"),
              path: "/doctors#specialization6",
            },
            {
              label: t("header.doctorsDrop.subItems.s7"),
              path: "/doctors#specialization7",
            },
            {
              label: t("header.doctorsDrop.subItems.s8"),
              path: "/doctors#specialization8",
            },
            {
              label: t("header.doctorsDrop.subItems.s9"),
              path: "/doctors#specialization9",
            },
            {
              label: t("header.doctorsDrop.subItems.s10"),
              path: "/doctors#specialization10",
            },
            {
              label: t("header.doctorsDrop.subItems.s11"),
              path: "/doctors#specialization11",
            },
            {
              label: t("header.doctorsDrop.subItems.s12"),
              path: "/doctors#specialization12",
            },
            {
              label: t("header.doctorsDrop.subItems.s13"),
              path: "/doctors#specialization13",
            },
            {
              label: t("header.doctorsDrop.subItems.s14"),
              path: "/doctors#specialization14",
            },
            {
              label: t("header.doctorsDrop.subItems.s15"),
              path: "/doctors#specialization15",
            },
          ],
        },
      ],
    },
    {
      path: "/doctors#specialization16",
      label: t("header.doctorsDrop.d2"),
      icon: <GiStomach className=" text-white" />,
    },
    {
      path: "/doctors#specialization17",
      label: t("header.doctorsDrop.d3"),
      icon: <FaDna className=" text-white" />,
    },
    {
      path: "/doctors#specialization18",
      label: t("header.doctorsDrop.d4"),
      icon: <GiMedicines className=" text-white" />,
    },
    {
      path: "/doctors#specialization19",
      label: t("header.doctorsDrop.d5"),
      icon: <FaUserMd className=" text-white" />,
    },
    {
      path: "/doctors#specialization20",
      label: t("header.doctorsDrop.d7"),
      icon: <FaBrain className=" text-white" />,
    },
    {
      path: "/doctors#specialization21",
      label: t("header.doctorsDrop.d8"),
      icon: <GiBrain className=" text-white" />,
    },
    {
      path: "/doctors#specialization22",
      label: t("header.doctorsDrop.d9"),
      icon: <GiKidneys className=" text-white" />,
    },
    {
      path: "/doctors#specialization23",
      label: t("header.doctorsDrop.d10"),
      icon: <MdFamilyRestroom className=" text-white" />,
    },
    {
      path: "/doctors#specialization24",
      label: t("header.doctorsDrop.d11"),
      icon: <GiNoseFront className=" text-white" />,
    },
    {
      path: "/doctors#specialization25",
      label: t("header.doctorsDrop.d12"),
      icon: <FaEye className=" text-white" />,
    },
    {
      path: "/doctors#specialization26",
      label: t("header.doctorsDrop.d13"),
      icon: <FaUserNurse className=" text-white" />,
    },
    {
      path: "/doctors#specialization27",
      label: t("header.doctorsDrop.d14"),
      icon: <GiPsychicWaves className=" text-white" />,
    },
    {
      path: "/doctors#specialization28",
      label: t("header.doctorsDrop.d15"),
      icon: <MdPsychology className=" text-white" />,
    },
    {
      path: "/doctors#specialization29",
      label: t("header.doctorsDrop.d16"),
      icon: <FaUserTie className=" text-white" />,
    },
    {
      path: "/doctors#specialization30",
      label: t("header.doctorsDrop.d17"),
      icon: <GiHeartOrgan className=" text-white" />,
    },
    {
      path: "/doctors#specialization31",
      label: t("header.doctorsDrop.d18"),
      icon: <BsThermometerHalf className=" text-white" />,
    },
    {
      path: "/doctors#specialization32",
      label: t("header.doctorsDrop.d19"),
      icon: <FaUserFriends className=" text-white" />,
    },
    {
      path: "/doctors#specialization33",
      label: t("header.doctorsDrop.d20"),
      icon: <FaBone className=" text-white" />,
    },
    {
      path: "/doctors#specialization34",
      label: t("header.doctorsDrop.d21"),
      icon: <GiScalpel className=" text-white" />,
    },
    {
      path: "/doctors#specialization35",
      label: t("header.doctorsDrop.d22"),
      icon: <FaUserMd className=" text-white" />,
    },
    {
      path: "/doctors#specialization36",
      label: t("header.doctorsDrop.d23"),
      icon: <AiOutlineUserSwitch className=" text-white" />,
    },
    {
      path: "/doctors#specialization37",
      label: t("header.doctorsDrop.d24"),
      icon: <FaStethoscope className=" text-white" />,
    },
    {
      path: "/doctors#specialization38",
      label: t("header.doctorsDrop.d25"),
      icon: <GiScalpel className=" text-white" />,
    },
    {
      path: "/doctors#specialization39",
      label: t("header.doctorsDrop.d26"),
      icon: <GiScalpel className=" text-white" />,
    },
    {
      path: "/doctors#specialization40",
      label: t("header.doctorsDrop.d27"),
      icon: <GiScalpel className=" text-white" />,
    },
    {
      path: "/doctors#specialization41",
      label: t("header.doctorsDrop.d28"),
      icon: <GiScalpel className=" text-white" />,
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

  const handleScrollToPatientsSection = (sectionId) => {
    if (isOpen) setIsOpen(false);
    if (location.pathname === "/for-patients") {
      // Already on homepage → just scroll
      scrollToSection(sectionId);
    } else {
      // Go to homepage first, then scroll
      navigate("/for-patients", { state: { scrollTo: sectionId } });
    }
  };

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
            {city === "Moscow" ? (
              <div className=" items-center gap-1   whitespace-nowrap">
                <h6 className="font-semibold "> {t("header.moscow")} </h6>
                <p
                  className="text-xs text-brand1 leading-4"
                  dangerouslySetInnerHTML={{
                    __html: t("header.moscowAddress"),
                  }}
                ></p>
              </div>
            ) : (
              <div className=" items-center gap-1  whitespace-nowrap">
                <h6 className="font-semibold"> {t("header.makhachkala")} </h6>
                <p
                  className="text-xs text-brand1 leading-4"
                  dangerouslySetInnerHTML={{
                    __html: t("header.makhachkalaAddress"),
                  }}
                ></p>
              </div>
            )}
          </div>

          {/* Socials & Language Switch */}
          <div className="hidden lg:flex items-center gap-2 justify-end min-w-0">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <img src="/max.png" alt="" className="w-6" />
            </a>
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
            <button
              onClick={() => handleScrollToSection("#about")}
              className="flex items-center cursor-pointer gap-1 hover:text-brand2 transition-all duration-300"
            >
              {t("header.about")} <FaChevronDown className="text-sm mt-1" />
            </button>

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
                      className="block  group  text-wrap   transition-all relative duration-300 rounded-lg"
                    >
                      <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-gradient-to-br from-[#125e84] to-[#33babd] group-hover:from-brand2 group-hover:to-brand1 group-hover:rotate-15 group-hover:scale-110 flex items-center justify-center shrink-0   transition-all duration-300 mb-1">
                        {a.icon}
                      </div>
                      <p className="group-hover:text-brand2 text-sm xl:text-base font-normal">
                        {a.label}
                      </p>
                      <div className="absolute right-2 top-3 overflow-hidden w-6">
                        <FaArrowRight className="text-lg text-brand2 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            onMouseEnter={() => setShowDoctorsDropdown(true)}
            onMouseLeave={() => {
              setShowDoctorsDropdown(false);
              setActiveSub(null);
            }}
            className="relative whitespace-nowrap cursor-pointer"
          >
            <button
              onClick={() => handleScrollToSection("#doctors")}
              className="flex items-center gap-1 hover:text-brand2 transition-all duration-300 cursor-pointer"
            >
              {t("header.doctors")} <FaChevronDown className="text-sm mt-1" />
            </button>

            <AnimatePresence>
              {showDoctorsDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 grid grid-rows-7  grid-flow-col gap-8  bg-white shadow-lg shadow-black/40 rounded-xl p-6  z-50 w-3xl xl:w-6xl font-normal"
                >
                  {doctorsItems.map((d, idx) => (
                    <div
                      key={idx}
                      className={`${!d.subItems && "group"} relative`}
                      onMouseEnter={() => d.subItems && setActiveSub(d.label)}
                      onMouseLeave={() => d.subItems && setActiveSub(null)}
                    >
                      <Link
                        to={d.path || "#"}
                        className="flex items-center gap-2 group-hover:text-brand2 text-sm xl:text-base font-medium transition-all duration-300"
                      >
                        <div className="w-8  h-8 rounded-full bg-gradient-to-br from-[#125e84] to-[#33babd] group-hover:from-brand2 group-hover:to-brand1 group-hover:rotate-15 group-hover:scale-110 flex items-center justify-center shrink-0   transition-all duration-300">
                          {d.icon}
                        </div>
                        <p
                          className={`${
                            d.subItems && "text-[#0a3449]"
                          } group-hover:text-brand2 pr-8 text-sm xl:text-base text-wrap font-normal`}
                        >
                          {d.label}
                        </p>
                        {d.subItems ? (
                          <FaChevronRight className="text-sm mt-1 " />
                        ) : (
                          <div className="absolute right-0 top-2 overflow-hidden w-6">
                            <FaArrowRight className="text-lg text-brand2 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                          </div>
                        )}
                      </Link>

                      {/* Submenu for oncologists */}
                      <AnimatePresence>
                        {activeSub === d.label && d.subItems && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-[90%]   top-0  bg-[#f3f5f7] border border-gray-400 rounded-xl shadow-lg shadow-black/30 p-4 w-xl xl:w-3xl z-50 flex flex-col gap-4 justify-between"
                          >
                            {d.subItems.map((cat, i) => (
                              <div key={i} className="mb-2">
                                <h4 className="text-brand1 font-semibold mb-4 text-xl">
                                  {cat.category}
                                </h4>
                                <ul className="grid grid-cols-2 gap-4">
                                  {cat.items.map((item, j) => (
                                    <li key={j}>
                                      <Link
                                        to={item.path}
                                        className="block group text-wrap text-gray-700 hover:text-brand2 transition-all relative pr-8"
                                      >
                                        {item.label}
                                        <div className="absolute right-2 top-2 overflow-hidden w-6">
                                          <FaArrowRight className="text-lg text-brand2 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
                  className="absolute left-1/2 -translate-x-1/2 mt-2 grid grid-cols-4 gap-6 xl:gap-10 bg-white shadow-lg shadow-black/40 rounded-xl p-6 z-40 w-3xl xl:w-6xl"
                >
                  {services.map((s, idx) => (
                    <Link
                      key={idx}
                      to={s.path}
                      className="block group text-wrap transition-all duration-300 rounded-lg relative"
                    >
                      <div className="flex flex-col items-start gap-1">
                        <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-gradient-to-br from-[#125e84] to-[#33babd] group-hover:from-brand2 group-hover:to-brand1 group-hover:rotate-12 group-hover:scale-110 flex items-center justify-center shrink-0 transition-all duration-300 ">
                          <img
                            src={s.icon}
                            alt={s.label}
                            className="w-4 xl:w-6 h-4 xl:h-6 object-contain brightness-0 invert"
                          />
                        </div>

                        <div className=" ">
                          <p className="group-hover:text-brand2 text-sm xl:text-base transition-colors font-normal duration-300">
                            {s.label}
                          </p>
                        </div>

                        {/* Animated Arrow - appears from left on hover */}
                        <div className="absolute right-2 top-3 overflow-hidden w-6">
                          <FaArrowRight className="text-lg text-brand2 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            onMouseEnter={() => setShowPatientsDropdown(true)}
            onMouseLeave={() => setShowPatientsDropdown(false)}
            className="relative   whitespace-nowrap cursor-pointer"
          >
            <Link
              to="/for-patients"
              className="flex items-center cursor-pointer gap-1 hover:text-brand2 transition-all duration-300"
            >
              {t("header.forPatients")}{" "}
              <FaChevronDown className="text-sm mt-1" />
            </Link>

            {/* Animated dropdown */}
            <AnimatePresence>
              {showPatientsDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 grid grid-cols-3 gap-6 xl:gap-10 bg-white shadow-lg shadow-black/40 rounded-xl p-6 z-40 w-2xl xl:w-4xl"
                >
                  {patientItems.map((p, idx) => (
                    <button
                      onClick={() => handleScrollToPatientsSection(p.path)}
                      key={idx}
                      className="block  group  text-wrap   transition-all relative duration-300 rounded-lg"
                    >
                      <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-gradient-to-br from-[#125e84] to-[#33babd] group-hover:from-brand2 group-hover:to-brand1 group-hover:rotate-15 group-hover:scale-110 flex items-center justify-center shrink-0   transition-all duration-300 mb-1">
                        {p.icon}
                      </div>
                      <p className="group-hover:text-brand2 text-sm xl:text-base text-left font-normal">
                        {p.label}
                      </p>
                      <div className="absolute right-2 top-3 overflow-hidden w-6">
                        <FaArrowRight className="text-lg text-brand2 transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => handleScrollToSection("#reviews")}
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.reviews")}{" "}
          </button>{" "}
          <Link
            to="/hdmc-plus"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            HDMC+
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
            to="/telemedicine-consultation"
            className="  hover:text-brand2 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            {t("header.telemedicine")}{" "}
          </Link>{" "}
          <Link
            to="/early-detection-program"
            className="   hover:text-brand2 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            {t("header.earlyDiagnosis")}{" "}
          </Link>{" "}
          <Link
            to="/center-of-expertise"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            {t("header.expertise")}{" "}
          </Link>{" "}
          <a
            href="https://pathologica.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className=" whitespace-nowrap hover:text-brand2 transition-all duration-300 cursor-pointer"
          >
            {" "}
            Pathologica
          </a>{" "}
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
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <img src="/max.png" alt="" className="w-7" />
                  </a>
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
                <div>
                  {/* Button to toggle main Doctors section */}
                  <button
                    onClick={() => setIsDoctorsOpen(!isDoctorsOpen)}
                    className="flex items-center justify-between w-full"
                  >
                    {t("header.doctors")}
                    <FaChevronDown
                      className={`ml-2 transform transition ${
                        isDoctorsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expandable Section */}
                  <AnimatePresence>
                    {isDoctorsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 max-h-80 py-2  overflow-y-auto text-sm font-normal flex flex-col gap-4"
                      >
                        {doctorsItems.map((item, idx) =>
                          item.subItems ? (
                            <div key={idx}>
                              {/* Button for categories like Онкологи */}
                              <button
                                onClick={() =>
                                  setOpenSubCategory(
                                    openSubCategory === item.label
                                      ? null
                                      : item.label
                                  )
                                }
                                className="flex items-center justify-between w-full"
                              >
                                <div className="">
                                  <span>{item.label}</span>
                                </div>
                                <FaChevronDown
                                  className={`ml-2 transform transition ${
                                    openSubCategory === item.label
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>

                              {/* Sub-category expansion */}
                              <AnimatePresence>
                                {openSubCategory === item.label && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="ml-4 mt-2 flex flex-col gap-3"
                                  >
                                    {item.subItems.map((sub, i) => (
                                      <div key={i}>
                                        <p className="font-semibold text-[15px] mb-1">
                                          {sub.category}
                                        </p>
                                        <div className="flex ml-2 flex-col gap-2 ">
                                          {sub.items.map((doctor, j) => (
                                            <Link
                                              key={j}
                                              to={doctor.path}
                                              onClick={() => setIsOpen(false)}
                                              className="block hover:underline"
                                            >
                                              {doctor.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className=""
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
                <div>
                  <button
                    onClick={() => setIsPatientsOpen(!isPatientsOpen)}
                    className="flex items-center justify-between w-full"
                  >
                    {t("header.forPatients")}
                    <FaChevronDown
                      className={`ml-2 transform transition ${
                        isPatientsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isPatientsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 max-h-80 py-2  overflow-y-auto text-sm font-normal flex flex-col gap-4"
                      >
                        {patientItems.map((p, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleScrollToPatientsSection(p.path)
                            }
                            className="block text-left"
                          >
                            {p.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button
                  onClick={() => handleScrollToSection("#reviews")}
                  className="text-left  whitespace-nowrap"
                >
                  {" "}
                  {t("header.reviews")}
                </button>{" "}
                <Link
                  to="/hdmc-plus"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  HDMC+
                </Link>{" "}
                <button
                  onClick={() => handleScrollToSection("#contact")}
                  className="text-left   hover:underline whitespace-nowrap"
                >
                  {" "}
                  {t("header.contact")}
                </button>{" "}
                <Link
                  to="/telemedicine-consultation"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  {t("header.telemedicine")}
                </Link>{" "}
                <Link
                  to="/early-detection-program"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  {t("header.earlyDiagnosis")}
                </Link>{" "}
                <Link
                  to="/center-of-expertise"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  {t("header.expertise")}
                </Link>{" "}
                <a
                  href="https://pathologica.ru/"
                  target="_blank"
                  className="  hover:underline whitespace-nowrap"
                >
                  {" "}
                  Pathologica
                </a>{" "}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
