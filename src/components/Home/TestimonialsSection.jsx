import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiPlay1 } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Place YouTube video IDs corresponding to each testimonial
const testimonials = [
  {
    country: "US USA",
    name: "Sarah Johnson",
    stars: 5,
    text: "Excellent care and professional IMETC consultation helped me get the right treatment.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    country: "AE UAE",
    name: "Ahmad Al-Rashid",
    stars: 5,
    text: "The telemedicine service connected me with world-class specialists.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    country: "ES Spain",
    name: "Maria Garcia",
    stars: 5,
    text: "Professional diagnosis and treatment plan from Moscow clinic.",
    videoId: "dQw4w9WgXcQ",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleOpen = (idx) => setSelectedIdx(idx);
  const handleClose = () => setSelectedIdx(null);

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-brand1 text-center text-4xl font-bold mb-10">
          {t("testimonials.title")}
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-7">
          {testimonials.map((test, idx) => (
            <TestimonialCard
              key={idx}
              test={test}
              idx={idx}
              handleOpen={handleOpen}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-7">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides
            pagination={{ clickable: true }}
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialCard
                  test={test}
                  idx={idx}
                  handleOpen={handleOpen}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center">
          <a href="/testimonials">
            <button className="bg-brand1 text-white font-semibold rounded-lg px-8 py-3 shadow hover:bg-brand5/90 transition text-lg block mx-auto">
              {t("testimonials.allBtn")}
            </button>
          </a>
        </div>
      </div>

      {/* Dialog/Modal for video playback */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-6 pt-14 relative flex flex-col">
            <button
              className="absolute cursor-pointer top-4 right-4 text-2xl text-brand1 hover:text-brand5"
              onClick={handleClose}
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
            <div className="text-brand1/80 text-base leading-snug">
              {testimonials[selectedIdx].text}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Separate Testimonial Card Component
const TestimonialCard = ({ test, idx, handleOpen }) => (
  <div
    className="bg-white rounded-lg border border-brand4/20 shadow-sm p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    onClick={() => handleOpen(idx)}
  >
    <div className="relative mb-4">
      <span className="absolute left-3 top-3 bg-white text-black text-xs px-3 py-1 rounded-full z-10">
        {test.country}
      </span>
      <div className="rounded-lg bg-[#cccccc] h-48 flex items-center justify-center relative">
        <button
          className="relative z-10 bg-white text-brand1 rounded-full p-3 mx-auto cursor-pointer flex items-center justify-center shadow"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen(idx);
          }}
          aria-label="Play Video"
        >
          <CiPlay1 />
        </button>
      </div>
    </div>
    <div className="flex items-center justify-between mb-2">
      <div className="font-semibold text-black text-lg">{test.name}</div>
      <div className="flex flex-row">
        {Array(test.stars)
          .fill(0)
          .map((_, i) => (
            <svg key={i} viewBox="0 0 16 16" height="18" width="18">
              <polygon
                points="8,2 10,6 14,6 11,9 12,13 8,11 4,13 5,9 2,6 6,6"
                fill="#ffd700"
              />
            </svg>
          ))}
      </div>
    </div>
    <div className="text-brand1/80 text-sm leading-tight">"{test.text}"</div>
  </div>
);

export default TestimonialsSection;
