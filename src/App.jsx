import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import HDMCPlus from "./pages/HDMCPlus";
import LeaveFeedback from "./pages/LeaveFeedback";
import ThankYou from "./pages/ThankYou";
import DoctorDetails from "./pages/DoctorDetails";
import EarlyDetection from "./pages/EarlyDetection";
import PriPolicy from "./pages/PriPolicy";
import DoctorsPage from "./pages/DoctorsPage";
import ForPatients from "./pages/ForPatients";
import AboutPage from "./pages/AboutPage";
import Telemedicine from "./pages/Telemedicine";
import ServiceDetails from "./pages/ServiceDetails";
import ExpertiseCenter from "./pages/ExpertiseCenter";
import ExpertiseDirection from "./pages/ExpertiseDirection";
import { useState } from "react";
import Reviews from "./pages/Reviews";
import AboutDiseases from "./pages/AboutDiseases";

function App() {
  const [city, setCity] = useState("Moscow");
  const router = createBrowserRouter([
    {
      element: <AppLayout city={city} setCity={setCity} />,
      children: [
        {
          path: "/",
          element: <Home city={city} />,
        },
        {
          path: "/doctors",
          element: <DoctorsPage />,
        },
        {
          path: "/doctors/:doctorId",
          element: <DoctorDetails />,
        },
        {
          path: "/for-patients",
          element: <ForPatients />,
        },
        {
          path: "/about",
          element: <AboutPage city={city} />,
        },
        {
          path: "/reviews",
          element: <Reviews />,
        },
        {
          path: "/telemedicine-consultation",
          element: <Telemedicine />,
        },
        {
          path: "/center-of-expertise",
          element: <ExpertiseCenter />,
        },
        {
          path: "/center-of-expertise/:direction",
          element: <ExpertiseDirection />,
        },
        {
          path: "/hdmc-plus",
          element: <HDMCPlus />,
        },
        {
          path: "/services/:serviceId",
          element: <ServiceDetails />,
        },
        {
          path: "/early-detection-program",
          element: <EarlyDetection />,
        },
        {
          path: "/about-diseases/:newsId",
          element: <AboutDiseases />,
        },
        {
          path: "/leave-a-feedback",
          element: <LeaveFeedback />,
        },
        {
          path: "/thank-you-hdmc",
          element: <ThankYou />,
        },
        {
          path: "/privacy-policy",
          element: <PriPolicy />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
