import React, { useState } from "react";
import {
  FaSmile,
  FaFrown,
  FaShieldAlt,
  FaLightbulb,
  FaPaperclip,
  FaTimes,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const initialForm = {
  type: "",
  email: "",
  surname: "",
  name: "",
  patronymic: "",
  message: "",
  agree: false,
  file: null,
};

const LeaveFeedback = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "ru" ? "ru" : "en";
  const [form, setForm] = useState(initialForm);

  const CARDS = [
    {
      icon: <FaSmile className="text-4xl" />,
      key: "thank",

      title: t("feedback.boxes.box1.title"),
      bullets: [
        t("feedback.boxes.box1.point1"),
        t("feedback.boxes.box1.point2"),
      ],
      btn: t("feedback.boxes.box1.button"),
    },
    {
      icon: <FaFrown className="text-4xl" />,
      key: "complaint",
      title: t("feedback.boxes.box2.title"),
      bullets: [
        t("feedback.boxes.box2.point1"),
        t("feedback.boxes.box2.point2"),
      ],
      btn: t("feedback.boxes.box2.button"),
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      key: "corruption",
      title: t("feedback.boxes.box3.title"),
      bullets: [
        t("feedback.boxes.box3.point1"),
        t("feedback.boxes.box3.point2"),
      ],
      btn: t("feedback.boxes.box3.button"),
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      key: "proposal",
      title: t("feedback.boxes.box4.title"),
      bullets: [
        t("feedback.boxes.box4.point1"),
        t("feedback.boxes.box4.point2"),
      ],
      btn: t("feedback.boxes.box4.button"),
    },
  ];

  const BELOW_CARDS = t("feedback.descText", { returnObjects: true });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((f) => ({ ...f, file }));
    }
  };

  const removeFile = () => {
    setForm((f) => ({ ...f, file: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.type || !form.email || !form.message || !form.agree) {
      alert(
        lang === "ru"
          ? "Пожалуйста, заполните все обязательные поля"
          : "Please fill in all required fields"
      );
      return;
    }
    alert(
      lang === "ru" ? "Спасибо за обращение!" : "Thank you for your feedback!"
    );
    setForm(initialForm);
  };

  return (
    <section className="w-full  min-h-screen py-12">
      <div className="max-w-[87rem] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand1 text-4xl md:text-5xl font-bold mb-6">
            {t("feedback.title")}
          </h2>
          <p className="text-lg md:text-xl text-brand1/90 max-w-3xl mx-auto mb-12">
            {t("feedback.subtitle")}
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {CARDS.map((card) => (
            <div
              key={card.key}
              className={`group rounded-2xl shadow-md  transition-all duration-300 p-6 flex flex-col items-start bg-white hover:bg-brand4/20 hover:shadow-lg hover:scale-105`}
            >
              <div
                className={`mb-4 p-4 rounded-xl bg-gradient-to-br from-brand2 to-brand1 text-white shadow-md`}
              >
                {card.icon}
              </div>
              <h3 className="mb-3 font-bold text-gray-800 text-xl md:text-2xl">
                {card.title}
              </h3>
              <ul className="mb-5 pl-5 text-gray-600 list-disc space-y-2 flex-grow">
                {card.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
              <button
                className=" px-6 py-2.5 w-full bg-brand1 hover:bg-brand5/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand1/30"
                type="button"
                onClick={() => setForm((f) => ({ ...f, type: card.key }))}
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>

        <div className=" mb-6">
          <div className="space-y-4 text-brand1 leading-relaxed">
            {BELOW_CARDS.map((p, i) => (
              <p key={i} className="md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-brand1 to-brand4 rounded-full"></div>
            <h2 className="font-bold text-2xl text-brand1">
              {t("feedback.form.heading")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <select
                  className="w-full border-2 border-gray-300 rounded-lg py-3 px-4 focus:border-brand3   transition-all outline-none appearance-none bg-white"
                  value={form.type}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, type: e.target.value }))
                  }
                  required
                >
                  <option value="">{t("feedback.form.select")}</option>
                  <option value="thank">{t("feedback.form.gratitude")}</option>
                  <option value="complaint">
                    {t("feedback.form.complaint")}{" "}
                  </option>
                  <option value="corruption">
                    {t("feedback.form.corruption")}
                  </option>
                  <option value="proposal">
                    {t("feedback.form.proposition")}
                  </option>
                </select>
              </div>

              <input
                type="email"
                className="border-2 border-gray-300 rounded-lg py-3 px-4 focus:border-brand3   transition-all outline-none"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
              />

              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg py-3 px-4 focus:border-brand3   transition-all outline-none"
                placeholder={t("feedback.form.surname")}
                value={form.surname}
                onChange={(e) =>
                  setForm((f) => ({ ...f, surname: e.target.value }))
                }
              />

              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg py-3 px-4 focus:border-brand3   transition-all outline-none"
                placeholder={t("feedback.form.firstName")}
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
              />

              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg py-3 px-4 focus:border-brand3   transition-all outline-none"
                placeholder={t("feedback.form.patronymic")}
                value={form.patronymic}
                onChange={(e) =>
                  setForm((f) => ({ ...f, patronymic: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-4">
              <textarea
                className="border-2 border-gray-300 rounded-lg py-3 px-4 min-h-[200px] focus:border-brand3   transition-all outline-none resize-none"
                placeholder={t("feedback.form.message")}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                required
              />

              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-3 px-4 cursor-pointer hover:border-brand3  transition-all"
                >
                  <FaPaperclip className="text-gray-500" />
                  <span className="text-gray-600 text-sm">
                    {t("feedback.form.attach")}
                  </span>
                </label>

                {form.file && (
                  <div className="mt-2 flex items-center justify-between bg-blue-50 border border-brand4 rounded-lg py-2 px-4">
                    <span className="text-sm text-gray-700 truncate">
                      {form.file.name}
                    </span>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}
              </div>

              <label className="flex gap-3 items-start text-gray-600 text-xs mt-2">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-brand2"
                  checked={form.agree}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, agree: e.target.checked }))
                  }
                  required
                />
                <span className="leading-relaxed">
                  {t("feedback.form.agree")}
                </span>
              </label>

              <button
                className="px-6 py-3 w-full bg-brand1 hover:bg-brand5/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand1/30"
                type="button"
                onClick={handleSubmit}
              >
                {t("feedback.form.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaveFeedback;
