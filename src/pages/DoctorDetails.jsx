import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { doctorsData } from "../data/doctors";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const { t } = useTranslation();

  const doctor = doctorsData.find((doc) => doc.id === doctorId);
  if (!doctor) return <div>{t("doctors.notFound")}</div>;

  // Prepare translated fields
  const name = t(doctor.name);
  const location = t(doctor.location);
  const tags = t(doctor.tags, { returnObjects: true });
  const langs = t(doctor.langs);
  const descHtml = t(doctor.desc);

  // Possible extra info, or use default
  // const experience = t(doctor.experience || '');
  // const specialization = t(doctor.specializations || '');

  return (
    <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8 mt-10">
      <div className="flex gap-8 mb-8">
        <img
          src={doctor.image}
          alt={name}
          className="w-32 h-32 object-cover rounded-xl shadow"
        />
        <div>
          <h1 className="text-2xl font-extrabold text-brand1 mb-1">{name}</h1>
          <div className="text-brand4/90 font-medium mb-2">
            {tags.join(", ")}
          </div>
          <div className="text-brand1/70 mb-2">{location}</div>
          <div className="text-sm mb-2">
            <span className="font-medium">{t("doctors.languages")}: </span>
            {langs}
          </div>
        </div>
      </div>
      <div
        className="prose max-w-none text-brand1/90"
        dangerouslySetInnerHTML={{ __html: descHtml }}
      />

      {/* Example: Add more sections below for reviews, specialization, education, etc */}
      {/* ... */}
    </section>
  );
};

export default DoctorDetails;
