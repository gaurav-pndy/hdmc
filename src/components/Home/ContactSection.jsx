import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoPaperPlaneOutline } from "react-icons/io5";
import WaveBackground from "../WaveBackground";

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
    <section id="contact" className="w-full bg-[#fafbfc] py-16 mb-8">
      <div className="max-w-[87rem] mx-auto px-4">
        <div className="max-w-[87rem] text-center mx-auto px-4">
          <h2 className="text-brand1 text-center text-4xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="md:text-lg text-center text-brand1/80 mb-8 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="">
          {/* Form Card with Image Background + Gradient Overlay */}

          <section className="relative  rounded-xl  mx-auto grid md:grid-cols-2 items-center overflow-hidden md:min-h-96">
            <WaveBackground
              stroke="rgba(251, 186, 189,"
              custStyle="md:w-1/2 h-[65%] left-0 top-0"
            />
            <div className="relative bg-gradient-to-b md:bg-gradient-to-r from-[#582c23] to-[#695751] z-40 p-4 md:p-10">
              <div className="font-medium text-2xl mb-10 flex items-center gap-2 text-white">
                <IoPaperPlaneOutline />
                {t("contact.heading")}
              </div>

              <div className="grid grid-cols-2  gap-4 mb-3">
                <div>
                  <label className="block text-white  font-semibold mb-1">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    className="border border-brand4 bg-white/90 text-sm rounded-lg px-3 py-2 w-full backdrop-blur-sm"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-white  font-semibold mb-1">
                    {t("contact.phone")}
                  </label>
                  <input
                    type="number"
                    className="border border-brand4 bg-white/90 text-sm rounded-lg px-3 py-2 w-full backdrop-blur-sm"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-white  font-semibold mb-1">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    className="border border-brand4 bg-white/90 text-sm rounded-lg px-3 py-2 w-full backdrop-blur-sm"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-white  font-semibold mb-1">
                    {t("contact.city")}
                  </label>
                  <select
                    className="border border-brand4 bg-white/90 text-sm rounded-lg px-3 py-2 w-full backdrop-blur-sm"
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
                <label className="block text-white  font-semibold mb-1">
                  {t("contact.message")}
                </label>
                <textarea
                  className="border border-brand4 bg-white/90 text-sm rounded-lg px-3 py-2 w-full backdrop-blur-sm"
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              {/* Checkboxes */}
              <div className="flex items-start mt-4">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) =>
                    setForm({ ...form, agree: e.target.checked })
                  }
                  className="mr-2 mt-1"
                  id="form-agree1"
                />
                <label
                  htmlFor="form-agree1"
                  className="text-sm font-medium text-white "
                  dangerouslySetInnerHTML={{ __html: t("contact.checkbox1") }}
                ></label>
              </div>

              <div className="flex items-start mt-2 mb-4">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) =>
                    setForm({ ...form, agree: e.target.checked })
                  }
                  className="mr-2 mt-1"
                  id="form-agree2"
                />
                <label
                  htmlFor="form-agree2"
                  className="text-sm font-medium text-white"
                  dangerouslySetInnerHTML={{ __html: t("contact.checkbox2") }}
                ></label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand1 rounded-lg cursor-pointer flex items-center justify-center gap-2 mt-2 px-2 py-3 text-white font-semibold text-base shadow hover:bg-brand5/90 transition-all duration-300"
              >
                <IoPaperPlaneOutline />
                {t("contact.button")}
              </button>
            </div>
            <div className="w-full   h-full z-30 -mt-[2px] md:-mt-0">
              <div className="relative w-full  h-full">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2560601181/display_1500/stock-photo-businessman-interacting-with-a-glowing-paper-plane-icon-on-a-virtual-interface-symbolizing-message-2560601181.jpg"
                  alt="Services illustration"
                  className=" w-full md:min-h-96  h-full object-cover md:rounded-tr-2xl md:rounded-br-2xl"
                />
                <div
                  className={`absolute   inset-0 bg-gradient-to-b via-30%  md:bg-gradient-to-r from-[#695751] via-[#695751]/40 to-transparent  `}
                ></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
