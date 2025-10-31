import React, { use, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHospitalAlt,
  FaMapMarkerAlt,
  FaClipboardList,
  FaUserTie,
  FaRegClock,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaCalendarCheck,
  FaHospital,
} from "react-icons/fa";

const AboutInfo = ({ city }) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
    <div className="space-y-8">
      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-[#63cacc]/20 shadow-sm p-6 ">
        {/* Header Section */}
        <div className="flex lg:items-center gap-4 mb-8">
          <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-xl shrink-0 shadow-md mt-2 lg:mt-0">
            <FaHospital className="text-white text-2xl" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[#125e84] mb-1">
              {t("about.info.title")}
            </h3>
            <p className="text-[#125e84]/70 text-base md:text-lg">
              {t("about.info.subtitle")}
            </p>
          </div>
        </div>

        {/* Company Name & Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-[#63cacc]/20 pb-8 mb-8">
          {/* Company Name */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FaClipboardList className="text-2xl text-[#63cacc]" />
              <span className="font-semibold text-lg text-[#125e84]">
                {t("about.info.fullName")}
              </span>
            </div>
            <p className="text-[#125e84]/80 leading-relaxed ml-9">
              {city === "Moscow"
                ? t("about.info.companyName1")
                : t("about.info.companyName2")}
            </p>
          </div>

          {/* Locations */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-2xl text-[#63cacc]" />
              <span className="font-semibold text-lg text-[#125e84]">
                {t("about.info.locations")}
              </span>
            </div>
            <div className="space-y-4 ml-9">
              <div className="flex flex-col gap-2">
                {/* <span className="bg-[#63cacc]/50 text-[#125e84] font-medium rounded-full text-xs px-3 py-1 w-fit">
                  {t("about.info.moscow")}
                </span> */}
                <p className="text-[#125e84]/80 text-sm leading-relaxed">
                  {city === "Moscow"
                    ? t("about.info.moscowAddress")
                    : t("about.info.makhachkalaAddress")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-b border-[#63cacc]/20 pb-8 mb-8">
          <div className="space-y-1">
            <div className="font-bold text-[#63cacc] text-sm uppercase tracking-wide">
              {t("about.info.ogrn")}
            </div>
            <div className="text-[#125e84]/90 font-medium">
              {city === "Moscow"
                ? "1247700412068, 04.06.2024"
                : "1190571014545, 11.11.2019"}
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-[#63cacc] text-sm uppercase tracking-wide">
              {t("about.info.tax")}
            </div>
            <div className="text-[#125e84]/90 font-medium">
              {city === "Moscow" ? "774301001" : "0572024746"}
            </div>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-[#63cacc] text-sm uppercase tracking-wide">
              {t("about.info.checkpoint")}
            </div>
            <div className="text-[#125e84]/90 font-medium">
              {city === "Moscow" ? "774301001" : "057201001"}
            </div>
          </div>
        </div>

        {/* Ownership & Management */}
        <div className="border-b border-[#63cacc]/20 pb-8 mb-8 space-y-6">
          {/* Owners */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FaUserTie className="text-xl text-[#63cacc]" />
              <span className="font-semibold text-lg text-[#125e84]">
                {t("about.info.owners")}
              </span>
            </div>
            <p className="text-[#125e84]/80 leading-relaxed ml-8">
              {t("about.info.ownersDesc")}
            </p>
          </div>

          {/* Management */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FaClipboardList className="text-xl text-[#63cacc]" />
              <span className="font-semibold text-lg text-[#125e84]">
                {t("about.info.management")}
              </span>
            </div>
            <ul className="ml-8 text-[#125e84]/80 space-y-2 list-disc list-outside">
              <li className="leading-relaxed">
                {city === "Moscow"
                  ? t("about.info.point3")
                  : t("about.info.point1")}
              </li>
              <li className="leading-relaxed">
                {city === "Moscow"
                  ? t("about.info.point4")
                  : t("about.info.point2")}
              </li>
            </ul>
          </div>
        </div>

        {/* Schedule and Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 mb-8 border-b border-[#63cacc]/20">
          {/* Work Schedule */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaRegClock className="text-xl text-[#63cacc]" />
              <span className="font-semibold text-lg text-[#125e84]">
                {t("about.info.schedule")}
              </span>
            </div>
            <div className="text-[#125e84]/80 leading-relaxed ml-8 ">
              {t("about.info.scheduleDesc")}
            </div>
          </div>

          {/* Service Contacts */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-xl text-[#63cacc]" />
              <span className="font-semibold text-lg text-[#125e84]">
                {t("about.info.serviceContacts")}
              </span>
            </div>
            <div className="text-[#125e84]/80 leading-relaxed ml-8 ">
              <p className="font-medium">
                {city === "Moscow" ? "+7 (499) 685 3000" : ""}{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Chief Doctor Reception */}
        <div className="flex items-start gap-4 bg-[#63cacc]/10 rounded-xl p-6">
          <FaCalendarCheck className="text-[#63cacc] text-2xl shrink-0 mt-1" />
          <div className="space-y-2">
            <div className="font-semibold text-lg text-[#125e84]">
              {t("about.info.chiefReception")}
            </div>
            <div className="text-[#125e84]/80 leading-relaxed ">
              {t("about.info.receptionDesc")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
