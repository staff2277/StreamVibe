import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between z-20 items-center max-sm:pt-5 sm:pt-8 absolute w-full   sm:px-[50px]  max-sm:px-[20px]">
      <div className="flex items-center gap-2">
        <img
          className="sm:w-[90px] max-sm:w-[50px]"
          src="/images/logo.svg"
          alt="logo"
        />
        <img
          className="sm:w-[100px] max-sm:w-[70px]"
          src="/images/StreamVibe.svg"
          alt="logo"
        />
      </div>
      <nav
        className={clsx({
          "border-[#363636] ": location.pathname === "/moviesXshows",
          "flex bg-[#0F0F0F] px-[50px] mr-[120px] max-lg:hidden gap-3 border-[4px] border-[#1F1F1F]  py-[10px] rounded-xl items-center": true,
        })}
      >
        <Link
          to="/"
          className={clsx({
            "py-4 px-5 bg-[#1A1A1A] rounded-lg": location.pathname === "/",
          })}
        >
          Home
        </Link>
        <Link
          to="/moviesXshows"
          className={clsx({
            "py-4 px-5 bg-[#1A1A1A] rounded-lg":
              location.pathname === "/moviesXshows",
          })}
        >
          MoviesXShows
        </Link>
        <Link
          to="/support"
          className={clsx({
            "py-4 px-5 bg-[#1A1A1A] rounded-lg":
              location.pathname === "/support",
          })}
        >
          Support
        </Link>
        <Link
          to="/subscriptions"
          className={clsx({
            "py-4 px-5 bg-[#1A1A1A] rounded-lg":
              location.pathname === "/subscriptions",
          })}
        >
          Subscriptions
        </Link>
      </nav>

      <div className="max-lg:hidden flex items-center gap-3">
        <span>
          <img src="/images/search.svg" alt="search icon" />
        </span>
        <span>
          <img src="/images/notification.svg" alt="notification icon" />
        </span>
      </div>
      <div className="lg:hidden  max-sm:px-[10px] max-sm:py-[20px] max-lg:px-[20px] max-lg:py-[25px] rounded-xl">
        <span className="">
          <img src="/images/menu.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
