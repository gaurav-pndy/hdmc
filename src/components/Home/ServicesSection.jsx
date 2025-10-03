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
        <h2 className="text-brand1 mx-auto px-4 text-center text-4xl md:text-5xl font-bold mb-6">
          {t("services.title")}
        </h2>
        <p className="text-lg md:text-xl px-4 text-center text-brand1/90  max-w-3xl mx-auto mb-10">
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
              spaceBetween: 10,
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
              spaceBetween: 30,
            },
          }}
          className=" !py-10 !pb-20 "
        >
          {services.map((service, index) => {
            const isActive = index === activeIndex % services.length;

            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative group rounded-3xl p-4 md:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-in-out cursor-pointer h-[28rem] md:h-[30rem] border border-white/20 backdrop-blur-xl bg-white/70 ${
                    isActive
                      ? "scale-105 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                      : "scale-95 hover:scale-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                  }`}
                >
                  {/* Decorative Glow Background */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-28 -right-28 w-56 h-56 bg-gradient-to-tr from-brand1/30 to-brand1/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-br from-brand1/20 to-transparent rounded-full blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1">
                    {/* Icon */}
                    <div className="w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-brand1 to-brand1/80 flex items-center justify-center shadow-lg shadow-brand1/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <img
                        src={service.image}
                        alt=""
                        className="w-12 h-12 object-contain brightness-0 invert"
                      />
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-bold text-gray-900 mb-3 text-[1.3rem] leading-tight tracking-tight">
                      {t(service.title)}
                    </h3>
                    <p className="text-gray-600 text-base line-clamp-4 ">
                      {t(service.desc)}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="relative z-10 mt-8">
                    <button className="w-full bg-gradient-to-r from-brand1 to-brand1/80 cursor-pointer hover:from-brand1/90 hover:to-brand1/70 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-500 shadow-lg shadow-brand1/30 hover:shadow-xl hover:shadow-brand1/40 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                      <span className="tracking-wide">
                        {t("services.moreBtn")}
                      </span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
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
