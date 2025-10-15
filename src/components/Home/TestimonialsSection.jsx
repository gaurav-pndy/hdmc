import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CiPlay1 } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    country: "USA",
    isoCode: "us",
    name: "Sarah Johnson",
    stars: 5,
    text: "Excellent care and professional IMETC consultation helped me get the right treatment. Excellent care and professional IMETC consultation helped me get the right treatment. Excellent care and professional IMETC consultation helped me get the right treatment.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    country: "USA",
    isoCode: "us",
    name: "Sarah Johnson",
    stars: 5,
    text: "Excellent care and professional IMETC consultation helped me get the right treatment. Excellent care and professional IMETC consultation helped me get the right treatment. Excellent care and professional IMETC consultation helped me get the right treatment.",
    image: "https://i.pravatar.cc/150?img=1",
    videoId: "dQw4w9WgXcQ",
  },
  {
    country: "India",
    isoCode: "in",
    name: "Rahul Mehta",
    stars: 4.8,
    text: "The team guided me throughout the treatment process seamlessly.Excellent care and professional IMETC consultation helped me get the right treatment. Excellent care and professional IMETC consultation helped me get the right treatment.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    country: "UAE",
    isoCode: "ae",
    name: "Ahmad Al-Rashid",
    stars: 4.2,
    text: "The telemedicine service connected me with world-class specialists. Excellent care and professional IMETC consultation helped me get the right treatment. Excellent care and professional IMETC consultation helped me get the right treatment.",
    image: "https://i.pravatar.cc/150?img=3",
    videoId: "dQw4w9WgXcQ",
  },
  {
    country: "UAE",
    isoCode: "ae",
    name: "Ahmad Al-Rashid",
    stars: 4.2,
    text: "The telemedicine service connected me with world-class specialists. Excellent care and professional IMETC consultation helped me get the right treatment. Excellent care and professional IMETC consultation helped me get the right treatment.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    country: "Spain",
    isoCode: "es",
    name: "Maria Garcia",
    stars: 5,
    text: "Professional diagnosis and treatment plan from Moscow clinic. Excellent care and professional IMETC consultation helped me get the right treatment.",
    image: "https://i.pravatar.cc/150?img=5",
    videoId: "dQw4w9WgXcQ",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Refs for custom navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleOpen = (idx) => setSelectedIdx(idx);
  const handleClose = () => setSelectedIdx(null);

  return (
    <section id="reviews" className="w-full py-12 bg-white ">
      <div className="max-w-7xl relative mx-auto px-4">
        <h2 className="text-brand1 text-center text-4xl md:text-5xl font-bold mb-10">
          {t("testimonials.title")}
        </h2>

        {/* Custom arrows */}
        <div className="absolute top-1/2 left-0 xl:-left-5 transform -translate-y-1/2 z-20 flex">
          <button
            ref={prevRef}
            className="cursor-pointer  text-brand1  transition"
          >
            <FaChevronLeft size={32} />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 xl:-right-5 transform -translate-y-1/2 z-20 flex">
          <button
            ref={nextRef}
            className="cursor-pointer text-brand1  transition"
          >
            <FaChevronRight size={32} />
          </button>
        </div>

        {/* Swiper carousel */}
        <div className="mb-7">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop={true}
            onSwiper={(swiper) => {
              // Delay assigning refs until after render
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx} className="py-10">
                <TestimonialCard
                  test={test}
                  idx={idx}
                  handleOpen={handleOpen}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="/testimonials">
            <button className="bg-brand1 text-white font-semibold rounded-lg px-8 py-3 shadow hover:bg-brand5/90 cursor-pointer transition-all duration-300 text-lg">
              {t("testimonials.allBtn")}
            </button>
          </a>
        </div>
      </div>

      {/* Video modal */}
      {selectedIdx !== null && testimonials[selectedIdx].videoId && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-6 pt-14 relative flex flex-col">
            <button
              className="absolute top-4 right-4 text-2xl text-brand1 hover:text-brand5"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close"
            >
              <IoClose />
            </button>
            <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${testimonials[selectedIdx].videoId}?autoplay=1`}
                title="Patient testimonial video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-xl w-full h-full"
              />
            </div>
            <div className="font-bold text-lg text-brand1 mb-2">
              {testimonials[selectedIdx].name} -{" "}
              {testimonials[selectedIdx].country}
            </div>
            <div className="text-brand1 text-base leading-snug">
              {testimonials[selectedIdx].text}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const TestimonialCard = ({ test, idx, handleOpen }) => {
  const hasVideo = !!test.videoId;
  return (
    <div
      className={`rounded-lg shadow-md h-96 p-6 flex flex-col transition-all duration-300 hover:shadow-xl ${
        hasVideo
          ? "bg-gradient-to-br from-brand2 to-brand1 text-white "
          : "bg-white text-brand1 "
      } cursor-pointer relative`}
    >
      {" "}
      {/* Avatar + name */}{" "}
      <div className="flex gap-3 mb-4">
        {" "}
        <img
          src={test.image}
          alt={test.name}
          className="w-20 md:w-22 h-20 md:h-22 rounded-full object-cover border-4 border-brand4/40"
        />{" "}
        <div className="flex-1 flex items-start justify-between">
          {" "}
          <div>
            {" "}
            <div className="font-semibold text-lg md:text-xl">
              {test.name}
            </div>{" "}
            <div className="text-sm md:text-base">
              {" "}
              <div className="text-sm md:text-base flex items-center gap-2">
                {" "}
                {test.isoCode && (
                  <img
                    src={`https://flagcdn.com/24x18/${test.isoCode}.png`}
                    alt={test.country}
                    className="w-6 h-4 object-cover rounded-sm"
                  />
                )}{" "}
                {test.country}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-1 font-semibold">
            {" "}
            {test.stars} <FaStar className="text-yellow-300" />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Text */}{" "}
      <div className={`flex-1 border-t border-brand4 pt-4 `}>
        {" "}
        “{test.text}”{" "}
      </div>{" "}
      {/* Play overlay if video */}{" "}
      {hasVideo && (
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40 rounded-lg"
          onClick={() => handleOpen(idx)}
        >
          {" "}
          <button
            className="bg-white text-brand1 rounded-full p-4 shadow-lg"
            aria-label="Play video"
          >
            {" "}
            <CiPlay1 size={28} />{" "}
          </button>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default TestimonialsSection;
