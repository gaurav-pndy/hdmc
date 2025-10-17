import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const contacts = [
  {
    title: "about.contacts.roszdravnadzor",
    subtitle: "about.contacts.roszdravnadzorDesc",
    address: "about.contacts.roszdravnadzorAddr",
    phone: "+7 (495) 698-45-38, 8 800 550 18 35",
    email: "info@roszdravnadzor.gov.ru",
  },
  {
    title: "about.contacts.minzdrav",
    subtitle: "about.contacts.minzdravDesc",
    address: "about.contacts.minzdravAddr",
    phone: "+7 (495) 627-24-00",
    email: "info@minzdrav.gov.ru",
  },
  {
    title: "about.contacts.rospotrebnadzor",
    subtitle: "about.contacts.rospotrebnadzorDesc",
    address: "about.contacts.rospotrebnadzorAddr",
    phone: "+7 (499) 973-26-90, 8 800 555 49 43",
    email: "depart@gsen.ru",
  },
];

const AboutContacts = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-[#63cacc]/20 shadow-sm px-6 py-6">
        <div className="flex lg:items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-[#125e84] to-[#33babd] rounded-xl shrink-0 shadow-md">
            <FaRegBuilding className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#125e84] mb-1">
              {t("about.contacts.title")}
            </h3>
            <p className="text-[#125e84]/70 text-base md:text-lg">
              {t("about.contacts.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Agency cards */}
      <div className="space-y-6">
        {contacts.map((org, idx) => (
          <div
            key={org.title}
            className="bg-white rounded-2xl border border-[#63cacc]/20 shadow-sm p-6 hover:border-[#63cacc]/40 transition-colors"
          >
            <div className="mb-4">
              <h3 className="font-bold text-lg text-[#125e84] mb-2">
                {t(org.title)}
              </h3>
              <p className="text-[#63cacc] text-sm font-medium">
                {t(org.subtitle)}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-[#63cacc] text-sm" />
                </div>
                <div className="flex-1">
                  <div className="text-[#125e84]/60 text-xs uppercase tracking-wide mb-1">
                    {t("about.contacts.address")}
                  </div>
                  <p className="text-[#125e84]/90 text-sm leading-relaxed">
                    {t(org.address)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg shrink-0 mt-0.5">
                  <FaPhoneAlt className="text-[#63cacc] text-sm" />
                </div>
                <div className="flex-1">
                  <div className="text-[#125e84]/60 text-xs uppercase tracking-wide mb-1">
                    {t("about.contacts.phone")}
                  </div>
                  <p className="text-[#125e84]/90 text-sm font-medium">
                    {org.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[#63cacc]/10 rounded-lg shrink-0 mt-0.5">
                  <FaEnvelope className="text-[#63cacc] text-sm" />
                </div>
                <div className="flex-1">
                  <div className="text-[#125e84]/60 text-xs uppercase tracking-wide mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${org.email}`}
                    className="text-[#125e84]/90 text-sm font-medium hover:text-[#63cacc] transition-colors hover:underline"
                  >
                    {org.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order of appeal notice */}
      <div className="bg-[#63cacc]/10 rounded-2xl p-6 flex items-start gap-4 border border-[#63cacc]/30">
        <div className="flex h-10 w-10 items-center justify-center bg-[#63cacc]/20 rounded-full shrink-0">
          <FaCheckCircle className="text-[#63cacc] text-xl" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[#125e84] mb-1">
            {t("about.contacts.appealOrderTitle")}
          </div>
          <p className="text-[#125e84]/70 text-sm leading-relaxed">
            {t("about.contacts.appealOrderText")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContacts;
