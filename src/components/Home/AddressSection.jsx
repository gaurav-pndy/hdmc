import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaMapMarkerAlt, FaPhoneAlt, FaDirections } from "react-icons/fa";
import { TiLocationArrowOutline } from "react-icons/ti";

const clinics = [
  {
    title: "Клиника HDMC - Москва",
    address: "ул. Пироговская, 14, Москва, 119435",
    schedule: "Пн-Пт: 08:00-21:00, Сб-Вс: 09:00-18:00",
    phone: "+7 (495) 123-45-67",
    route: "#",
  },
  {
    title: "Клиника HDMC - Махачкала",
    address: "ул. Дахадаева, 88, Махачкала, 367000",
    schedule: "Пн-Пт: 08:00-21:00, Сб-Вс: 09:00-18:00",
    phone: "+7 (8722) 123-456",
    route: "#",
  },
];

const stats = [
  { value: "24/7", label: "КТ диагностика" },
  { value: "2", label: "Города" },
  { value: "50+", label: "Врачей" },
  { value: "15+", label: "Лет опыта" },
];

const AddressSection = () => (
  <section className="w-full bg-[#fafbfc] py-16">
    <div className="max-w-[87rem] mx-auto px-4">
      <h2 className="text-brand1 text-center  text-4xl font-bold mb-6">
        Наши адреса
      </h2>
      <p className="text-lg text-center text-brand1/80 mb-8 max-w-3xl mx-auto">
        Две современные клиники в Москве и Махачкале для вашего удобства
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Clinic Cards */}
        <div className="flex flex-col gap-6">
          {clinics.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col gap-3 min-w-[280px]"
            >
              <div className="flex items-start gap-2  text-black text-lg mb-1">
                <FaMapMarkerAlt className="mt-1.5 text-brand1" />{" "}
                <div>
                  {" "}
                  <h4 className="font-medium"> {c.title}</h4>{" "}
                  <p className="text-brand1 text-sm ">{c.address}</p>{" "}
                  <p className="text-brand1 text-sm ">{c.schedule}</p>
                </div>
              </div>

              <div className="flex  text-black gap-2 mb-1">
                <FaPhoneAlt className=" text-brand1 mt-1.5" />
                <span className="font-semibold ">{c.phone}</span>
              </div>
              <div className="flex  text-black gap-2 mb-1">
                <TiLocationArrowOutline className=" text-brand1 text-xl mt-1" />
                <span className="font-semibold ">Построить маршрут</span>
              </div>

              <button className="bg-brand1 text-white font-semibold rounded-lg px-4 py-2.5 shadow hover:bg-brand5/90 transition text-sm w-full">
                Записаться в эту клинику
              </button>
            </div>
          ))}
        </div>
        {/* Map Block */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center py-16 px-10 text-center lg:col-span-2">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-brand1 text-4xl mb-2" />
            <div className="font-bold text-lg text-brand1 mb-3">
              Интерактивная карта
            </div>
            <div className="text-brand1/60 mb-6 text-base">
              Здесь будет отображаться карта с нашими клиниками
            </div>
            <button className="border px-6 py-2 rounded text-sm font-semibold text-brand1 bg-white shadow hover:bg-brand4/10 transition">
              Открыть в Яндекс.Картах
            </button>
          </div>
        </div>
        {/* Empty column for spacing/alignment on desktop */}
        <div />
      </div>
      {/* STATISTICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-3">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow py-7 flex flex-col items-center text-center"
          >
            <div className="text-brand1 text-3xl font-medium mb-2">
              {s.value}
            </div>
            <div className="text-brand1/80 text-base">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AddressSection;
