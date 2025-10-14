import React from "react";
import { useTranslation } from "react-i18next";
import { FaUserShield } from "react-icons/fa";

const OncoInsurance = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 my-14 ">
      <div className="max-w-[87rem] mx-auto rounded-xl py-12 px-6  shadow-lg bg-gradient-to-br from-brand5 to-brand1">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-5 items-start text-white  w-full">
            <div className="flex items-center gap-3 ">
              <FaUserShield className="text-3xl" />
              <span className="text-2xl md:text-3xl font-bold">
                {t("earlyDetection.insurance.title")}
              </span>
            </div>
            <div className="md:text-lg  font-normal mb-3">
              {t("earlyDetection.insurance.desc")}
            </div>
            <button className=" bg-white text-brand1 font-semibold text-base px-7 py-3 rounded-lg shadow hover:bg-transparent border border-white transition-all duration-300 cursor-pointer hover:text-white">
              {t("earlyDetection.insurance.button")}
            </button>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="flex items-center justify-center">
              <div className="w-36 h-36 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
                <FaUserShield className="text-white text-6xl opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-10">
        <button className="  bg-[#125e84] text-white px-10 py-3.5 text-lg rounded-lg  hover:bg-brand5/90 cursor-pointer transition-all duration-300 whitespace-nowrap ">
          {t("earlyDetection.insurance.appointmentBtn")}
        </button>
      </div>
    </section>
  );
};

export default OncoInsurance;
