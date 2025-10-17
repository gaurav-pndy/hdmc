import React from "react";
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

const AboutInfo = () => {
  const { t } = useTranslation();

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
              {t("about.info.companyName")}
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
                <span className="bg-[#63cacc]/50 text-[#125e84] font-medium rounded-full text-xs px-3 py-1 w-fit">
                  {t("about.info.moscow")}
                </span>
                <p className="text-[#125e84]/80 text-sm leading-relaxed">
                  г. Москва, Аминьевское шоссе, д.6, подъезд 1
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="bg-[#63cacc]/50 text-[#125e84] font-medium rounded-full text-xs px-3 py-1 w-fit">
                  {t("about.info.makhachka")}
                </span>
                <p className="text-[#125e84]/80 text-sm leading-relaxed">
                  Республика Дагестан, г. Махачкала, проспект Али-Гаджи
                  Акушинского, д. 7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-b border-[#63cacc]/20 pb-8 mb-8">
          <div className="space-y-1">
            <div className="font-bold text-[#63cacc] text-sm uppercase tracking-wide">
              ОГРН
            </div>
            <div className="text-[#125e84]/90 font-medium">1234567898123</div>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-[#63cacc] text-sm uppercase tracking-wide">
              ИНН
            </div>
            <div className="text-[#125e84]/90 font-medium">7712345678</div>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-[#63cacc] text-sm uppercase tracking-wide">
              КПП
            </div>
            <div className="text-[#125e84]/90 font-medium">771201081</div>
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
              Иванов Иван Иванович, Петров Петр Петрович
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
                Генеральный директор: Сидоров Алексей Викторович
              </li>
              <li className="leading-relaxed">
                Главный врач: Кузнецова Елена Николаевна
              </li>
              <li className="leading-relaxed">Медицинский совет</li>
              <li className="leading-relaxed">
                Административно-хозяйственный отдел
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
            <div className="text-[#125e84]/80 leading-relaxed ml-8 space-y-1">
              <p>Пн-Пт: 8:00 – 20:00</p>
              <p>Сб: 9:00 – 18:00</p>
              <p>Вс: 9:00 – 15:00</p>
              <p className="font-semibold text-[#63cacc] mt-3">
                КТ диагностика: 24/7
              </p>
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
            <div className="text-[#125e84]/80 leading-relaxed ml-8 space-y-1">
              <p className="font-medium">+7 (495) 123-45-67</p>
              <p>info@healthdirect.ru</p>
              <p>www.healthdirect.ru</p>
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
            <div className="text-[#125e84]/80 leading-relaxed space-y-1">
              <p>
                Прием граждан главным врачом: каждый вторник с 15:00 до 17:00
              </p>
              <p>Запись по телефону: +7 (495) 123-45-67 доб. 101</p>
              <p>Email: chief@healthdirect.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
