import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

const FloatingButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed z-50 bottom-6 right-1/2  translate-x-1/2  md:translate-x-0 md:right-6 bg-brand1 border border-white text-white rounded-full shadow-xl px-6 py-4 flex items-center justify-center gap-3 w-[80%] md:w-fit font-semibold md:text-lg hover:bg-brand1/90 transition-all duration-300 cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand4"
    style={{ boxShadow: "0 8px 32px rgba(18,94,132,0.17)" }}
  >
    <FaCalendarCheck className="text-2xl" />
    Book an Appointment
  </button>
);

export default FloatingButton;
