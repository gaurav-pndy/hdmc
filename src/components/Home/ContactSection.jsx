import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { IoPaperPlaneOutline } from "react-icons/io5";

const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
    agree: false,
  });

  return (
    <section className="w-full bg-[#fafbfc] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-[87rem] text-center mx-auto px-4">
          <h2 className="text-brand1 text-center  text-4xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-center text-brand1/80 mb-8 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
        <div className=" gap-8 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-xl shadow p-10">
            <div className="font-medium text-2xl mb-10 flex items-center gap-2">
              {" "}
              <IoPaperPlaneOutline />
              {t("contact.heading")}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block font-semibold mb-1">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  {t("contact.phone")}
                </label>
                <input
                  type="number"
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  {t("contact.city")}
                </label>
                <select
                  className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full "
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                >
                  <option value="">{t("contact.chooseCity")}</option>
                  <option value="Moscow">{t("contact.moscow")}</option>
                  <option value="Makhachkala">
                    {t("contact.makhachkala")}
                  </option>
                  <option value="another city">{t("contact.another")}</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">
                {t("contact.message")}
              </label>
              <textarea
                className="border border-gray-200 text-sm rounded-lg px-3 py-2 w-full "
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="flex items-start my-4">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="mr-2  mt-1"
                id="form-agree"
              />
              <label htmlFor="form-agree" className="text-sm font-medium">
                {t("contact.privacy")}
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-brand1 rounded-lg cursor-pointer flex items-center justify-center gap-2 mt-2 px-2 py-3  text-white font-semibold text-base shadow hover:bg-brand5/90 transition-all duration-300"
            >
              <IoPaperPlaneOutline />
              {t("contact.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
