import { memo } from "react";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-black dark:text-white pb-10">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
