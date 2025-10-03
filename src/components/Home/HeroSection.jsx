import React from "react";
import { useTranslation } from "react-i18next";
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
    image:
      "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 👈 Unsplash image
  },
  {
    icon: <LuUsers className="text-3xl text-white " />,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    buttonKey: "hero.slide2.button",
    gradient: "bg-gradient-to-r from-[#36bbbe] to-[#125e84]",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVkaWNpbmV8ZW58MHx8MHx8fDI%3D", // 👈 Unsplash image
  },
];

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map(
          (
            { icon, titleKey, subtitleKey, buttonKey, gradient, image },
            index
          ) => (
            <SwiperSlide key={index}>
              <div
                className={`mx-auto w-full min-h-[80vh] h-full flex items-center ${gradient}`}
              >
                <div className="flex flex-col md:flex-row max-w-[87rem] w-full px-6 md:px-12 mx-auto items-center gap-10">
                  {/* Left Side (Text) */}
                  <div className="flex-1 flex flex-col items-start">
                    <div className="mb-8 flex items-center">
                      <div className="bg-white/[0.13] rounded-full p-4 mr-4">
                        {icon}
                      </div>
                      <div className="w-1 h-14 bg-white/40 rounded" />
                    </div>
                    <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">
                      {t(titleKey)}
                    </h1>
                    <div className="text-gray-200 text-lg md:text-2xl mb-8">
                      {t(subtitleKey)}
                    </div>
                    <button className="bg-white text-teal-900 text-lg font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-200 transition-all duration-300">
                      {t(buttonKey)}
                    </button>
                  </div>

                  {/* Right Side (Image) */}
                  <div className="flex-1 h-full  flex justify-center md:justify-end">
                    <img
                      src={image}
                      alt="Hero illustration"
                      className="rounded-2xl shadow-xl h-full w-full object-cover"
                    />
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
