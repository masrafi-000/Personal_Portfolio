import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LOGO from "../assets/images/Logo.png";
import { MENU_LINKS } from "../utils/data";

const Navbar = () => {
  const [isOpne, setIsOpen] = useState(true);

  const toogleMenu = () => {
    setIsOpen(!isOpne);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    //set initial state based on screen size
    handleResize();
    // Liseten to resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/* logo */}
        <Link
          to={MENU_LINKS[0].to}
          offset={MENU_LINKS[0].offset}
          smooth
          spy
          className="cursor-pointer"
        >
          <img className="h-7 ml-6 -mb-1" src={LOGO} alt="Logo" />
        </Link>

        {/* Hamburger icon (visible only on small screens) */}
        <button
          onClick={toogleMenu}
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http:''www.w3.org/200/svg"
          >
            {isOpne ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <ul className={`${isOpne ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  activeClass="active"
                  to={item.to}
                  smooth
                  spy
                  offset={item.offset}
                  className="menu-item"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hire Me Button */}
        <Link
          to={MENU_LINKS[4].to}
          offset={MENU_LINKS[4].offset}
          smooth
          spy
          className="hidden md:flex items-center justify-center cursor-pointer h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
