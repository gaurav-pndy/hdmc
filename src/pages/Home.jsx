import React from "react";
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

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DoctorsSection />
      <ServicesSection />
      <PatientMap />
      <TestimonialsSection />
      <MembershipSection />
      <BookingForm />
      <ContactSection />
      <AddressSection />
    </div>
  );
};

export default Home;
