import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaLanguage, FaStar } from "react-icons/fa";
import { doctorsData } from "../data/doctors";
import { i } from "framer-motion/client";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const { t } = useTranslation();
  const doctor = doctorsData.find((doc) => doc.id === doctorId);
  if (!doctor) {
    return (
      <div className="max-w-5xl mx-auto mt-10 p-8 text-center">
        <div className="text-brand1 text-xl font-semibold">
          {t("doctors.notFound")}
        </div>
      </div>
    );
  }

  const [expanded, setExpanded] = useState();

  const name = t(doctor.name);
  const location = t(doctor.location);
  const tags = t(doctor.tags, { returnObjects: true });
  const langs = t(doctor.langs);
  const descHtml = t(doctor.desc);
  let aboutText;
  if (doctor.aboutText) {
    aboutText = t(doctor.aboutText);
  }
  let membershipInt;
  let membershipRus;
  if (doctor.membershipInt && doctor.membershipRus) {
    membershipInt = t(doctor.membershipInt, { returnObjects: true });
    membershipRus = t(doctor.membershipRus, { returnObjects: true });
  }
  let awards;
  if (doctor.awards) {
    awards = t(doctor.awards, { returnObjects: true });
  }
  let education;
  let experience;
  if (doctor.education) {
    education = t(doctor.education, { returnObjects: true });
  }
  if (doctor.experience) {
    experience = t(doctor.experience, { returnObjects: true });
  }
  let skills;
  if (doctor.skills) {
    skills = t(doctor.skills, { returnObjects: true });
  }
  let qualifications;
  if (doctor.qualifications) {
    qualifications = t(doctor.qualifications, { returnObjects: true });
  }
  let reviews;
  if (doctor.reviews) {
    reviews = t(doctor.reviews, { returnObjects: true });
  }
  let videos;
  if (doctor.videos) {
    videos = doctor.videos;
  }

  const TAB_LIST = [
    { key: "about", labelKey: "doctors.tabs.tab1" },
    { key: "experience", labelKey: "doctors.tabs.tab2" },
    { key: "activities", labelKey: "doctors.tabs.tab3" },
    { key: "reviews", labelKey: "doctors.tabs.tab4" },
    { key: "video", labelKey: "doctors.tabs.tab5" },
  ];

  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    activities: useRef(null),
    reviews: useRef(null),
    video: useRef(null),
  };

  // Scroll to section
  const handleTabClick = (key) => {
    const target = sectionRefs[key]?.current;
    if (target) {
      const topOffset =
        target.getBoundingClientRect().top + window.scrollY - 200; // 100px top margin
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand4/10 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10">
        {/* Sticky/fixed doctor card */}
        <aside className="md:w-80 flex-shrink-0 mb-8 md:mb-0">
          <div className="md:sticky md:top-48 flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-xl border border-brand4/10 overflow-hidden mb-6 w-full">
              <img
                src={doctor.image}
                alt={name}
                className="w-full h-full object-cover aspect-square rounded-2xl"
              />
            </div>
            <button className="w-full bg-brand1 text-white rounded-2xl py-3 font-semibold text-lg mb-2 hover:bg-brand5 transition-all shadow">
              {t("doctors.bookAppt")}
            </button>
            <button className="w-full border-2 border-brand1 text-brand1 rounded-2xl py-3 font-semibold text-lg bg-white hover:bg-brand4/10 transition-all shadow">
              {t("doctors.onlineConsult")}
            </button>
          </div>
        </aside>

        {/* Scrollable doctor details */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-3xl shadow-xl border border-brand4/10 px-6 md:px-10 py-8">
            <div className="flex">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand1 mb-4">
                {name}
              </h1>
              <p className="flex-1 whitespace-nowrap text-brand1/80 text-lg font-semibold">
                {" "}
                0 {t("doctors.reviews")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.isArray(tags)
                ? tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-brand4/20 text-brand1 rounded-full text-base font-semibold border border-brand4/30"
                    >
                      {tag}
                    </span>
                  ))
                : null}
            </div>
            {/* Info cards with icons and brand colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-brand4/10 rounded-xl border border-brand4/20">
                <div className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 from-[#125e84] to-[#33babd] bg-gradient-to-br rounded-xl">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-brand1/60 uppercase tracking-wide mb-1">
                    {t("doctors.location")}
                  </div>
                  <div className="text-brand1 md:text-lg font-medium">
                    {location}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-brand4/10 rounded-xl border border-brand4/20">
                <div className="flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#c668a9] to-[#af6ca5] rounded-xl">
                  <FaLanguage className="text-white text-2xl" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-brand1/60 uppercase tracking-wide mb-1">
                    {t("doctors.languages")}
                  </div>
                  <div className="text-brand1 md:text-lg font-medium">
                    {langs}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="prose max-w-none text-brand1 text-lg mb-10"
              dangerouslySetInnerHTML={{ __html: descHtml }}
            />
          </div>
          <div className="mt-8 bg-white rounded-3xl shadow-xl border border-brand4/10 px-6 md:px-10 py-8">
            {/* Tab navigation */}
            <nav className="flex gap-6 mb-5 overflow-x-auto scrollbar-none px-2">
              {TAB_LIST.map((tab) => (
                <button
                  key={tab.key}
                  className="font-semibold text-brand1 px-1 pb-2 border-b-2 border-transparent hover:border-brand1 transition whitespace-nowrap hover:text-brand1 focus:outline-none uppercase text-sm cursor-pointer"
                  onClick={() => handleTabClick(tab.key)}
                >
                  {t(tab.labelKey)}
                </button>
              ))}
            </nav>
            {/* Tab sections (IDs/refs for scroll target) */}
            <section ref={sectionRefs.about} className="pt-2 pb-6 scroll-mt-28">
              <h2 className="text-xl md:text-3xl font-semibold text-brand1 mb-2">
                {t("doctors.tabs.tab1")}
              </h2>
              <div className="text-gray-700">
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: aboutText }}
                ></div>

                {membershipInt && membershipRus && (
                  <div className="mt-6">
                    <h2 className="font-bold text-2xl mb-3 text-brand1">
                      Memberships
                    </h2>
                    <h3 className="text-lg md:text-xl text-black font-semibold  mb-2">
                      International
                    </h3>
                    <ul className="space-y-2">
                      {membershipInt.map((item, i) => (
                        <li key={i} className="">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-lg text-black md:text-xl font-semibold  mb-2 mt-4">
                      Russian
                    </h3>
                    <ul className="space-y-2">
                      {membershipRus.map((item, i) => (
                        <li key={i} className="">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {awards && (
                  <div>
                    <h3 className="mt-6 text-2xl font-bold text-brand1 mb-2">
                      Awards
                    </h3>
                    <ul>
                      {awards.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="mt-6 text-2xl font-bold text-brand1 mb-2">
                    Langauges
                  </h3>
                  <p>{langs}</p>
                </div>
              </div>
            </section>
            <section
              ref={sectionRefs.experience}
              className="pt-2 pb-6 scroll-mt-28"
            >
              <h2 className="text-xl md:text-3xl font-semibold text-brand1 mb-2">
                {t("doctors.tabs.tab2")}
              </h2>
              <div className="text-gray-700">
                {experience && (
                  <div>
                    <h3 className="mt-6 text-2xl font-bold text-brand1 mb-2">
                      Experience
                    </h3>
                    <ul>
                      {experience.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {education && (
                  <div>
                    <h3 className="mt-6 text-2xl font-bold text-brand1 mb-2">
                      Education
                    </h3>
                    <ul>
                      {education.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {qualifications && (
                  <div>
                    <h3 className="mt-6 text-2xl font-bold text-brand1 mb-2">
                      Qualifications
                    </h3>
                    <ul>
                      {qualifications.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {skills && (
                  <div>
                    <h3 className="mt-6 text-2xl font-bold text-brand1 mb-2">
                      Skills
                    </h3>
                    <ul>
                      {skills.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
            <section
              ref={sectionRefs.activities}
              className="pt-2 pb-6 scroll-mt-28"
            >
              <h2 className="text-xl md:text-3xl font-semibold text-brand1 mb-2">
                {t("doctors.tabs.tab3")}
              </h2>
              {/* <p className="text-brand1/80">[ {t("doctors.noCases")} ]</p> */}
            </section>
            <section
              ref={sectionRefs.reviews}
              className="pt-2 pb-6 scroll-mt-28"
            >
              <h2 className="text-xl md:text-3xl font-semibold text-brand1 mb-2">
                {t("doctors.tabs.tab4")}
              </h2>
              {reviews && (
                <div className="space-y-6 mt-6">
                  {reviews.map((review, i) => {
                    const isExpanded = expanded === i;
                    return (
                      <div
                        key={i}
                        className="p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg text-brand1">
                            {review.name}
                          </h3>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>

                        <div className="flex items-center gap-1 mb-3">
                          {Array(5)
                            .fill(0)
                            .map((_, index) => (
                              <FaStar
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            ))}
                        </div>

                        <p
                          className={`text-gray-700 leading-relaxed transition-all duration-300 ${
                            isExpanded ? "line-clamp-none" : "line-clamp-4"
                          }`}
                        >
                          {review.text}
                        </p>

                        {review.text.length > 200 && (
                          <button
                            onClick={() => setExpanded(isExpanded ? null : i)}
                            className="mt-2  font-medium hover:underline focus:outline-none"
                          >
                            {isExpanded ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
            <section ref={sectionRefs.video} className="pt-2 pb-2 scroll-mt-28">
              <h2 className="text-xl md:text-3xl font-semibold text-brand1 mb-2">
                {t("doctors.tabs.tab5")}
              </h2>
              {videos && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {videos.map((video, i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <iframe
                        src={video}
                        title={`Video ${i + 1}`}
                        allowFullScreen
                        className="w-full h-full border-none"
                      ></iframe>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorDetails;
