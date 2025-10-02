import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-28">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
