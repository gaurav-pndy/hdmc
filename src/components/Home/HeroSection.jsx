import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlBadge } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import WaveBackground from "../WaveBackground";

const slides = [
  {
    icon: <SlBadge className="text-3xl text-white " />,
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle",
    buttonKey: "hero.slide1.button",
    gradient: "bg-gradient-to-r from-brand1 to-brand5",
    image: "/hero1.png", // 👈 Unsplash image
  },
  {
    icon: <LuUsers className="text-3xl text-white " />,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    buttonKey: "hero.slide2.button",
    gradient: "bg-gradient-to-r from-brand5 to-brand1",
    video:
      "https://www.shutterstock.com/shutterstock/videos/1111753583/preview/stock-footage-videoconference-event-of-group-multinational-physicians-cardiologists-having-medical-council-using.webm", // 👈 Unsplash image
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
        <SwiperSlide>
          <div
            className={`mx-auto w-full min-h-[87vh] md:min-h-[30rem] lg:min-h-[38rem] xl:min-h-[80vh] h-full flex items-center bg-gradient-to-r from-brand1 to-brand5`}
          >
            <div className="flex flex-col md:flex-row  w-full px-6 md:px-12 xl:px-20 py-6 md:py-10 xl:py-0 mx-auto items-center gap-10">
              {/* Left Side (Text) */}
              <div className="flex-1 flex flex-col items-start">
                <div className="mb-4 md:mb-8 flex  items-center">
                  <div className="bg-white/[0.13] h-16  w-16 flex justify-center items-center rounded-full p-4 mr-4">
                    <SlBadge className="text-3xl p-0 text-white " />
                  </div>
                  <div className="w-1 h-14 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold text-4xl lg:text-6xl leading-tight mb-2 md:mb-6">
                  {t("hero.slide1.title")}
                </h1>
                <div className="text-gray-200 text-lg md:text-2xl mb-8">
                  {t("hero.slide1.subtitle")}
                </div>
                <button className="bg-white text-teal-900 text-lg font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-200 transition-all duration-300">
                  {t("hero.slide1.button")}
                </button>
              </div>

              {/* Right Side (Image) */}
              <div className="flex-1 h-full  flex justify-center md:justify-end">
                <img
                  src="/hero1.png"
                  alt="Hero illustration"
                  className="rounded-2xl max-h-[36rem]  h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`mx-auto relative  w-full min-h-[87vh] md:min-h-[30rem] lg:min-h-[38rem] xl:min-h-[80vh] h-full grid md:grid-cols-5 items-center `}
          >
            <WaveBackground
              stroke="rgba(200, 200, 200,"
              custStyle="md:w-[40%] h-[60%]"
            />
            <div className="flex flex-col md:flex-row md:col-span-2 px-6 md:pl-12 xl:pl-20 z-20 w-full py-6 md:py-10 xl:py-0 mx-auto items-center gap-10 bg-gradient-to-b md:bg-gradient-to-r from-brand5 to-[#218ba1] h-full ">
              {/* Left Side (Text) */}
              <div className="flex-1 flex flex-col  items-start">
                <div className="mb-4 md:mb-8 flex items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-4 mr-4">
                    <LuUsers className="text-3xl text-white " />
                  </div>
                  <div className="w-1 h-14 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold text-4xl lg:text-6xl leading-tight mb-2 md:mb-6">
                  {t("hero.slide2.title")}
                </h1>
                <div className="text-gray-200 text-lg md:text-2xl mb-8">
                  {t("hero.slide2.subtitle")}
                </div>
                <button className="bg-white text-teal-900 text-lg font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-200 transition-all duration-300">
                  {t("hero.slide2.button")}
                </button>
              </div>

              {/* Right Side (Image) */}
            </div>
            <div className="w-full h-full md:col-span-3 z-10 -mt-[2px] md:-mt-0 md:-ml-[1px]">
              <div className="relative w-full  h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://www.shutterstock.com/shutterstock/videos/1111753583/preview/stock-footage-videoconference-event-of-group-multinational-physicians-cardiologists-having-medical-council-using.webm"
                  alt="Hero illustration"
                  className=" w-full  md:min-h-96 h-full object-cover md:rounded-tr-2xl md:rounded-br-2xl"
                ></video>
                <div
                  className={`absolute md:rounded-tr-2xl md:rounded-br-2xl inset-0 bg-gradient-to-b   md:bg-gradient-to-r  
              from-[#218ba1] via-[#218ba1]/30 to-transparent via-20%`}
                ></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
