import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { IoDocumentTextOutline, IoShieldOutline } from "react-icons/io5";
import { LuCrown, LuUsers } from "react-icons/lu";
import { RiStethoscopeFill } from "react-icons/ri";

// FEATURES
const features = [
  {
    icon: <CiCalendar className="text-brand1 text-4xl" />,
    title: "Приоритетная запись",
    text: "Запись к нужному специалисту или операцию в удобные сроки",
  },
  {
    icon: <IoShieldOutline className="text-brand1 text-4xl" />,
    title: "Скидки на обследования",
    text: "До 20% скидки на диагностические процедуры и обследования",
  },
  {
    icon: <LuUsers className="text-brand1 text-4xl" />,
    title: "Персональный координатор",
    text: "Выделенный ассистент для решения всех медицинских вопросов",
  },
  {
    icon: <RiStethoscopeFill className="text-brand1 text-4xl" />,
    title: "Ежегодный чекап",
    text: "Комплексное профосмотренное обследование 1 раз в год",
  },
  {
    icon: <IoDocumentTextOutline className="text-brand1 text-4xl" />,
    title: "IMETC консультации",
    text: "Дистанционные международные консультации",
  },
  {
    icon: <FiCheckCircle className="text-brand1 text-4xl" />,
    title: "Электронная карта",
    text: "Безлимитный доступ к личной электронной карте 24/7",
  },
];

// PLANS
const plans = [
  {
    title: "Базовый",
    price: "₽15,000",
    period: "/год",
    perks: [
      "Приоритетная запись",
      "15% скидки на услуги",
      "Персональный координатор",
      "1 IMETC консультация/год",
      "Электронная карта",
    ],
  },
  {
    title: "Премиум",
    price: "₽25,000",
    period: "/год",
    main: true,
    perks: [
      "Все из Премиум",
      "Выездные консультации",
      "Персональный врач",
      "Экстренная связь 24/7",
      "Международная страховка",
      "Консьерж-сервис",
    ],
  },
  {
    title: "VIP",
    price: "₽50,000",
    period: "/год",
    perks: [
      "Все из Премиум",
      "Персональный координатор",
      "Ежегодный чекап",
      "Международные справки",
      "Консьерж-сервис",
    ],
  },
];

// FAQ
const faq = [
  {
    question: "Как работает приоритетная запись?",
    answer:
      "Члены HDMC+ могут записаться к нужному врачу с сокращенным временем ожидания и могут записаться к врачу экстренно при появлении новых жалоб или симптомов.",
  },
  {
    question: "Что включают IMETC консультации?",
    answer:
      "IMETC консультации — это возможность получить дистанционное экспертное мнение международных специалистов по вашему медицинскому случаю.",
  },
  {
    question: "Можно ли приостановить членство?",
    answer:
      "Да, членство может быть приостановлено на срок до 6 мес. с сохранением всех преимуществ на оставшийся период.",
  },
];

const MembershipSection = () => {
  // Which FAQ is open
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="w-full bg-[#fbfbfb] py-16">
      <div className="max-w-[87rem] mx-auto px-4 ">
        <div className="flex justify-center">
          <span className="bg-brand4/30 px-4 py-2 text-brand1  rounded-full font-medium mb-2 flex items-center gap-2">
            <LuCrown className="text-lg" /> HDMC+ Членство
          </span>
        </div>
        <h2 className="text-brand1 text-center text-4xl font-bold mb-6">
          Премиум медицинское обслуживание
        </h2>
        <p className="text-lg text-center text-brand1/80 mb-8 max-w-3xl mx-auto">
          Эксклюзивная программа членства для тех, кто ценит качественную
          медицину и персональный подход
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm px-8 py-7 flex flex-col items-center text-center"
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-brand1/30 mb-4">
                {f.icon}
              </span>
              <div className="text-black font-medium text-xl mb-2">
                {f.title}
              </div>
              <div className="text-brand1 text-base">{f.text}</div>
            </div>
          ))}
        </div>

        {/* PLANS */}
        {/* <div>
          <div className="text-center text-brand1 font-bold text-2xl mb-16 mt-12">
            Выберите подходящий план
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center justify-center max-w-5xl mx-auto mb-9">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={
                  "rounded-xl bg-white  " +
                  (plan.main
                    ? "border-3 border-brand1 shadow-lg scale-105 z-10"
                    : " shadow-sm hover:shadow-lg transition") +
                  " px-8 py-12 flex flex-col items-center relative"
                }
                style={
                  plan.main
                    ? { boxShadow: "0 8px 36px 0 rgba(50, 186, 189, 0.08)" }
                    : {}
                }
              >
                {plan.main && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand1 px-4 py-1.5 text-xs text-white rounded-full shadow flex items-center gap-1">
                    <FaStar /> Пoпулярный
                  </span>
                )}
                <div className="font-medium text-black text-xl mb-4">
                  {plan.title}
                </div>
                <span className="text-brand1 text-3xl font-bold ">
                  {plan.price}
                  <span className="text-brand1 text-base font-medium">
                    {plan.period}
                  </span>
                </span>
                <ul className="mt-4 mb-8 w-full flex flex-col text-brand1">
                  {plan.perks.map((perk, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm mb-3 "
                    >
                      <FiCheckCircle className="" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button className="bg-brand1 text-white font-semibold rounded-lg px-6 w-full py-2.5 shadow hover:bg-[#0e4865] transition-all duration-300 cursor-pointer text-base ">
                  Выбрать план
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* FAQ Accordion */}
        <div>
          <div className="text-center text-brand1 font-bold text-2xl mb-16 mt-16">
            {" "}
            Часто задаваемые вопросы
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-7">
            {faq.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-lg bg-white border border-brand4/20 px-6 py-4 cursor-pointer transition shadow-md`}
              >
                <div className="flex justify-between items-center font-medium text-black text-lg">
                  <span>{item.question}</span>
                </div>
                <div className="mt-2 text-brand1">{item.answer}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 mb-2">
            <button className="bg-brand1 text-white font-semibold rounded-lg px-8 py-3 shadow hover:bg-brand5/90 transition block mx-auto">
              Присоединиться к HDMC+
            </button>
          </div>
          <div className="text-sm text-brand1/80 text-center mt-4">
            Или свяжитесь с нами для персональной консультации
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
