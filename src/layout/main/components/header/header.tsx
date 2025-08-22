import { memo, useEffect, useState } from "react";
import logoLg from "../../../../shared/assets/logo-lg.svg";
import { navbarCollections } from "../../../../shared/static/navbar-collections";
import { Link, NavLink } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const handleTheme = () => {
    document.body.classList.toggle("dark");
    setTheme((p) => (p == "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={`header bg-[#ffffff80] dark:bg-[#00000080] backdrop-filter-[blur(30px)] sticky top-0 overflow-hidden z-40`}
    >
      <nav className="navbar container flex justify-between items-center h-[80px] max-[1000px]:h-[70px]">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logoLg} alt="" />
          </Link>
        </div>
        <ul className="navbar__collection flex gap-[58px] max-[900px]:hidden">
          {navbarCollections.map((item) => {
            const { id, path, element, activeElement } = item;
            return (
              <li key={id} className="">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-[26px] grid place-items-center ${
                      isActive ? "text-pyc" : "text-black dark:text-sc"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive ? activeElement : element}
                      <span className="text-[16px] capitalize">
                        {path === "/" ? "Home" : path}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="navbar__actions flex items-center gap-4">
          <div className="theme">
            {document.body.className.includes("dark") ? (
              <FiSun
                className="text-2xl cursor-pointer dark:text-white"
                onClick={handleTheme}
              />
            ) : (
              <FiMoon
                className="text-2xl cursor-pointer dark:text-white"
                onClick={handleTheme}
              />
            )}
          </div>
          <button className="bg-pyc py-[18px] px-[68px] rounded-xl text-white font-medium max-[1000px]:px-[30px] max-[1000px]:py-[10px] max-[450px]:hidden">
            Sign In
          </button>
          <FaBars className="bar text-2xl hidden max-[900px]:block" />
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
