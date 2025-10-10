import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-14 md:mt-40">
        <Outlet />
        <FloatingButton />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
