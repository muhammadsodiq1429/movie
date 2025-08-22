import { memo } from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="DashboardLayout">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default memo(DashboardLayout);
