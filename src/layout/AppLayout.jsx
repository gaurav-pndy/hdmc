import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const AppLayout = ({ city, setCity }) => {
  return (
    <div>
      <ScrollToTop />
      <Header city={city} setCity={setCity} />
      <div className="mt-14 lg:mt-40">
        <Outlet />
        <FloatingButton />
        <Footer city={city} />
      </div>
    </div>
  );
};

export default AppLayout;
