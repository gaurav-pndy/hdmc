import React from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { TiLocationArrowOutline } from "react-icons/ti";

const AddressSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language; // e.g., 'ru' or 'en'

  const clinics = [
    {
      title: t("address.clinic1.title"),
      address: t("address.clinic1.address"),
      schedule: t("address.clinic1.schedule"),
      phone: "+7 (495) 514-20-58",
      mapUrl:
        "https://yandex.com/map-widget/v1/org/kvartal_west/161241477081/?indoorLevel=1&ll=37.456828%2C55.707299&utm_source=share&z=16",
    },
    {
      title: t("address.clinic2.title"),
      address: t("address.clinic2.address"),
      schedule: t("address.clinic2.schedule"),
      phone: "+7 (988) 204-55-75",
      mapUrl:
        "https://yandex.com/map-widget/v1/?ll=47.467719%2C42.982145&mode=whatshere&tab=inside&utm_source=share&whatshere%5Bpoint%5D=47.467977%2C42.982315&whatshere%5Bzoom%5D=17&z=18",
    },
  ];

  // Map language parameter for Yandex
  const mapLang = currentLang === "ru" ? "ru_RU" : "en_US";

  return (
    <section className="w-full bg-[#fafbfc] py-16">
      <div className="max-w-[87rem] text-center mx-auto px-4">
        <h2 className="text-brand1 text-center text-4xl font-bold mb-6">
          {t("address.title")}
        </h2>
        <p className="text-lg text-center text-brand1/80 mb-8 max-w-3xl mx-auto">
          {t("address.subtitle")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {clinics.map((clinic, idx) => (
            <React.Fragment key={idx}>
              <div className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col gap-3">
                <div className="flex items-start text-left gap-2 text-black text-lg mb-1">
                  <FaMapMarkerAlt className="mt-1.5 text-brand1" />
                  <div>
                    <h4 className="font-medium">{clinic.title}</h4>
                    <p className="text-brand1 text-sm">{clinic.address}</p>
                    <p className="text-brand1 text-sm">{clinic.schedule}</p>
                  </div>
                </div>

                <div className="flex text-black gap-2 mb-1">
                  <FaPhoneAlt className="text-brand1 mt-1.5" />
                  <span className="font-semibold">{clinic.phone}</span>
                </div>
                <div className="flex text-black gap-2 mb-1">
                  <TiLocationArrowOutline className="text-brand1 text-xl mt-1" />
                  <span className="font-semibold">{t("address.route")}</span>
                </div>

                <button className="bg-brand1 text-white font-semibold rounded-lg px-4 py-2.5 shadow hover:bg-brand5/90  cursor-pointer transition-all duration-300 text-sm w-full">
                  {t("address.button")}
                </button>
              </div>

              <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow">
                <iframe
                  src={`${clinic.mapUrl}&lang=${mapLang}`}
                  frameBorder="1"
                  allowFullScreen
                  width="100%"
                  height="100%"
                  title={clinic.title}
                ></iframe>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
