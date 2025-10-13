import React, { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import DoctorsSection from "../components/Home/DoctorsSection";
import ServicesSection from "../components/Home/ServicesSection";
import PatientMap from "../components/Home/PatientMap";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import MembershipSection from "../components/Home/MembershipSection";
import BookingForm from "../components/Home/BookingForm";
import ContactSection from "../components/Home/ContactSection";
import AddressSection from "../components/Home/AddressSection";
import ActionButtons from "../components/Home/ActionButtons";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      // Give the DOM some time to render the section
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          const topOffset =
            target.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 400);
    }
  }, [location]);
  return (
    <div>
      <HeroSection />
      <AboutSection />

      <DoctorsSection />
      <ServicesSection />

      <PatientMap />
      <MembershipSection />
      <TestimonialsSection />

      {/* <BookingForm /> */}
      <AddressSection />
      <ContactSection />

      <ActionButtons />
    </div>
  );
};

export default Home;
