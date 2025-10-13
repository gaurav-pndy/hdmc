import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

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
];

const ServicesSection = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

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
            <div
              key={index}
              className="flex  items-center group gap-4 cursor-pointer"
              onClick={() => setSelectedService(service)}
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
            </div>
          ))}
        </div>
      </div>

      {/* --- Popup Modal --- */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 250 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden p-6 text-left"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 bg-brand1/10 hover:bg-brand1/20 text-brand1 rounded-full p-2 transition-all"
              >
                <IoClose className="text-2xl" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand2 to-brand1 flex items-center justify-center">
                  <img
                    src={selectedService.image}
                    alt={t(selectedService.title)}
                    className="w-14 h-14 object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center text-brand1 mb-3">
                {t(selectedService.title)}
              </h3>

              {/* Description */}
              <p
                className="text-brand1/80 text-center leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{
                  __html: t(selectedService.desc),
                }}
              ></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
