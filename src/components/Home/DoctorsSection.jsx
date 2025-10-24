import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { FiFilter, FiSearch } from "react-icons/fi";
import { doctorsData } from "../../data/doctors";
import { Link } from "react-router-dom";
import WaveBackground from "../WaveBackground";

const DoctorsSection = () => {
  const { t } = useTranslation();
  const [type, setType] = useState("All");
  const [specialization, setSpecialization] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Helper to get a translated value (array or string)
  const getT = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : String(value).split("<br/>");
  };

  // Prepare doctor list with translations
  const cards = doctorsData.map((doc) => ({
    ...doc,
    name: t(doc.name),
    location: t(doc.location),
    tags: getT(doc.tags),
    langs: t(doc.langs),
    desc: getT(doc.desc).join(" "),
  }));

  // Filtering logic
  const allTags = Array.from(new Set(cards.flatMap((doc) => doc.tags || [])));

  const filteredDoctors = cards.filter((doc) => {
    const matchesType =
      type === "All" ||
      (type === "Personal" && doc.type === "personal") ||
      (type === "Remote" && doc.type === "remote");

    const matchesSpecialization =
      specialization === "All" ||
      (doc.tags && doc.tags.includes(specialization));

    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesSpecialization && matchesSearch;
  });

  return (
    <section
      id="doctors"
      className="w-full py-16 flex flex-col items-start max-w-[87rem] px-4 mx-auto"
    >
      {/* --- Header --- */}
      <section className="relative rounded-xl  mx-auto grid md:grid-cols-2 items-center overflow-hidden md:min-h-96">
        <WaveBackground
          stroke="rgba(51, 186, 189,"
          custStyle="md:w-1/2 h-[65%] right-0 bottom-0"
        />

        <div className="w-full   h-full z-30 -mb-[1px] md:-mb-0">
          <div className="relative w-full  h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://www.shutterstock.com/shutterstock/videos/3441635569/preview/stock-footage-multi-cultural-medical-team-wearing-scrubs-with-digital-tablet-walking-along-corridor-in-modern.webm"
              alt="Doctors video"
              className="max-w-2xl w-full md:min-h-96 h-full object-cover md:rounded-tr-2xl md:rounded-br-2xl"
            />
            <div
              className={`absolute   inset-0 bg-gradient-to-t via-30%  md:bg-gradient-to-l from-[#5279be] via-[#5279be]/40 to-transparent  `}
            ></div>
          </div>
        </div>
        <div className="text-left md:text-right w-full md:min-h-96  h-full z-30 p-6 pb-16 md:p-6 lg:pr-10 xl:pr-12 bg-gradient-to-t md:bg-gradient-to-l from-[#27407f] to-[#5279be]">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            {t("doctors.title")}
          </h2>
          <p
            className="md:text-lg text-white"
            dangerouslySetInnerHTML={{ __html: t("doctors.subtitle") }}
          ></p>
        </div>
      </section>

      {/* --- Filter Bar --- */}
      <div className="w-full bg-white border border-brand4/30 rounded-xl shadow-sm mt-10 md:mt-12">
        {/* Top Row: Search + Toggle Filters */}
        {/* <div className="flex flex-col md:flex-row items-center gap-3 px-4 py-3 border-b border-brand4/20">
          <input
            type="text"
            placeholder={t("doctors.filter.enterName")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border border-brand4/40 rounded-lg px-4 py-2.5 outline-none text-brand1 placeholder:text-brand1/50 focus:border-brand1 transition-all"
          />
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center gap-2 text-brand1 text-sm font-medium hover:text-brand1/80 transition"
          >
            <FiFilter />{" "}
            {showFilters
              ? t("doctors.filter.hideFilters")
              : t("doctors.filter.refine")}
          </button>
          <button className="flex items-center gap-2 bg-brand1 text-white font-medium rounded-lg px-6 py-2.5 hover:bg-brand1/90 transition">
            <FiSearch className="text-lg" /> {t("doctors.filter.start")}
          </button>
        </div> */}

        {/* Expandable Filters */}
        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 py-4 grid md:grid-cols-2 gap-6 bg-brand4/10"
          >
            {/* Type of Consultation */}
            <div>
              <label className="text-sm font-medium text-brand1 block mb-2">
                Type of consultation
              </label>
              <div className="flex gap-3">
                {[
                  { label: t("doctors.filter.all"), value: "All" },
                  { label: t("doctors.filter.personal"), value: "Personal" },
                  { label: t("doctors.filter.remote"), value: "Remote" },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setType(item.value)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                      type === item.value
                        ? "bg-brand1 text-white border-brand1"
                        : "bg-white border-brand4 text-brand1 hover:bg-brand4/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Specialization */}
            <div>
              <label className="text-sm font-medium text-brand1 block mb-2">
                {t("doctors.filter.specialization")}
              </label>
              <select
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full border border-brand4/40 rounded-lg px-3 py-2.5 text-sm text-brand1 outline-none focus:border-brand1 transition-all bg-white"
              >
                <option value="All">{t("doctors.filter.all")}</option>
                {allTags.map((tag, i) => (
                  <option key={i} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Navigation Buttons --- */}
      <div className="flex items-center justify-end w-full mt-6 gap-2">
        <button className="prev-btn bg-white rounded px-3 py-2 border border-brand4 text-brand1 transition hover:bg-brand4/10">
          &lt;
        </button>
        <button className="next-btn bg-white rounded px-3 py-2 border border-brand4 text-brand1 transition hover:bg-brand4/10">
          &gt;
        </button>
      </div>

      {/* --- Swiper with Filtered Results --- */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 4 },
        }}
        className="w-full h-full overflow-visible mt-2"
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
      >
        {filteredDoctors.map((doc) => (
          <SwiperSlide key={doc.id}>
            <Link
              to={`/doctors/${doc.id}`}
              className="bg-white my-4 rounded-xl hover:scale-105 hover:bg-brand4/20 hover:shadow-lg cursor-pointer shadow-md transition-all duration-300 p-4 flex flex-col justify-between min-h-[34rem]"
            >
              <div className="flex-1 flex flex-col">
                {/* Add avatar or doctor photo here if you have */}
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-52 object-cover rounded-lg"
                />
                <div className="font-bold text-black text-xl mt-4 mb-3">
                  {doc.name}
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {doc.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full border border-brand4 text-black text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-brand1 text-sm mb-3 line-clamp-2">
                  {doc.desc}
                </div>
                <div className="flex flex-row gap-4 items-center mb-3 text-brand1/90 text-xs">
                  <span className="flex items-center">
                    <FaLocationDot className="mr-1" /> {doc.location}
                  </span>
                </div>
                <div className="text-brand1/60 text-xs">
                  {t("doctors.languages")}:
                </div>
                <div className="text-brand1 text-sm font-medium">
                  {doc.langs}
                </div>
              </div>
              <button className="mt-4 px-6 py-2.5 w-full bg-brand1 hover:bg-brand5/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand1/30 text-center">
                {t("doctors.viewProfile")}
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DoctorsSection;
