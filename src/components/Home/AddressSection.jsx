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

        <div className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col gap-3 ">
          <div className="flex items-start gap-2  text-black text-lg mb-1">
            <FaMapMarkerAlt className="mt-1.5 text-brand1" />{" "}
            <div>
              {" "}
              <h4 className="font-medium"> Kvartal West</h4>{" "}
              <p className="text-brand1 text-sm ">
                Moscow, Aminyevskoye Highway, 6 подъезд 1
              </p>{" "}
              <p className="text-brand1 text-sm ">
                Пн-Пт: 08:00-21:00, Сб-Вс: 09:00-18:00
              </p>
            </div>
          </div>

          <div className="flex  text-black gap-2 mb-1">
            <FaPhoneAlt className=" text-brand1 mt-1.5" />
            <span className="font-semibold ">+7 (495) 514-20-58</span>
          </div>
          <div className="flex  text-black gap-2 mb-1">
            <TiLocationArrowOutline className=" text-brand1 text-xl mt-1" />
            <span className="font-semibold ">Построить маршрут</span>
          </div>

          <button className="bg-brand1 text-white font-semibold rounded-lg px-4 py-2.5 shadow hover:bg-brand5/90 transition text-sm w-full">
            Записаться в эту клинику
          </button>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow overflow-hidden ">
          <iframe
            src="https://yandex.com/map-widget/v1/org/kvartal_west/161241477081/?indoorLevel=1&ll=37.456828%2C55.707299&utm_source=share&z=16"
            frameborder="1"
            allowfullscreen="true"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>
        <div className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col gap-3 ">
          <div className="flex items-start gap-2  text-black text-lg mb-1">
            <FaMapMarkerAlt className="mt-1.5 text-brand1" />{" "}
            <div>
              {" "}
              <h4 className="font-medium">
                {" "}
                Ali-Gadzhi Akushinskogo Avenue
              </h4>{" "}
              <p className="text-brand1 text-sm ">
                Ali-Gadzhi Akushinskogo Avenue, 7, Makhachkala
              </p>{" "}
              <p className="text-brand1 text-sm ">
                Пн-Пт: 08:00-21:00, Сб-Вс: 09:00-18:00
              </p>
            </div>
          </div>

          <div className="flex  text-black gap-2 mb-1">
            <FaPhoneAlt className=" text-brand1 mt-1.5" />
            <span className="font-semibold ">+7 (988) 204-55-75</span>
          </div>
          <div className="flex  text-black gap-2 mb-1">
            <TiLocationArrowOutline className=" text-brand1 text-xl mt-1" />
            <span className="font-semibold ">Построить маршрут</span>
          </div>

          <button className="bg-brand1 text-white font-semibold rounded-lg px-4 py-2.5 shadow hover:bg-brand5/90 transition text-sm w-full">
            Записаться в эту клинику
          </button>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow  ">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=47.467719%2C42.982145&mode=whatshere&tab=inside&utm_source=share&whatshere%5Bpoint%5D=47.467977%2C42.982315&whatshere%5Bzoom%5D=17&z=18"
            frameborder="1"
            allowfullscreen="true"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>

        <div />
      </div>
    </div>
  </section>
);

export default AddressSection;
