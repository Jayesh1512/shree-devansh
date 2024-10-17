import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState("top");
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationHandler = (url) => {
    navigate(url);
    setMenu(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0); //naye page pe jaane ke baad scroll upar se hi chalu hona chahiye
  }, [location]);

  const scrollHandler = () => {
    const currScroll = window.scrollY;
    if (currScroll > 0) {
      setNav(currScroll > scroll ? "hide" : "show");
    } else {
      setNav("top");
    }
    setScroll(currScroll);
    if (menu) setMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scroll]);


  return (
    <header
      className={`header fixed w-full h-16 z-10 flex items-center transition-all duration-300 ease-out ${nav} ${
        menu ? "bg-[#352015]" : ""
      }`}
    >
      <ContentWrapper className="flex items-center justify-between w-full px-4 md:px-10">
        {/* Left side (Home, About) */}
        <ul className="nav-list hidden md:flex items-center gap-8">
          <li
            className="nav-list-ele hover:text-white transition-all duration-300"
            onClick={() => navigationHandler("/")}
          >
            Home
          </li>
          <li className="nav-list-ele hover:text-white transition-all duration-300">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              About
            </Link>
          </li>
        </ul>

        {/* Logo in center */}
        <div
          className="logo w-28 mb-2 h-auto cursor-pointer"
          onClick={() => navigationHandler("/")}
        >
          <img src="/img/logos/logo3.png" alt="Logo" />
        </div>

        {/* Right side (Contact Us, Product) */}
        <ul className="nav-list hidden md:flex items-center gap-8">
          <li
            className="nav-list-ele hover:text-white transition-all duration-300"
            onClick={() => navigationHandler("/contact-us")}
          >
            Contact Us
          </li>
          <li
            className="nav-list-ele hover:text-white transition-all duration-300"
            onClick={() => navigationHandler("/product")}
          >
            Product
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mobileView md:hidden">
          {menu ? (
            <VscChromeClose
              className="text-2xl text-white"
              onClick={() => setMenu(false)}
            />
          ) : (
            <SlMenu
              className="text-2xl text-white"
              onClick={() => setMenu(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`nav-list flex flex-col absolute top-16 left-0 bg-[#352015] w-full py-6 md:hidden transition-transform transform ${
            menu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li
            className="nav-list-ele mbView-Ele hover:text-white transition-all duration-300"
            onClick={() => navigationHandler("/")}
          >
            Home
          </li>
          <li
            className="nav-list-ele mbView-Ele hover:text-white transition-all duration-300"
            onClick={() => navigationHandler("/about")}
          >
            About
          </li>
          <li
            className="nav-list-ele mbView-Ele hover:text-white transition-all duration-300"
            onClick={() => navigationHandler("/contact-us")}
          >
            Contact Us
          </li>
          <li
            className="nav-list-ele mbView-Ele hover:text-white transition-all duration-300"
            onClick={() => navigationHandler("/product")}
          >
            Product
          </li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Navbar;
