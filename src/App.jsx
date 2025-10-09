import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import HDMCPlus from "./pages/HDMCPlus";
import ServiceDetails from "./pages/ServiceDetails";
import LeaveFeedback from "./pages/LeaveFeedback";

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
          path: "/hdmc-plus",
          element: <HDMCPlus />,
        },
        {
          path: "/leave-a-feedback",
          element: <LeaveFeedback />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
