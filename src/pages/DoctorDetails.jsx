import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { doctorsData } from "../data/doctors";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const { t } = useTranslation();

  const doctor = doctorsData.find((doc) => doc.id === doctorId);
  if (!doctor) {
    return (
      <div className="max-w-5xl mx-auto mt-10 p-8 text-center">
        <div className="text-[#125e84] text-xl font-semibold">
          {t("doctors.notFound")}
        </div>
      </div>
    );
  }

  // Prepare translated fields
  const name = t(doctor.name);
  const location = t(doctor.location);
  const tags = t(doctor.tags, { returnObjects: true });
  const langs = t(doctor.langs);
  const descHtml = t(doctor.desc);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main card */}
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#125e84]/5 via-[#33babd]/5 to-[#c668a9]/5 rounded-3xl transform rotate-1"></div>

          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header accent */}
            <div className="h-2 bg-gradient-to-r from-[#125e84] via-[#33babd] to-[#c668a9]"></div>

            {/* Doctor header section */}
            <div className="p-6 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 xl:gap-12 mb-10 pb-10 border-b-2 border-gray-100">
                {/* Profile image with decorative ring */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c668a9] to-[#af6ca5] rounded-2xl transform rotate-6 opacity-20"></div>
                  <img
                    src={doctor.image}
                    alt={name}
                    className="relative w-full h-full  md:w-60 md:h-60 xl:w-72 xl:h-72 object-cover rounded-2xl shadow-xl ring-4 ring-white"
                  />
                </div>

                {/* Doctor info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#125e84] mb-4">
                    {name}
                  </h1>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(tags) ? (
                      tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-1.5 bg-gradient-to-r from-[#33babd]/20 to-[#63cacc]/20 text-[#125e84] rounded-full text-sm md:text-base font-semibold border border-[#33babd]/20"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="px-4 py-1.5 bg-gradient-to-r from-[#33babd]/10 to-[#63cacc]/10 text-[#125e84] rounded-full text-sm font-semibold border border-[#33babd]/20">
                        {tags}
                      </span>
                    )}
                  </div>

                  {/* Info cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#c668a9] to-[#af6ca5] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg
                          className="w-5 md:w-8 h-5 md:h-8"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          {t("doctors.location") || "Location"}
                        </div>
                        <div className="text-[#125e84] md:text-lg font-medium">
                          {location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#c668a9] to-[#af6ca5] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg
                          className="w-5 md:w-8 h-5 md:h-8"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          {t("doctors.languages") || "Languages"}
                        </div>
                        <div className="text-[#125e84] md:text-lg font-medium">
                          {langs}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#c668a9] to-[#af6ca5] rounded-xl flex items-center justify-center text-white">
                    <svg
                      className="w-5 md:w-8 h-5 md:h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#125e84]">
                    {t("doctors.about") || "About the Doctor"}
                  </h2>
                </div>
                <div
                  className="prose prose-lg max-w-none md:text-lg text-gray-700 leading-relaxed [&>p]:mb-4"
                  dangerouslySetInnerHTML={{ __html: descHtml }}
                />
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t-2 border-gray-100">
                <button className="mt-4 px-6 py-3 md:text-lg w-full bg-brand1 hover:bg-brand5/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand1/30 text-center">
                  {t("doctors.bookAppt") || "Book Appointment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
