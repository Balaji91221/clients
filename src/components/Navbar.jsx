import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png";
import { FaXmark, FaBars } from "react-icons/fa6";
import SinglePage from "../pages/SinglePage";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Use removeEventListener
    };
  }, []); // Add an empty dependency array to run this effect only once

  const navItems = [
    { link: "Home", path: "/" }, // Make sure paths start with "/"
    { link: "About", path: "/about" },
    { link: "Startup", path: "/startup" },
    { link: "Team", path: "/team" },
    { link: "Event", path: "/EventPage" },
    {link:"SinglePage", path :"/blogs/{1}"},
    { link: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <RouterLink // Use RouterLink instead of 'a' tag for Home
            to="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} className="h-14 inline-block items-center" alt="" />
            <span className="text-[#263238]">VTBIF</span>
          </RouterLink>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <RouterLink // Use RouterLink for other navigation links
                to={path}
                
                key={path}
                className="block text-base text-gray-900 hover:underline hover:text-brandPrimary first:font-medium"
              >
                {link}
              </RouterLink>
            ))}
          </ul>

          {/* btn */}
          <div className="space-x-12 hidden lg:flex items-center">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZOvskEBbxZW1_G2iEMujv3U8Q1kbgyEZpr6Mk7KGEaKYKg/viewform" target="_blank" rel="noopener noreferrer">
    <button className="bg-blue-500 text-white font-medium py-2 px-4 transition-all duration-300 rounded hover:bg-blue-900">
    Register Now
    </button>
  </a>
</div>


          {/* menu for only mobile view */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className=" focus:text-gray-500 rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-neutralDGrey">
              {isMenuOpen ? (
                <FaXmark className="h-8 w-8 " />
              ) : (
                <FaBars className="h-8 w-8 " />
              )}
            </button>
          </div>
        </div>

        {/* navitems for mobile */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-white text-black ${isMenuOpen ? "block fixed top-2.5 left-0 right-0" : "hidden "}`}>
          {navItems.map(({ link, path }) => (
            <RouterLink // Use RouterLink for mobile navigation links
              to={path}
              key={path}
              className=" px-2 block text-base  font-bold text-black hover:text-brandPrimary "
            >
              {link}
              
            </RouterLink>
            
          ))}
          
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZOvskEBbxZW1_G2iEMujv3U8Q1kbgyEZpr6Mk7KGEaKYKg/viewform" target="_blank" rel="noopener noreferrer"  className="block w-full bg-gray-50 px-5 py-3 text-center font-bold text-blue-500 hover:bg-gray-100">
              Register Now
            </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;