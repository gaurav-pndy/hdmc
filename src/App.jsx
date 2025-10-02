import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import HDMCPlus from "./pages/HDMCPlus";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
