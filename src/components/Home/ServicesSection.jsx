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
      <div className="max-w-[87rem] mx-auto px-4">
        <h2 className="text-brand1 mx-auto px-4 text-center text-4xl md:text-5xl font-bold mb-6">
          {t("services.title")}
        </h2>
        <p className="text-lg md:text-xl px-4 text-center text-brand1/90  max-w-3xl mx-auto mb-12">
          {t("services.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex group items-start gap-3">
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-brand1 flex items-center justify-center shrink-0 group-hover:rotate-15 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand1/80">
                <img
                  src={service.image}
                  alt=""
                  className="w-8 h-8 object-contain brightness-0 invert"
                />
              </div>

              {/* Texts */}
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-xl leading-snug">
                  {t(service.title)}
                </h3>
                <p className="text-gray-600  text-ellipsis line-clamp-4">
                  {t(service.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
