import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { FiFilter, FiSearch } from "react-icons/fi";

const DoctorsSection = () => {
  const { t } = useTranslation();
  const doctors = t("doctors.doctorsList", { returnObjects: true });
  const cards = Object.values(doctors);

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Filter states
  const [type, setType] = useState("All");
  const [specialization, setSpecialization] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter logic
  const filteredDoctors = cards.filter((doc) => {
    const matchesType =
      type === "All" ||
      (type === "Personal" && doc.type === "personal") ||
      (type === "Remote" && doc.type === "remote");

    const matchesSpecialization =
      specialization === "All" || doc.tags.includes(specialization);

    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesSpecialization && matchesSearch;
  });

  // Extract unique tags for specialization dropdown
  const allTags = Array.from(new Set(cards.flatMap((doc) => doc.tags || [])));

  return (
    <section className="w-full py-16 flex flex-col items-start max-w-[87rem] px-4 mx-auto">
      {/* --- Header --- */}
      <div className="max-w-[87rem] text-center mx-auto px-4">
        <h2 className="text-brand1 text-4xl md:text-5xl font-bold mb-6">
          {t("doctors.title")}
        </h2>
        <p
          className="text-lg md:text-xl text-brand1/90 max-w-5xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t("doctors.subtitle") }}
        ></p>
      </div>

      {/* --- Filter Bar --- */}
      <div className="w-full bg-white border border-brand4/30 rounded-xl shadow-sm mt-10">
        {/* Top Row: Search + Toggle Filters */}
        <div className="flex flex-col md:flex-row items-center gap-3 px-4 py-3 border-b border-brand4/20">
          <input
            type="text"
            placeholder="Enter specialization or doctor's name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border border-brand4/40 rounded-lg px-4 py-2.5 outline-none text-brand1 placeholder:text-brand1/50 focus:border-brand1 transition-all"
          />
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center gap-2 text-brand1 text-sm font-medium hover:text-brand1/80 transition"
          >
            <FiFilter /> {showFilters ? "Hide filters" : "Refine search"}
          </button>
          <button className="flex items-center gap-2 bg-brand1 text-white font-medium rounded-lg px-6 py-2.5 hover:bg-brand1/90 transition">
            <FiSearch className="text-lg" /> Start Search
          </button>
        </div>

        {/* Expandable Filters */}
        <AnimatePresence>
          {showFilters && (
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
                  {["All", "Personal", "Remote"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setType(item)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        type === item
                          ? "bg-brand1 text-white border-brand1"
                          : "bg-white border-brand4 text-brand1 hover:bg-brand4/20"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialization */}
              <div>
                <label className="text-sm font-medium text-brand1 block mb-2">
                  Doctor specialization
                </label>
                <select
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full border border-brand4/40 rounded-lg px-3 py-2.5 text-sm text-brand1 outline-none focus:border-brand1 transition-all bg-white"
                >
                  <option value="All">All</option>
                  {allTags.map((tag, i) => (
                    <option key={i} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
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
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 4 },
        }}
        className="w-full h-full overflow-visible mt-4"
      >
        {filteredDoctors.map((doc, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white my-4 rounded-xl hover:scale-105 hover:bg-brand4/20 hover:shadow-lg cursor-pointer shadow-md transition-all duration-300 p-4 flex flex-col justify-between min-h-[34rem]">
              <div className="flex-1 flex flex-col">
                <img
                  src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?w=600&auto=format&fit=crop&q=60"
                  alt="Doctor"
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
                <div className="text-brand1/60 text-xs">Languages:</div>
                <div className="text-brand1 text-sm font-medium">
                  {Array.isArray(doc.langs) ? doc.langs.join(", ") : doc.langs}
                </div>
              </div>
              <button
                onClick={() => setSelectedDoctor(doc)}
                className="mt-4 px-6 py-2.5 w-full bg-brand1 hover:bg-brand5/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand1/30"
              >
                {t("doctors.viewProfile")}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Doctor Popup Modal (same as before) --- */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden max-h-[90vh] h-full overflow-y-scroll p-4 md:p-6"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?w=1200&auto=format&fit=crop&q=80"
                  alt={selectedDoctor.name}
                  className="w-80 h-80 rounded-full object-cover mx-auto"
                />
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-brand1 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl text-center font-bold text-brand1 mb-2">
                  {selectedDoctor.name}
                </h3>
                <p className="text-brand1/70 mb-3 text-center">
                  {selectedDoctor.location}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {selectedDoctor.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 border border-brand4 rounded-full text-brand1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  className="text-brand1/90 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: selectedDoctor.desc }}
                />
                <div className="text-sm text-brand1/80">
                  <p>
                    <strong>Languages:</strong>{" "}
                    {Array.isArray(selectedDoctor.langs)
                      ? selectedDoctor.langs.join(", ")
                      : selectedDoctor.langs}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DoctorsSection;
