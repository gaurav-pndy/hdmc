import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    image: "/services/1.svg",
    title: "services.s1.title",
    desc: "services.s1.desc",
  },
  {
    image: "/services/2.svg",
    title: "services.s2.title",
    desc: "services.s2.desc",
  },
  {
    image: "/services/3.svg",
    title: "services.s3.title",
    desc: "services.s3.desc",
  },
  {
    image: "/services/4.svg",
    title: "services.s4.title",
    desc: "services.s4.desc",
  },
  {
    image: "/services/5.svg",
    title: "services.s5.title",
    desc: "services.s5.desc",
  },
  {
    image: "/services/6.svg",
    title: "services.s6.title",
    desc: "services.s6.desc",
  },
  {
    image: "/services/7.svg",
    title: "services.s7.title",
    desc: "services.s7.desc",
  },
  {
    image: "/services/8.svg",
    title: "services.s8.title",
    desc: "services.s8.desc",
  },
  {
    image: "/services/9.svg",
    title: "services.s9.title",
    desc: "services.s9.desc",
  },
  {
    image: "/services/10.svg",
    title: "services.s10.title",
    desc: "services.s10.desc",
  },
  {
    image: "/services/11.svg",
    title: "services.s11.title",
    desc: "services.s11.desc",
  },
  {
    image: "/services/12.svg",
    title: "services.s12.title",
    desc: "services.s12.desc",
  },
  {
    image: "/services/13.svg",
    title: "services.s13.title",
    desc: "services.s13.desc",
  },
  {
    image: "/services/14.svg",
    title: "services.s14.title",
    desc: "services.s14.desc",
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full bg-[#fbfbfc] py-16">
      <div className=" mx-auto ">
        <h2 className="text-brand1 px-4 text-center text-4xl font-bold mb-6">
          {t("services.title")}
        </h2>
        <p className="text-lg px-4 text-center text-brand1/80 mb-10 max-w-3xl mx-auto">
          {t("services.subtitle")}
        </p>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            nextEl: ".swiper-button-next-custom2",
            prevEl: ".swiper-button-prev-custom2",
          }}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.4,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4.1,
            },
          }}
          className=" !py-10 !pb-20 "
        >
          {services.map((service, index) => {
            const isActive = index === activeIndex % services.length;

            return (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between overflow-hidden transition-all  duration-500 ease-in-out cursor-pointer h-96 xl:h-90 ${
                    isActive ? "scale-110 z-10" : "scale-95"
                  }`}
                >
                  <div>
                    <img
                      src={service.image}
                      alt=""
                      className="w-20 mb-4 object-contain self-start"
                    />
                    <div className="font-medium text-black mb-1 text-lg leading-tight">
                      {t(service.title)}
                    </div>
                    <div className="text-brand1/60 text-ellipsis line-clamp-4 mb-3 leading-snug">
                      {t(service.desc)}
                    </div>
                  </div>
                  <div className="flex flex-row text-sm lg:text-base justify-between mt-4 gap-1">
                    <button className="text-brand1 hover:underline cursor-pointer  transition-all duration-300 font-semibold px-0 py-0">
                      {t("services.moreBtn")}
                    </button>

                    <button className="text-brand1 hover:underline  cursor-pointer transition-all duration-300 font-semibold px-0 py-0">
                      {t("services.referralBtn")} &rarr;
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex  z-30 bg-[#ffffff] w-fit mx-auto px-3 py-2 rounded-full gap-3">
            <button className="swiper-button-prev-custom2 bg-[#d9d9d9]  p-2 rounded-full hover:bg-gray-400 cursor-pointer text-black transition-all duration-300">
              <FaChevronLeft />
            </button>
            <button className="swiper-button-next-custom2 bg-[#d9d9d9]  p-2 rounded-full hover:bg-gray-400 cursor-pointer text-black transition-all duration-300">
              <FaChevronRight />
            </button>
          </div>
        </Swiper>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={service.image}
                  alt=""
                  className="w-20 mb-4 object-contain self-start"
                />
                <div className="font-medium text-black mb-1 text-lg leading-tight">
                  {t(service.title)}
                </div>
                <div className="text-brand1/60 mb-3 leading-snug">
                  {t(service.desc)}
                </div>
              </div>
              <div className="flex flex-row  justify-between mt-4 gap-1">
                <button className="text-brand1 hover:underline cursor-pointer  transition-all duration-300 font-semibold px-0 py-0">
                  {t("services.moreBtn")}
                </button>

                <button className="text-brand1 hover:underline  cursor-pointer transition-all duration-300 font-semibold px-0 py-0">
                  {t("services.referralBtn")} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
