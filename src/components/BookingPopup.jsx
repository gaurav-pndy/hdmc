import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const BookingPopup = ({ show, onClose }) => {
  // Prevent scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Popup Container */}
      <div className="bg-white rounded-xl w-[95%] max-w-3xl overflow-hidden shadow-2xl relative animate-[popup_0.25s_ease]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
        >
          <IoClose size={24} />
        </button>

        {/* Iframe */}
        <iframe
          src="https://b22284.oz.1denta.ru/company/22284/menu?o="
          className="w-full h-[70vh] md:h-[80vh]"
          //   loading="lazy"
        />
      </div>

      {/* Popup Animation Keyframe */}
      <style>{`
        @keyframes popup {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default BookingPopup;
