import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/services";

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = servicesData;

  return (
    <section id="services" className="w-full bg-[#fbfbfc] py-16">
      <div className="max-w-[87rem] text-center mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center  gap-8 md:gap-16">
          <div className="md:w-1/2 text-left">
            <h2 className="text-brand1 text-4xl md:text-5xl font-bold mb-6">
              {t("services.title")}
            </h2>
            <p
              className="md:text-lg text-brand1/90"
              dangerouslySetInnerHTML={{ __html: t("services.subtitle") }}
            ></p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/services.png"
              alt="Doctors illustration"
              className="w-full max-h-96 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid mt-10 md:mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.id}`}
              key={index}
              className="flex  items-center group gap-4 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full from-[#125e84] to-[#33babd] flex items-center justify-center shrink-0 group-hover:rotate-15 bg-gradient-to-br group-hover:from-brand2 group-hover:to-brand1 transition-all duration-300 group-hover:scale-110">
                <img
                  src={service.image}
                  alt={t(service.title)}
                  className="w-8 h-8 object-contain brightness-0 invert"
                />
              </div>

              <div>
                <h3 className="text-left group-hover:text-brand2 group-hover:scale-105 transition-all duration-300 cursor-pointer text-gray-900 mb-1 text-lg leading-snug">
                  {t(service.title)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
