import React from "react";
import { useTranslation } from "react-i18next";
import { FaAddressCard, FaInfoCircle, FaHeartbeat } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuShield } from "react-icons/lu";

const PatientsInfo = () => {
  const { t } = useTranslation();

  const patientRights = [
    "forPatients.info.rights.rti1",
    "forPatients.info.rights.rti2",
    "forPatients.info.rights.rti3",
    "forPatients.info.rights.rti4",
    "forPatients.info.rights.rti5",
    "forPatients.info.rights.rti6",
    "forPatients.info.rights.rti7",
    "forPatients.info.rights.rti8",
    "forPatients.info.rights.rti9",
    "forPatients.info.rights.rti10",
    "forPatients.info.rights.rtc1",
    "forPatients.info.rights.rtc3",
    "forPatients.info.rights.rtc3",
    "forPatients.info.rights.res1",
    "forPatients.info.rights.res2",
    "forPatients.info.rights.res3",
    "forPatients.info.rights.res4",
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-brand1 mx-auto  text-4xl md:text-5xl font-bold mb-6 text-center ">
        {t("forPatients.info.title")}
      </h2>
      <div className="md:text-lg text-brand1/80 mb-8 max-w-3xl mx-auto text-center">
        {t("forPatients.info.subtitle")}
      </div>
      {/* Contact Info */}
      <div className="bg-white border border-brand4/20 rounded-2xl p-6 mb-7 shadow-sm">
        <div className="flex items-center  gap-3 mb-6 text-brand1">
          <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-lg shrink-0 mt-1">
            <FiPhone className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold ">
              {t("forPatients.info.contactHeading")}
            </h3>
            <p className="text-brand1/80 md:text-lg">
              {t("forPatients.info.contactSubheading")}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.heading1")}
          </h4>

          <div className="text-brand1/90 md:text-lg">
            <p>{t("forPatients.info.contact1")}</p>
            <p>
              <span className="font-medium">
                {" "}
                {t("forPatients.info.address")}:{" "}
              </span>
              {t("forPatients.info.moscowAddress1")}
            </p>
            <p>
              {" "}
              <span className="font-medium">
                {t("forPatients.info.phone")}:
              </span>{" "}
              +7 (495) 514-20-58
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.heading2")}
          </h4>

          <div className="text-brand1/90 md:text-lg">
            <p>{t("forPatients.info.contact2")}</p>
            <p>
              <span className="font-medium">
                {" "}
                {t("forPatients.info.hotline")}:{" "}
              </span>
              8-800-500-18-35
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.heading3")}
          </h4>

          <div className="text-brand1/90 md:text-lg">
            <p>{t("forPatients.info.contact3")}</p>
            <p>
              <span className="font-medium">
                {" "}
                {t("forPatients.info.consulting")}:{" "}
              </span>
              8-800-555-49-43
            </p>
          </div>
        </div>
      </div>
      {/* Patient Rights */}
      <div className="bg-white border border-brand4/20 rounded-2xl p-6 mb-7 shadow-sm">
        <div className="flex items-center  gap-3 mb-6 text-brand1">
          <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-lg shrink-0 mt-1">
            <LuShield className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold ">
              {t("forPatients.info.rightsTitle")}
            </h3>
            <p className="text-brand1/80 md:text-lg">
              {t("forPatients.info.rightsSubtitle")}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.rights.heading1")}
          </h4>

          <ul className="text-brand1/90 md:text-lg list-disc list-inside space-y-1.5 ml-4">
            {patientRights.slice(0, 10).map((right, index) => (
              <li key={index}>{t(right)}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.rights.heading2")}
          </h4>

          <ul className="text-brand1/90 md:text-lg list-disc list-inside space-y-1.5 ml-4">
            {patientRights.slice(10, 13).map((right, index) => (
              <li key={index}>{t(right)}</li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.rights.heading3")}
          </h4>

          <ul className="text-brand1/90 md:text-lg list-disc list-inside space-y-1.5 ml-4">
            {patientRights.slice(13, 17).map((right, index) => (
              <li key={index}>{t(right)}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Types of Medical Care */}
      <div className="bg-white border border-brand4/20 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center  gap-3 mb-6 text-brand1">
          <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-lg shrink-0 mt-1">
            <LuShield className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold ">
              {t("forPatients.info.careTitle")}
            </h3>
            <p className="text-brand1/80 md:text-lg">
              {t("forPatients.info.careSubtitle")}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.care.heading1")}
          </h4>

          <ul className="text-brand1/90 md:text-lg list-disc list-inside space-y-1.5 ml-4">
            <li>{t("forPatients.info.care.type1")}</li>
            <li>{t("forPatients.info.care.type2")}</li>
            <li>{t("forPatients.info.care.type3")}</li>
            <li>{t("forPatients.info.care.type4")}</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.care.heading2")}
          </h4>

          <ul className="text-brand1/90 md:text-lg list-disc list-inside space-y-1.5 ml-4">
            <li>{t("forPatients.info.care.form1")}</li>
            <li>{t("forPatients.info.care.form2")}</li>
            <li>{t("forPatients.info.care.form3")}</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg md:text-xl mb-2 ">
            {t("forPatients.info.care.heading3")}
          </h4>

          <p className="text-brand1/90 md:text-lg ml-4">
            {t("forPatients.info.care.riskInfo")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatientsInfo;
