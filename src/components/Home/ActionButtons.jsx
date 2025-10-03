import React from "react";
import { FaCalendarCheck, FaPhoneAlt, FaRegSmile } from "react-icons/fa";

const ActionButtons = () => (
  <div className="w-full  bg-gray-100 py-5 px-4">
    <div className="flex flex-wrap gap-5 justify-between max-w-7xl mx-auto">
      {/* Book an appointment */}
      <button
        className="
        flex items-center gap-2 w-full md:w-fit
        px-8 py-3 
        bg-brand1
        text-white
        text-lg font-semibold
        rounded-xl
        shadow
        hover:bg-brand5/90
        transition-all duration-300 cursor-pointer
        border-none
        focus:outline-none
      "
      >
        <FaCalendarCheck />
        Записаться на прием
      </button>
      {/* Hotline/Feedback */}
      <button
        className="
        flex items-center gap-2 w-full md:w-fit
        px-8 py-3 
        bg-white
        bg-opacity-20
        border border-white border-opacity-40
        text-brand1
        text-lg font-semibold
        rounded-xl
        hover:bg-brand4/10
        transition-all duration-300 cursor-pointer
        focus:outline-none
      "
      >
        <FaPhoneAlt />
        Горячая линия/Оставить отзыв
      </button>
      {/* Thank you MEDSI */}
      <button
        className="
        flex items-center gap-2 w-full  md:w-fit
        px-8 py-3 
        bg-brand2
        border border-white
        text-white
        text-lg font-semibold
        rounded-xl
        hover:bg-brand2/60
        transition-all duration-300 cursor-pointer
        focus:outline-none
      "
      >
        <FaRegSmile />
        Спасибо HDMC
      </button>
    </div>
  </div>
);

export default ActionButtons;
