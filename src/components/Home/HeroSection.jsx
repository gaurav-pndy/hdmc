import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlBadge } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import WaveBackground from "../WaveBackground";
import { MdDiscount } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

const slides = [
  {
    icon: <SlBadge className="text-3xl text-white " />,
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle",
    buttonKey: "hero.slide1.button",
    gradient: "bg-gradient-to-r from-brand1 to-brand5",
    image: "/hero1.png",
  },
  {
    icon: <LuUsers className="text-3xl text-white " />,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    buttonKey: "hero.slide2.button",
    gradient: "bg-gradient-to-r from-brand5 to-brand1",
    video:
      "https://www.shutterstock.com/shutterstock/videos/1111753583/preview/stock-footage-videoconference-event-of-group-multinational-physicians-cardiologists-having-medical-council-using.webm",
  },
];

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full"
      >
        <SwiperSlide>
          <div
            className={`mx-auto relative w-full grid lg:grid-cols-5 items-stretch`}
          >
            <WaveBackground
              stroke="rgba(100, 100, 100,"
              custStyle="lg:w-[40%] h-[60%] left-0 top-0"
            />
            <div className="flex flex-col  md:flex-row lg:col-span-2 px-6 lg:px-0 md:pl-12 lg:pl-6 xl:pl-20 w-full py-6  xl:py-4 mx-auto items-center gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#002b3e] to-[#016885]">
              <div className="flex-1 flex flex-col items-start">
                <div className="mb-2 flex z-40 items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-3 mr-4">
                    <SlBadge className="text-2xl p-0 text-white " />
                  </div>
                  <div className="w-1 h-12 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold z-40 text-3xl lg:text-2xl xl:text-5xl xl:leading-12 mb-2">
                  {t("hero.slide1.title")}
                </h1>
                <div className="text-gray-200 text-lg z-40 xl:text-xl mb-4">
                  {t("hero.slide1.subtitle")}
                </div>
                <button className="bg-white relative z-40 text-teal-900 font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-200 transition-all duration-300">
                  {t("hero.slide1.button")}
                </button>
              </div>
            </div>
            <div className="w-full lg:col-span-3 -mt-[2px] lg:-mt-0 lg:-ml-[1px] -z-10 flex items-center">
              <div className="relative w-full">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2656913525/display_1500/stock-photo-person-s-hands-cupping-around-a-glowing-holographic-icon-representing-customer-loyalty-vip-clients-2656913525.jpg"
                  alt="Hero illustration"
                  className="w-full md:max-h-[28rem] lg:max-h-80 xl:max-h-[28rem] h-auto object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#016885] via-[#016885]/40 to-transparent via-40%`}
                ></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`mx-auto relative w-full grid lg:flex  items-stretch`}
          >
            <WaveBackground
              stroke="rgba(200, 200, 200,"
              custStyle="lg:w-[40%] h-[60%] left-0 top-0"
            />
            <div className="flex flex-col md:flex-row lg:w-[45%] px-6 lg:px-0 md:pl-12 lg:pl-6 xl:pl-20 w-full py-6  xl:py-4 mx-auto items-center gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#989996] to-[#cbd0ce]">
              <div className="flex-1 flex flex-col items-start">
                <div className="mb-2 flex z-40 items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-3 mr-4">
                    <LuUsers className="text-2xl text-white " />
                  </div>
                  <div className="w-1 h-12 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold z-40 text-3xl lg:text-2xl xl:text-5xl xl:leading-12 mb-2">
                  {t("hero.slide2.title")}
                </h1>
                <div className="text-gray-200 text-lg z-40 xl:text-xl mb-4">
                  {t("hero.slide2.subtitle")}
                </div>
                <button className="bg-white relative z-40 text-teal-900 font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-200 transition-all duration-300">
                  {t("hero.slide2.button")}
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[55%] -z-10 flex items-center">
              <div className="relative w-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://www.shutterstock.com/shutterstock/videos/1111753583/preview/stock-footage-videoconference-event-of-group-multinational-physicians-cardiologists-having-medical-council-using.webm"
                  className="w-full h-auto object-contain"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#cbd0ce] via-[#cbd0ce]/30 to-transparent via-20%`}
                ></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`mx-auto relative w-full min-h-[62.5vh] md:min-h-auto h-full grid lg:flex  items-stretch`}
          >
            <WaveBackground
              stroke="rgba(200, 200, 200,"
              custStyle="lg:w-[40%] h-[60%] left-0 top-0"
            />
            <div className="flex lg:w-[48%] flex-col md:flex-row md:min-h-[17.5rem] lg:min-h-auto px-6 md:pl-12 xl:pl-20 w-full py-6 md:py-10 xl:py-0 mx-auto items-center gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#e9a25f] to-[#df952f]">
              <div className="flex-1 flex flex-col items-start">
                <div className="mb-2 flex z-40 items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-3 mr-4">
                    <MdDiscount className="text-2xl text-white " />
                  </div>
                  <div className="w-1 h-12 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold z-40 text-3xl xl:text-5xl leading-12 mb-2">
                  {t("hero.slide3.title")}
                </h1>
              </div>
            </div>
            <div className="w-full lg:w-[52%] h-full -mt-[2px] lg:-mt-0 lg:-ml-[1px] -z-10 flex items-center">
              <div className="relative w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://www.shutterstock.com/shutterstock/videos/1067598875/preview/stock-footage-joyful-young-couple-friends-african-american-man-woman-s-in-t-shirts-isolated-on-yellow.webm"
                  className="w-full h-full md:h-auto  object-cover md:object-contain"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#df952f] via-[#df952f]/30 to-transparent via-20%`}
                ></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`mx-auto relative w-full min-h-[62.5vh] md:min-h-auto grid lg:flex items-stretch`}
          >
            <WaveBackground
              stroke="rgba(100, 100, 100,"
              custStyle="md:w-[40%] h-[60%] left-0 top-0"
            />
            <div className="flex flex-col lg:w-[48%] md:flex-row md:min-h-[17.5rem] lg:min-h-auto  px-6 md:pl-12 xl:pl-20 w-full py-6 md:py-10 xl:py-4 mx-auto items-center gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#3e7963] to-[#164a3d]">
              <div className="flex-1 flex flex-col items-start">
                <div className="mb-2 flex z-40 items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-3 mr-4">
                    <FaHandHoldingHeart className="text-2xl text-white " />
                  </div>
                  <div className="w-1 h-12 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold z-40 text-3xl lg:text-5xl leading-12 mb-2">
                  {t("hero.slide4.title")}
                </h1>
              </div>
            </div>
            <div className="w-full lg:w-[52%] h-full -mt-[2px] lg:-mt-0 lg:-ml-[1px]  -z-10 flex items-center">
              <div className="relative w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://www.shutterstock.com/shutterstock/videos/3411047139/preview/stock-footage-male-and-female-hands-with-heart-shape-concept-of-love-life-care-compassion-mercy.webm"
                  className="w-full h-full md:h-auto object-cover md:object-contain"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#164a3d] via-[#164a3d]/30 to-transparent via-20%`}
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
