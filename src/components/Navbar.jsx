import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about", "skills", "projects", "resume", "contact"];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        <h1
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent select-none"
          aria-label="Vijayalakshmi S"
        >
          Vijayalakshmi
        </h1>

        {/* Hamburger button */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out
              ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded transition-opacity duration-300 ease-in-out
              ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out
              ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
          ></span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "home" ? "/" : `/${item}`}
                className={`capitalize transition-colors duration-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded ${
                  location.pathname === `/${item === "home" ? "" : item}`
                    ? "text-purple-400"
                    : "text-white"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden px-5 pb-6 bg-gray-900 origin-top transform transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            to={item === "home" ? "/" : `/${item}`}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-white capitalize text-base font-medium hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
