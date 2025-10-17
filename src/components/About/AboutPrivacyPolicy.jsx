import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFileAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const AboutPrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-[#63cacc]/20 shadow-sm px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-xl shrink-0 shadow-md">
            <FaFileAlt className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#125e84] mb-1">
              {t("about.privacy.title")}
            </h3>
            <p className="text-[#125e84]/70 text-base md:text-lg">
              {t("about.privacy.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Policy Body */}
      <div className="bg-white rounded-2xl border border-[#63cacc]/20 shadow-sm p-6 md:p-8 space-y-8">
        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              1
            </span>
            {t("about.privacy.section1Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9">
            {t("about.privacy.section1Text")}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              2
            </span>
            {t("about.privacy.section2Title")}
          </h3>
          <ul className="ml-9 list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc]">
            <li className="leading-relaxed">{t("about.privacy.purpose1")}</li>
            <li className="leading-relaxed">{t("about.privacy.purpose2")}</li>
            <li className="leading-relaxed">{t("about.privacy.purpose3")}</li>
            <li className="leading-relaxed">{t("about.privacy.purpose4")}</li>
            <li className="leading-relaxed">{t("about.privacy.purpose5")}</li>
            <li className="leading-relaxed">{t("about.privacy.purpose6")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              3
            </span>
            {t("about.privacy.section3Title")}
          </h3>
          <ul className="ml-9 list-disc text-[#125e84]/80 space-y-2 marker:text-[#63cacc]">
            <li className="leading-relaxed">{t("about.privacy.cat1")}</li>
            <li className="leading-relaxed">{t("about.privacy.cat2")}</li>
            <li className="leading-relaxed">{t("about.privacy.cat3")}</li>
            <li className="leading-relaxed">{t("about.privacy.cat4")}</li>
            <li className="leading-relaxed">{t("about.privacy.cat5")}</li>
            <li className="leading-relaxed">{t("about.privacy.cat6")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              4
            </span>
            {t("about.privacy.section4Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9 mb-3">
            {t("about.privacy.section4Desc")}
          </p>
          <ul className="ml-9 list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc]">
            <li className="leading-relaxed">{t("about.privacy.law1")}</li>
            <li className="leading-relaxed">{t("about.privacy.law2")}</li>
            <li className="leading-relaxed">{t("about.privacy.law3")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              5
            </span>
            {t("about.privacy.section5Title")}
          </h3>
          <p className="text-[#125e84]/80  leading-relaxed ml-9 mb-3">
            {t("about.privacy.section5Desc")}
          </p>
          <h4 className="text-[#125e84]  font-semibold ml-9 mb-2">
            {t("about.privacy.storagePeriods")}:
          </h4>
          <ul className="ml-9 list-disc text-[#125e84]/80 space-y-2 marker:text-[#63cacc]">
            <li className="leading-relaxed">{t("about.privacy.storage1")}</li>
            <li className="leading-relaxed">{t("about.privacy.storage2")}</li>
            <li className="leading-relaxed">{t("about.privacy.storage3")}</li>
            <li className="leading-relaxed">{t("about.privacy.storage4")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              6
            </span>
            {t("about.privacy.section6Title")}
          </h3>
          <h4 className="text-[#125e84]  font-semibold ml-9 mb-2">
            {t("about.privacy.section6Desc")}:
          </h4>
          <ul className="ml-9 list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc]">
            <li className="leading-relaxed">{t("about.privacy.rights1")}</li>
            <li className="leading-relaxed">{t("about.privacy.rights2")}</li>
            <li className="leading-relaxed">{t("about.privacy.rights3")}</li>
            <li className="leading-relaxed">{t("about.privacy.rights4")}</li>
            <li className="leading-relaxed">{t("about.privacy.rights5")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#125e84] mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg  font-bold text-[#63cacc] shrink-0">
              7
            </span>
            {t("about.privacy.section7Title")}
          </h3>
          <ul className="ml-9 list-disc text-[#125e84]/80  space-y-2 marker:text-[#63cacc]">
            <li className="leading-relaxed">{t("about.privacy.security1")}</li>
            <li className="leading-relaxed">{t("about.privacy.security2")}</li>
            <li className="leading-relaxed">{t("about.privacy.security3")}</li>
            <li className="leading-relaxed">{t("about.privacy.security4")}</li>
          </ul>
        </div>
      </div>

      {/* Appeal Contacts */}
      <div className="bg-[#63cacc]/10 rounded-2xl p-6 border border-[#63cacc]/30">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex h-10 w-10 items-center justify-center bg-[#63cacc]/20 rounded-full shrink-0">
            <FaInfoCircle className="text-[#63cacc] text-xl" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-[#125e84] mb-1">
              {t("about.privacy.contactsTitle")}
            </div>
            <p className="text-[#125e84]/70  leading-relaxed">
              {t("about.privacy.contactsInfo")}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 ml-14">
          <div className="flex items-center gap-2 ">
            <div className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/20 rounded-lg shrink-0">
              <FaEnvelope className="text-[#63cacc] text-sm" />
            </div>
            <a
              href="mailto:privacy@healthdirect.ru"
              className="text-[#125e84]/90 hover:text-[#63cacc] transition-colors font-medium"
            >
              privacy@healthdirect.ru
            </a>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/20 rounded-lg shrink-0">
              <FaPhoneAlt className="text-[#63cacc] text-sm" />
            </div>
            <span className="text-[#125e84]/90 font-medium">
              +7 (495) 123-45-67, доб. 105
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#63cacc]/5 rounded-xl p-4 border border-[#63cacc]/20">
        <p className="text-[#125e84]/70  italic leading-relaxed">
          {t("about.privacy.footer")}
        </p>
      </div>
    </div>
  );
};

export default AboutPrivacyPolicy;
