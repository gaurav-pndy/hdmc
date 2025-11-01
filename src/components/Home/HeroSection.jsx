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
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full"
      >
        <SwiperSlide>
          <div
            className={`mx-auto relative  w-full min-h-[87vh] md:min-h-[30rem] lg:min-h-[38rem] xl:min-h-[80vh] h-full grid md:grid-cols-5 items-center `}
          >
            <WaveBackground
              stroke="rgba(100, 100, 100,"
              custStyle="md:w-[40%] h-[60%] left-0 top-0"
            />
            <div className="flex flex-col md:flex-row md:col-span-2 px-6 md:pl-12 xl:pl-20  w-full py-6 md:py-10 xl:py-0 mx-auto items-center gap-10 bg-gradient-to-b md:bg-gradient-to-r from-[#002b3e] to-[#016885] h-full ">
              {/* Left Side (Text) */}
              <div className="flex-1 flex flex-col  items-start">
                <div className="mb-4  flex z-40 items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-4 mr-4">
                    <SlBadge className="text-3xl p-0 text-white " />
                  </div>
                  <div className="w-1 h-14 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold z-40 text-4xl lg:text-6xl leading-16 mb-2 md:mb-4">
                  {t("hero.slide1.title")}
                </h1>
                <div className="text-gray-200 text-lg z-40 md:text-2xl mb-6">
                  {t("hero.slide1.subtitle")}
                </div>
                <button className="bg-white relative z-40 text-teal-900 text-lg font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-200 transition-all duration-300">
                  {t("hero.slide1.button")}
                </button>
              </div>

              {/* Right Side (Image) */}
            </div>
            <div className="w-full h-full md:col-span-3 -z-10 -mt-[2px] md:-mt-0 md:-ml-[1px]">
              <div className="relative w-full  h-full">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2656913525/display_1500/stock-photo-person-s-hands-cupping-around-a-glowing-holographic-icon-representing-customer-loyalty-vip-clients-2656913525.jpg"
                  alt="Hero illustration"
                  className=" w-full  md:min-h-96 h-full object-cover "
                ></img>
                <div
                  className={`absolute  inset-0 bg-gradient-to-b   md:bg-gradient-to-r  
              from-[#016885] via-[#016885]/40 to-transparent via-40%`}
                ></div>
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
              custStyle="md:w-[40%] h-[60%] left-0 top-0"
            />
            <div className="flex flex-col md:flex-row md:col-span-2 px-6 md:pl-12 xl:pl-20  w-full py-6 md:py-10 xl:py-0 mx-auto items-center gap-10 bg-gradient-to-b md:bg-gradient-to-r from-[#989996] to-[#cbd0ce] h-full ">
              {/* Left Side (Text) */}
              <div className="flex-1 flex flex-col  items-start">
                <div className="mb-4  flex z-40 items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-4 mr-4">
                    <LuUsers className="text-3xl text-white " />
                  </div>
                  <div className="w-1 h-14 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold z-40 text-4xl lg:text-6xl leading-16 mb-2 md:mb-4">
                  {t("hero.slide2.title")}
                </h1>
                <div className="text-gray-200 text-lg z-40 md:text-2xl mb-6">
                  {t("hero.slide2.subtitle")}
                </div>
                <button className="bg-white relative z-40 text-teal-900 text-lg font-semibold rounded-lg px-8 py-3 shadow hover:bg-gray-200 transition-all duration-300">
                  {t("hero.slide2.button")}
                </button>
              </div>

              {/* Right Side (Image) */}
            </div>
            <div className="w-full h-full md:col-span-3 -z-10 -mt-[2px] md:-mt-0 md:-ml-[1px]">
              <div className="relative w-full  h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://www.shutterstock.com/shutterstock/videos/1111753583/preview/stock-footage-videoconference-event-of-group-multinational-physicians-cardiologists-having-medical-council-using.webm"
                  alt="Hero illustration"
                  className=" w-full  md:min-h-96 h-full object-cover "
                ></video>
                <div
                  className={`absolute inset-0 bg-gradient-to-b   md:bg-gradient-to-r  
              from-[#cbd0ce] via-[#cbd0ce]/30 to-transparent via-20%`}
                ></div>
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
              custStyle="md:w-[40%] h-[60%] left-0 top-0"
            />
            <div className="flex flex-col md:flex-row md:col-span-2 px-6 md:pl-12 xl:pl-20  w-full py-6 md:py-10 xl:py-0 mx-auto items-center gap-10 bg-gradient-to-b md:bg-gradient-to-r from-[#e9a25f] to-[#df952f] h-full ">
              {/* Left Side (Text) */}
              <div className="flex-1 flex flex-col  items-start">
                <div className="mb-4  flex z-40 items-center">
                  <div className="bg-white/[0.13] flex justify-center items-center rounded-full p-4 mr-4">
                    <MdDiscount className="text-3xl text-white " />
                  </div>
                  <div className="w-1 h-14 bg-white/40 rounded" />
                </div>
                <h1 className="text-white font-bold z-40 text-4xl lg:text-6xl leading-16 mb-2 md:mb-4">
                  {t("hero.slide3.title")}
                </h1>
              </div>

              {/* Right Side (Image) */}
            </div>
            <div className="w-full h-full md:col-span-3 -z-10 -mt-[2px] md:-mt-0 md:-ml-[1px]">
              <div className="relative w-full  h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://www.shutterstock.com/shutterstock/videos/1067598875/preview/stock-footage-joyful-young-couple-friends-african-american-man-woman-s-in-t-shirts-isolated-on-yellow.webm"
                  alt="Hero illustration"
                  className=" w-full  md:min-h-96 h-full object-cover "
                ></video>
                <div
                  className={`absolute inset-0 bg-gradient-to-b   md:bg-gradient-to-r  
              from-[#df952f] via-[#df952f]/30 to-transparent via-20%`}
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
