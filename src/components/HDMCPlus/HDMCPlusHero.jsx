import React from "react";
import { FaCrown, FaPhoneAlt } from "react-icons/fa";

const HDMCPlusHero = () => (
  <section className="w-full  px-2 bg-gradient-to-b from-[#e8f1f4] to-[#e9f7f7] flex flex-col items-center justify-center min-h-[60vh] h-full py-10">
    <div className="flex justify-center mb-6">
      <span className="flex items-center gap-2 px-7 py-3 text-lg font-semibold rounded-full bg-brand1/20 text-brand1 ">
        <FaCrown className="text-brand1/80 text-xl" />
        HDMC+ Премиум Членство
      </span>
    </div>
    <h1 className="text-brand1 font-bold text-center text-5xl md:text-6xl mb-5 leading-15">
      Медицина будущего уже
      <br />
      сегодня
    </h1>
    <div className="text-brand1/80 text-center text-xl md:text-2xl max-w-4xl mb-10">
      Присоединяйтесь к эксклюзивной программе членства и получите доступ к
      премиальным медицинским услугам мирового уровня
    </div>
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <button className="bg-brand1 text-white font-semibold px-8 py-3 text-lg rounded-lg hover:bg-[#0e4967] transition-all duration-300  cursor-pointer ">
        Присоединиться к HDMC+
      </button>
      <button className="flex items-center gap-3 bg-white px-8 py-3 text-lg rounded-lg font-semibold text-brand1 hover:bg-brand4/10 transition-all duration-300 cursor-pointer  ">
        <FaPhoneAlt className="text-brand4 text-xl" />
        Консультация
      </button>
    </div>
  </section>
);

export default HDMCPlusHero;
