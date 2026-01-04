import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (currentLocation === "/") {
      const HandleScroll = () => {
        if (window.scrollY > window.innerHeight * 1.6) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", HandleScroll);
      return () => window.removeEventListener("scroll", HandleScroll);
    }
  }, []);

  return (
    <div
      className={`fixed 
        ${scrolled && "text-white "}
        ${currentLocation === "/" ? "text-black" : "text-white"} 

         
        
        top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-10 lg:px-30 py-5`}
    >
      <Link to="/" className="max-md:flex-1">
        <h2 className="text-2xl max-md:text-xl">
          <span className="text-primary">Rakesh </span> Choudhary
        </h2>
      </Link>

      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-2xl z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen min-md:rounded-2xl ${
          scrolled ? " bg-black/90 " : " bg-white/80"
        } md:bg-[rgba(88,90,94,0.5)] md:backdrop-blur md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isOpen ? "max-md:w-full" : "max-md:w-0"
        }
        ${
          currentLocation !== "/" ? " max-md:text-white max-md:bg-black/90" : ""
        } 
        `}
      >
        {isOpen && (
          <XIcon
            className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/"
        >
          Home
        </Link>

        <a
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          href="#About"
        >
          AboutMe
        </a>
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/projects"
        >
          Projects
        </Link>
        <a
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          href="#TT"
        >
          Tools & Tech
        </a>
      </div>
      <div className="flex items-center gap-8">
        <button
          className="px-4 py-1 sm:px-7 sm:py-2 bg-primary  hover:bg-primary-dull transition rounded-[10px] text-white
         font-medium cursor-pointer"
          onClick={() => navigate("contact")}
        >
          Contact Me
        </button>
      </div>

      {!isOpen && (
        <MenuIcon
          className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default Navbar;
