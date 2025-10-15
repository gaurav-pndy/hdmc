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

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
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
          path: "/hdmc-plus",
          element: <HDMCPlus />,
        },
        {
          path: "/early-detection-program",
          element: <EarlyDetection />,
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
