import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHeart,
  FaBrain,
  FaEye,
  FaBone,
  FaUserMd,
  FaShieldVirus,
  FaStethoscope,
} from "react-icons/fa";
import { doctorsData } from "../../data/doctors";

// List of specialties for grid
const SPECIALTY_OPTIONS = [
  {
    key: "cardiology",
    icon: <FaHeart className="text-brand4 text-2xl" />,
    label: "Cardiology",
    desc: "Diseases of the heart and blood vessels",
    filterTags: ["Cardiologist"],
  },
  {
    key: "neurology",
    icon: <FaBrain className="text-brand4 text-2xl" />,
    label: "Neurology",
    desc: "Nervous system",
    filterTags: ["Neurologist"],
  },
  {
    key: "ophthalmology",
    icon: <FaEye className="text-brand4 text-2xl" />,
    label: "Ophthalmology",
    desc: "Eye diseases",
    filterTags: ["Ophthalmologist"],
  },
  {
    key: "orthopedics",
    icon: <FaBone className="text-brand4 text-2xl" />,
    label: "Orthopedics",
    desc: "Musculoskeletal system",
    filterTags: ["Orthopedist"],
  },
  {
    key: "therapy",
    icon: <FaStethoscope className="text-brand4 text-2xl" />,
    label: "Therapy",
    desc: "General diseases",
    filterTags: ["Therapist"],
  },
  {
    key: "oncology",
    icon: <FaShieldVirus className="text-brand4 text-2xl" />,
    label: "Oncology",
    desc: "Diagnosis and treatment of cancer",
    filterTags: ["Oncologist"],
  },
];

const TelemedicineExperts = () => {
  const { t } = useTranslation();
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    SPECIALTY_OPTIONS[0].key
  );

  // Find active specialty object by key
  const activeSpecialty = SPECIALTY_OPTIONS.find(
    (item) => item.key === selectedSpecialty
  );

  // Filter doctors by tag(s) for selected specialty
  const filteredDoctors = doctorsData.filter((doc) => {
    // Grab array from i18n, fallback to []
    const tags = t(doc.tags, { returnObjects: true }) || [];
    return (
      tags &&
      activeSpecialty.filterTags.some((tag) =>
        tags.some(
          (doctorTag) => doctorTag.trim().toLowerCase() === tag.toLowerCase()
        )
      )
    );
  });

  return (
    <section className="w-full bg-white py-12 px-2">
      {/* Specialties selection */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-brand1 mb-2">
        {t("telemedicine.specialties.header")}
      </h2>
      <div className="text-center text-brand1/70 mb-10">
        {t("telemedicine.specialties.subtitle")}
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto mb-14">
        {SPECIALTY_OPTIONS.map((spec) => (
          <button
            key={spec.key}
            className={`flex items-start gap-4 p-6 rounded-2xl border-2 shadow text-left transition-all duration-200 cursor-pointer h-full bg-white ${
              spec.key === selectedSpecialty
                ? "border-brand1 ring-2 ring-brand1/30 bg-brand4/5"
                : "border-brand4/10 hover:border-brand1"
            }`}
            onClick={() => setSelectedSpecialty(spec.key)}
            aria-pressed={spec.key === selectedSpecialty}
          >
            <div className="mt-0.5">{spec.icon}</div>
            <div>
              <div className="font-semibold text-brand1 text-lg">
                {spec.label}
              </div>
              <div className="text-brand1/60 text-sm">{spec.desc}</div>
            </div>
          </button>
        ))}
      </div>
      {/* Doctors for selected specialty */}
      <div className="bg-[#f6fcfd] py-16 px-4 mt-0">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-brand1 mb-2">
          {t("telemedicine.doctors.header")}
        </h3>
        <div className="text-center text-brand1/70 mb-10">
          {t("telemedicine.doctors.subtitle")}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {filteredDoctors.length === 0 ? (
            <div className="text-brand1/70 text-lg py-10">
              {t("telemedicine.doctors.noDoctors")}
            </div>
          ) : (
            filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-brand4/20 shadow p-6 w-full max-w-xs flex flex-col items-start"
              >
                <div className="flex gap-4 items-center mb-2">
                  <div className="bg-brand4/20 text-brand1 font-bold text-lg rounded-full w-14 h-14 flex items-center justify-center uppercase">
                    {doc.id.slice(0, 3)}
                  </div>
                  <div>
                    <div className="font-semibold text-brand1 text-base">
                      {t(doc.name)}
                    </div>
                    <div className="text-brand4 text-sm">{t(doc.location)}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-1">
                  {t(doc.tags, { returnObjects: true }).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-brand4/10 rounded-full px-3 py-1 text-xs text-brand1 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-brand4/80 text-xs mb-2">
                  {t(doc.langs)}
                </div>
                <div
                  className="text-brand1/90 text-sm mb-2"
                  dangerouslySetInnerHTML={{ __html: t(doc.desc) }}
                />
                {/* Optionally: Add rating stars or "View profile" button here */}
              </div>
            ))
          )}
        </div>
        {/* View all experts button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-2 rounded-xl border border-brand1 bg-white text-brand1 font-semibold text-base shadow hover:bg-brand1/10">
            {t("telemedicine.doctors.viewAll")}
            <FaUserMd />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TelemedicineExperts;
