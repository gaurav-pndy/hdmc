import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { TiLocationArrowOutline } from "react-icons/ti";

const YandexMap = ({ center, zoom, placemarks, language }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=${language}`;
    script.async = true;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current && window.ymaps) {
      initMap();
    }
  }, [language, center, zoom]);

  const initMap = () => {
    if (!window.ymaps || !mapRef.current) return;

    window.ymaps.ready(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }

      const map = new window.ymaps.Map(mapRef.current, {
        center: center,
        zoom: zoom,
        controls: ["zoomControl"],
      });

      map.panes.get("ground").getElement().style.filter =
        "grayscale(1) sepia(0.01) brightness(0.98)";

      placemarks.forEach((place) => {
        const placemark = new window.ymaps.Placemark(
          place.coords,
          {
            balloonContentHeader: `<div style="font-weight: bold; font-size: 24px; color: #1e3a8a; margin-bottom: 8px;">HDMC</div>`,
            balloonContentBody: `
              <div style="padding: 5px; font-size: 14px; color: #374151;">
                <p style="margin: 5px 0;"><strong>📍 Address:</strong> ${place.address}</p>
                <p style="margin: 5px 0;"><strong>🕐 Schedule:</strong> ${place.schedule}</p>
                <p style="margin: 5px 0;"><strong>📞 Phone:</strong> <a href="tel:${place.phone}" style="color: #2563eb; text-decoration: none;">${place.phone}</a></p>
              </div>
            `,
            hintContent: place.hintContent,
          },
          {
            iconLayout: "default#image",
            iconImageHref: "/map-marker.png",
            iconImageSize: [70, 70],
            iconImageOffset: [-29, -73],
          }
        );
        map.geoObjects.add(placemark);
      });

      mapInstanceRef.current = map;
    });
  };

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

const AddressSection = ({ city }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const clinics = [
    {
      city: "Moscow",
      title: t("address.clinic1.title"),
      address: t("address.clinic1.address"),
      schedule: t("address.clinic1.schedule"),
      phone: "+7 (495) 514-20-58",
      coords: [55.707299, 37.456828],
      zoom: 17,
      hintContent: "HDMC",
    },
    {
      city: "Makhachkala",
      title: "La clinica",
      address: t("address.clinic2.address"),
      schedule: t("address.clinic2.schedule"),
      phone: "+7 (988) 204-55-75",
      coords: [42.982315, 47.467977],
      zoom: 17,
      hintContent: "La Clinica",
    },
  ];

  const mapLang = currentLang === "ru" ? "ru_RU" : "en_US";

  // ✅ Filter clinic based on city prop
  const filteredClinics = clinics.filter(
    (clinic) => clinic.city.toLowerCase() === city.toLowerCase()
  );

  return (
    <section id="contact" className="w-full bg-[#fafbfc] py-16">
      <div className="max-w-[87rem] text-center mx-auto px-4">
        <h2 className="text-brand1 text-center text-4xl font-bold mb-6">
          {t("address.title")}
        </h2>
        <p className="md:text-lg text-center text-brand1/80 mb-8 max-w-3xl mx-auto">
          {t("address.subtitle")}
        </p>

        {filteredClinics.map((clinic, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col gap-3">
              <div className="flex items-start text-left gap-2 text-black text-lg mb-1">
                <FaMapMarkerAlt className="mt-1.5 text-brand1" />
                <div>
                  <h4 className="font-medium">{clinic.title}</h4>
                  <p
                    className="text-brand1 text-sm"
                    dangerouslySetInnerHTML={{ __html: clinic.address }}
                  ></p>
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
              <YandexMap
                center={clinic.coords}
                zoom={clinic.zoom}
                placemarks={[clinic]}
                language={mapLang}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddressSection;
