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
  <footer id="footer" className="bg-brand1 text-white pt-8 pb-4 px-2">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] gap-8">
      {/* Column 1: Logo and about */}
      <div className="flex-1">
        <img src="/hd-logo-white.svg" alt="Logo" className="h-10" />
        <div className="mb-4 mt-4 text-white leading-snug">
          Международный проект "Health-Direct" <br />
          Автономная некоммерческая организация <br />
          «Научно-образовательный центр» <br />
          «Евразийская онкологическая программа «ЕАФО»
        </div>
      </div>

      {/* Column 2: Navigation links */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4">Навигация</h3>
        <div className="flex flex-col gap-1">
          <a href="#" className=" hover:text-brand4">
            Услуги
          </a>
          <a href="#" className=" hover:text-brand4">
            Специалисты
          </a>
          <a href="#" className=" hover:text-brand4">
            Оплата услуг
          </a>
          <a href="#" className=" hover:text-brand4">
            Подготовка к исследованиям
          </a>
          <a href="#" className=" hover:text-brand4">
            Отзывы
          </a>
          <a href="#" className=" hover:text-brand4">
            О нас
          </a>
          <a href="#" className=" hover:text-brand4">
            Контакты
          </a>
        </div>
      </div>

      {/* Column 3: Documents */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4">Документы</h3>
        <div className="flex flex-col gap-1 text-white/90">
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

      {/* Column 4: Contact info */}
      <div className="flex-1 text-sm">
        <h3 className="text-lg font-semibold mb-4">Контакты</h3>
        <div className="flex items-start gap-2 mb-2">
          <FaMapMarkerAlt className="mt-1.5" />
          <span>Kvartal West Moscow, Aminyevskoye Highway, 6</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <FaClock /> <span>С 10:00 до 18:00&nbsp;|&nbsp;Без выходных</span>
        </div>
        <a
          href="mailto:office@health-direct.info"
          target="_blank"
          className="flex items-center gap-2 mb-2"
        >
          <FaEnvelope /> <span>office@health-direct.info</span>
        </a>
        <a
          href="tel:+74996853000"
          target="_blank"
          className="flex items-center gap-2 mb-4"
        >
          <FaPhoneAlt /> <span>+7 (499) 685 3000</span>
        </a>
        <div className="flex gap-4">
          <a
            href="https://wa.me/74951234567"
            target="_blank"
            className="bg-[#2aa81a] hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full"
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
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center text-white/60 text-sm mt-4">
      © 2025. Все права защищены Health-Direct
    </div>
  </footer>
);

export default Footer;
