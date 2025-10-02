import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    experience: "18 лет опыта",
    name: "Петров Андрей Викторович",
    tags: ["Онкология", "Химиотерапия"],
    desc: "Ведущий онколог клиники, специалист по химиотерапии и...",
    location: "Москва, Махачкала",
    schedule: "Пн-Пт",
    languages: "Русский, English",
  },
  {
    experience: "12 лет опыта",
    name: "Иванова Елена Сергеевна",
    tags: ["Лучевая диагностика", "КТ диагностика"],
    desc: "Врач-рентгенолог высшей категории, специалист по КТ Врач-рентгенолог высшей категории, специалист по КТ ",
    location: "Москва",
    schedule: "Ежедневно",
    languages: "Русский, English, Deutsch",
  },
  {
    experience: "22 лет опыта",
    name: "Смирнов Олег Михайлович",
    tags: ["Кардиология", "Внутренние болезни"],
    desc: "Кардиолог-терапевт, специалист по диагностике и лечению...",
    location: "Махачкала",
    schedule: "Пн-Сб",
    languages: "Русский, English",
  },
  {
    experience: "16 лет опыта",
    name: "Федорова Наталья Викторовна",
    tags: ["Хирургия", "Онкохирургия"],
    desc: "Хирург-онколог, специалист по малоинвазивным операциям",
    location: "Москва, Махачкала",
    schedule: "Вт-Чт",
    languages: "Русский, English",
  },
  {
    experience: "16 лет опыта",
    name: "Федорова Наталья Викторовна",
    tags: ["Хирургия", "Онкохирургия"],
    desc: "Хирург-онколог, специалист по малоинвазивным операциям",
    location: "Москва, Махачкала",
    schedule: "Вт-Чт",
    languages: "Русский, English",
  },
  {
    experience: "16 лет опыта",
    name: "Федорова Наталья Викторовна",
    tags: ["Хирургия", "Онкохирургия"],
    desc: "Хирург-онколог, специалист по малоинвазивным операциям",
    location: "Москва, Махачкала",
    schedule: "Вт-Чт",
    languages: "Русский, English",
  },
];

const DoctorsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full  py-16 flex flex-col items-start max-w-[87rem] px-4 mx-auto">
      <h2 className="text-brand1 text-4xl font-bold mb-4">
        {t("doctors.title")}
      </h2>
      <p className="text-lg text-brand1/80  max-w-3xl">
        {t("doctors.subtitle")}
      </p>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-end w-full mt-2 gap-2">
        <button className="prev-btn bg-white rounded px-3 py-2 border border-brand4 text-brand1 transition hover:bg-brand4/10">
          &lt;
        </button>
        <button className="next-btn bg-white rounded px-3 py-2 border border-brand4 text-brand1 transition hover:bg-brand4/10">
          &gt;
        </button>
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 4 },
        }}
        className="w-full overflow-visible "
      >
        {cards.map((doc, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white my-4 rounded-xl  hover:-translate-y-1 shadow-md transition-all duration-300 p-4 flex flex-col justify-between h-full">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRvY3RvcnxlbnwwfHwwfHx8Mg%3D%3D"
                  alt="Doctor Image"
                  className="w-full h-60 object-cover rounded-lg"
                />
                <div className="text-brand1/80 absolute top-2 right-2 font-medium text-xs bg-white px-2 py-1 rounded-full">
                  {doc.experience}
                </div>
                <div className="font-bold text-black text-xl mt-4 mb-3 leading-tight">
                  {doc.name}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {doc.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full border border-brand4 text-black text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-brand1 text-sm mb-3 leading-snug max-h-[44px] overflow-hidden text-ellipsis line-clamp-2">
                  {doc.desc}
                </div>
                <div className="flex flex-row gap-6 items-center mb-3 text-brand1/90 text-xs">
                  <span className="flex items-center">
                    <FaLocationDot className="mr-1" /> {doc.location}
                  </span>
                  <span className="flex items-center">
                    <FaRegCalendar className="mr-1" /> {doc.schedule}
                  </span>
                </div>
                <div className="text-brand1/60 text-xs">Языки:</div>
                <div className="text-brand1 text-sm font-medium">
                  {doc.languages}
                </div>
              </div>
              <button className="bg-brand1 mt-4 text-white font-medium rounded-lg cursor-pointer px-6 py-2.5 shadow hover:bg-[#105374] transition-all duration-300 text-base block w-full">
                {t("doctors.viewProfile")}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DoctorsSection;
