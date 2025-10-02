import React from "react";
import { useTranslation } from "react-i18next";
import { FaUserAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlBadge } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";

const slides = [
  {
    icon: <SlBadge className="text-3xl text-white " />,
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle",
    buttonKey: "hero.slide1.button",
    gradient: "bg-gradient-to-r from-[#125e84] to-[#36bbbe]",
  },
  {
    icon: <LuUsers className="text-3xl text-white " />,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    buttonKey: "hero.slide2.button",
    gradient: "bg-gradient-to-r from-[#36bbbe] to-[#125e84]",
  },
];

const gradientBg = "bg-gradient-to-r from-teal-700 to-cyan-700";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative w-full  flex items-center justify-center overflow-hidden `}
    >
      <Swiper
        modules={[Navigation, Pagination]} // ✅ fixed
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full  "
      >
        {slides.map(
          ({ icon, titleKey, subtitleKey, buttonKey, gradient }, index) => (
            <SwiperSlide key={index}>
              <div
                className={`  mx-auto w-full  min-h-[80vh] h-full flex items-center    ${gradient}`}
              >
                <div className="flex flex-col max-w-[87rem] w-full px-4 mx-auto items-start">
                  <div className="flex flex-col items-start md:items-center mr-0 md:mr-8">
                    <div className="mb-8 flex items-center">
                      <div className="bg-white/[0.13] rounded-full p-4 mr-4">
                        {icon}
                      </div>
                      <div className="w-1 h-14 bg-white/40 rounded" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center max-w-2xl">
                    <h1 className="text-white font-bold text-4xl md:text-6xl leading-15 mb-6">
                      {t(titleKey)}
                    </h1>
                    <div className="text-gray-300 text-lg md:text-2xl mb-8">
                      {t(subtitleKey)}
                    </div>
                    <button className="bg-white text-teal-900 text-lg font-semibold rounded px-8 py-3 shadow hover:bg-gray-200 cursor-pointer transition-all duration-300 w-fit">
                      {t(buttonKey)}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default HeroSection;
