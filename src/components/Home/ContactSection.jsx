import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
    agree: false,
  });

  return (
    <section className="w-full bg-[#fafbfc] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-brand1 text-center  text-4xl font-bold mb-6">
          Свяжитесь с нами
        </h2>
        <p className="text-lg text-center text-brand1/80 mb-8 max-w-3xl mx-auto">
          Свяжитесь с нами любым удобным способом. Мы работаем для вашего
          здоровья и готовы ответить на все ваши вопросы.
        </p>
        <div className=" gap-8 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-xl shadow p-10">
            <div className="font-medium text-2xl mb-10 flex items-center gap-2">
              {" "}
              <IoPaperPlaneOutline />
              Отправить сообщение
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block font-semibold mb-1">Имя</label>
                <input
                  type="text"
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Телефон</label>
                <input
                  type="number"
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Город</label>
                <select
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full "
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                >
                  <option value="">Выберите город</option>
                  <option value="Москва">Москва</option>
                  <option value="Махачкала">Махачкала</option>
                  <option
                    value="Другой город
"
                  >
                    Другой город
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Сообщение</label>
              <textarea
                className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full "
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="flex items-start my-4">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="mr-2  mt-1"
                id="form-agree"
              />
              <label htmlFor="form-agree" className="text-sm font-medium">
                Я согласен на обработку персональных данных и получение
                информации от медицинской клиники
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-brand1 rounded-lg cursor-pointer flex items-center justify-center gap-2 mt-2 px-2 py-3  text-white font-semibold text-base shadow hover:bg-brand5/90 transition-all duration-300"
            >
              <IoPaperPlaneOutline />
              Отправить
            </button>
          </div>
          {/* <div className="flex-1 flex flex-col gap-5 min-w-[340px]">
            <div className="bg-white rounded-xl shadow p-10">
              <div className="font-medium text-2xl mb-4 flex items-center gap-2">
                {" "}
                <FiPhone /> Телефон
              </div>
              <div className="flex justify-between">
                <div className="text-brand1/80">Москва:</div>
                <div className="font-semibold text-brand1">
                  +7 (495) 123-45-67
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-brand1/80">Махачкала:</div>
                <div className="font-semibold text-brand1">
                  +7 (8722) 123-456
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-10">
              <div className="font-medium text-2xl mb-4 flex items-center gap-2">
                {" "}
                <FaRegEnvelope /> Email
              </div>
              <div className="flex justify-between text-brand1/80">
                {" "}
                Общие вопросы:{" "}
                <span className="font-semibold text-brand1">
                  info@medclinic.ru
                </span>
              </div>
              <div className="flex justify-between text-brand1/80">
                {" "}
                Запись на прием:{" "}
                <span className="font-semibold text-brand1">
                  booking@medclinic.ru
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-10">
              <div className="font-medium text-2xl mb-4 flex items-center gap-2">
                {" "}
                <FaLocationDot /> Адреса клиник
              </div>
              <div className="flex justify-between text-brand1/80">
                Москва:{" "}
                <span className="text-brand1 font-semibold">
                  ул. Пирогова, 14
                </span>
              </div>
              <div className="flex justify-between text-brand1/80">
                Махачкала:{" "}
                <span className="text-brand1 font-semibold">
                  ул. Дахадаева, 88
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-10">
              <div className="font-medium text-2xl mb-4 flex items-center gap-2">
                {" "}
                <FaRegClock /> Режим работы
              </div>
              <div className="flex justify-between text-brand1/80">
                Пн-Пт:{" "}
                <span className="font-semibold text-brand1">08:00 - 21:00</span>
              </div>
              <div className="flex justify-between text-brand1/80">
                Сб-Вс:{" "}
                <span className="font-semibold text-brand1">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-brand1/80">
                КТ диагностика:{" "}
                <span className="font-semibold text-brand1">24/7</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-10">
              <div className="font-medium text-2xl mb-6 flex items-center gap-2">
                {" "}
                <LuMessageCircle /> Быстрая связь
              </div>
              <a
                href="https://wa.me/74951234567"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand1 text-white font-semibold px-3 py-2 cursor-pointer transition-all duration-300 rounded-lg text-center mb-3 hover:bg-[#0f4966]"
              >
                <FaWhatsapp className="inline-block mr-2" /> WhatsApp
              </a>
              <a
                href="https://t.me/medclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-brand4 text-brand1 font-semibold px-3 py-2 cursor-pointer transition-all duration-300 rounded-lg text-center mb-3 hover:bg-brand4/50"
              >
                <FaTelegramPlane className="inline-block mr-2" /> Telegram
              </a>
              <div className="block w-full border border-brand4 text-brand1 font-semibold cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg text-center mb-3 hover:bg-brand4/50">
                <FiPhone className="inline-block mr-2" /> Поменять связь
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
