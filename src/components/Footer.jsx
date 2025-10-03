import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-brand1 text-white pt-8 pb-4 px-2">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
      {/* Left: Logo, about, contact */}
      <div className="flex-1 ">
        <img src="/hd-logo-white.svg" alt="Logo" className="h-10" />
        <div className="mb-2 mt-4 text-white  leading-snug">
          Международный проект "Health-Direct" <br />
          Автономная некоммерческая организация <br />
          «Научно-образовательный центр» <br />
          «Евразийская онкологическая программа «ЕАФО»
        </div>
        <div className="flex items-start gap-2  mb-2 mt-2">
          <FaMapMarkerAlt className="mt-1.5" />
          <span>Kvartal West Moscow, Aminyevskoye Highway, 6</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <FaClock /> <span>С 10:00 до 18:00&nbsp;|&nbsp;Без выходных</span>
        </div>
        <a
          href="mailto:office@health-direct.info"
          target="_blank"
          className="flex items-center gap-2 mb-1"
        >
          <FaEnvelope /> <span>office@health-direct.info</span>
        </a>
        <a
          href="tel:+74996853000"
          target="_blank"
          className="flex items-center gap-2 mb-2"
        >
          <FaPhoneAlt /> <span>+7 (499) 685 3000</span>
        </a>
        <div className="flex gap-4 mb-4 mt-4">
          <a
            href="https://wa.me/74951234567"
            target="_blank"
            className="bg-[#2aa81a] hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full "
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://t.me/medclinic"
            target="_blank"
            className="bg-[#039be5] hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>
        <div className="flex flex-col gap-1  text-white/90 mb-2">
          <a href="#" className="hover:underline">
            Прайс-лист на услуги
          </a>
          <a href="#" className="hover:underline">
            Документы
          </a>
          <a href="#" className="hover:underline">
            Договор оферты
          </a>
          <a href="#" className="hover:underline">
            Политика конфиденциальности
          </a>
        </div>
      </div>
      {/* Center: Map */}
      <div className="flex-1 lg:col-span-2 w-full flex flex-col items-center mb-8 md:mb-0">
        <div className="w-full">
          <iframe
            src="https://yandex.com/map-widget/v1/org/kvartal_west/161241477081/?ll=37.456828%2C55.707299&z=16"
            width={"100%"}
            height="320"
            frameborder="1"
            allowfullscreen="true"
          ></iframe>
        </div>
        {/* Main nav links */}
        <div className="flex mt-6 gap-10 flex-wrap  w-full mb-2">
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="underline underline-offset-2 hover:text-brand4"
            >
              Услуги
            </a>
            <a
              href="#"
              className="underline underline-offset-2 hover:text-brand4"
            >
              Специалисты
            </a>
            <a
              href="#"
              className="underline underline-offset-2 hover:text-brand4"
            >
              Оплата услуг
            </a>
            <a
              href="#"
              className="underline underline-offset-2 hover:text-brand4"
            >
              Подготовка к исследованиям
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="underline underline-offset-2 hover:text-brand4"
            >
              Отзывы
            </a>
            <a
              href="#"
              className="underline underline-offset-2 hover:text-brand4"
            >
              О нас
            </a>
            <a
              href="#"
              className="underline underline-offset-2 hover:text-brand4"
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright */}
    <div className="text-center text-white/60 text-sm mt-8">
      © 2025. Все права защищены Health-Direct
    </div>
  </footer>
);

export default Footer;
