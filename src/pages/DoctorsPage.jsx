import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

import { Link, useLocation } from "react-router-dom";
import { doctorsData } from "../data/doctors";
import WaveBackground from "../components/WaveBackground";
import { specializationsData } from "../data/specializations";

const DoctorsPage = () => {
  const { t } = useTranslation();
  const [type, setType] = useState("All");
  const [specialization, setSpecialization] = useState();
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

  const specializations = [
    {
      label: t("header.doctorsDrop.d1"),
      subItems: [
        {
          category: t("header.doctorsDrop.subItems.h1"),
          items: [
            {
              label: t("header.doctorsDrop.subItems.s1"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s2"),
              path: "/doctors/radiotherapist",
            },
          ],
        },
        {
          category: t("header.doctorsDrop.subItems.h2"),
          items: [
            {
              label: t("header.doctorsDrop.subItems.s3"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s4"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s5"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s6"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s7"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s8"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s9"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s10"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s11"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s12"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s13"),
              path: "/doctors",
            },
            {
              label: t("header.doctorsDrop.subItems.s14"),
              path: "/doctors",
            },
            { label: t("header.doctorsDrop.subItems.s15"), path: "/doctors" },
          ],
        },
      ],
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d2"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d3"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d4"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d5"),
    },

    {
      path: "/doctors",
      label: t("header.doctorsDrop.d7"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d8"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d9"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d10"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d11"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d12"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d13"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d14"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d15"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d16"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d17"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d18"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d19"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d20"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d21"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d22"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d23"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d24"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d25"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d26"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d27"),
    },
    {
      path: "/doctors",
      label: t("header.doctorsDrop.d28"),
    },
  ];

  // Helper to flatten nested specialization structure and return all unique labels
  const getAllSpecializationObjects = (specializations) => {
    const result = [];

    const traverse = (node) => {
      if (!node) return;
      if (node.label && !node.subItems && !node.items) result.push(node.label);
      if (node.items && Array.isArray(node.items)) node.items.forEach(traverse);
      if (node.subItems && Array.isArray(node.subItems))
        node.subItems.forEach(traverse);
    };

    // Start from subItems of the first, skipping root heading, and also add others as before
    if (specializations[0]?.subItems) {
      specializations[0].subItems.forEach(traverse);
    }
    specializations.slice(1).forEach(traverse);

    // Remove duplicates, then create objects with sequential ID and label
    const uniqueLabels = Array.from(new Set(result));
    return uniqueLabels.map((label, idx) => ({
      id: `specialization${idx + 1}`,
      label,
    }));
  };

  const specializationOptions = getAllSpecializationObjects(specializations);

  const idToLabelMap = Object.fromEntries(
    specializationOptions.map((opt) => [opt.id, opt.label])
  );

  const filteredDoctors = cards.filter((doc) => {
    const matchesType =
      type === "All" ||
      (type === "Personal" && doc.type === "personal") ||
      (type === "Remote" && doc.type === "remote");

    const matchesSpecialization =
      !specialization || // initial state, possibly undefined
      specialization === "All" ||
      (doc.tags && doc.tags.includes(idToLabelMap[specialization]));

    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesSpecialization && matchesSearch;
  });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hashKey = location.hash.replace("#", "");
      const specExists = specializationOptions.some((s) => s.id === hashKey);
      if (specExists) setSpecialization(hashKey);
      console.log(specExists);
      console.log(specialization);
    }
  }, [location.hash]);

  return (
    <section
      id="doctors"
      className="w-full py-12 flex flex-col items-start max-w-[87rem] px-4 mx-auto"
    >
      <section className="relative w-full rounded-xl mb-12 mx-auto grid md:grid-cols-2 items-center overflow-hidden md:min-h-96">
        <WaveBackground
          stroke="rgba(150, 150, 150,"
          custStyle="md:w-1/2 h-1/2 left-0 top-0"
        />
        {/* Rest of your content */}
        <div
          className={` w-full md:min-h-80 flex flex-col justify-center h-full  p-6 pb-16 md:p-6 lg:p-10 xl:p-12 bg-gradient-to-b md:bg-gradient-to-r from-[#362d29] to-[#6f6763]  `}
        >
          <FaUserDoctor className="text-white relative z-40 text-5xl mb-4 drop-shadow-lg" />
          <h1 className="text-white relative z-40 text-4xl md:text-6xl xl:text-7xl font-bold mb-4 ">
            {t("doctors.title")}
          </h1>
        </div>
        <div className="w-full   h-full z-30 -mt-[1px] md:-mt-0">
          <div className="relative w-full  h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://www.shutterstock.com/shutterstock/videos/1072064371/preview/stock-footage-close-up-hands-of-therapist-gp-and-patient-doctor-strokes-arm-of-ill-woman-consoling-after-news.webm"
              alt="Services illustration"
              className="max-w-2xl w-full md:min-h-96 max-h-[28rem] h-full object-cover md:rounded-tr-2xl md:rounded-br-2xl"
            />
            <div
              className={`absolute   inset-0 bg-gradient-to-b via-30%  md:bg-gradient-to-r from-[#6f6763] via-[#6f6763]/40 to-transparent  `}
            ></div>
          </div>
        </div>
      </section>
      {/* --- Filter Bar --- */}
      <div className="w-full bg-white border border-brand4/30 rounded-xl shadow-sm ">
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
                {t("doctors.filter.consultType")}
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
                {specializationOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Swiper with Filtered Results --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        {filteredDoctors.map((doc) => (
          <Link
            key={doc.id}
            to={`/doctors/${doc.id}`}
            className="bg-white my-4 rounded-xl hover:scale-105 hover:bg-brand4/20 hover:shadow-lg cursor-pointer shadow-md transition-all duration-300 p-4 flex flex-col justify-between min-h-[34rem]"
          >
            <div className="flex-1 flex flex-col">
              {/* Add avatar or doctor photo here if you have */}
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-60 object-top object-cover rounded-lg"
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
              <div className="text-brand1 text-sm font-medium">{doc.langs}</div>
            </div>
            <button className="mt-4 px-6 py-2.5 w-full bg-brand1 hover:bg-brand5/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand1/30 text-center">
              {t("doctors.viewProfile")}
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DoctorsPage;
