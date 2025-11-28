"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={` top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 ${className} fixed  ${isScrolled ? "bg-[#111827]/95 backdrop-blur-md shadow-lg" : "bg-transparent"} `}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-xl sm:text-2xl font-bold tracking-wider">
          SPORTS
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-200 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#Sports" className="text-white hover:text-gray-200 transition-colors text-sm lg:text-base">
            Sports
          </a>
          <a href="#packages" className="text-white hover:text-gray-200 transition-colors text-sm lg:text-base">
            Packages
          </a>
          <a href="#WhyUs" className="text-white hover:text-gray-200 transition-colors text-sm lg:text-base">
            Why Us
          </a>
          <a href="#Contact" className="text-white hover:text-gray-200 transition-colors text-sm lg:text-base">
            Contact
          </a>
          <button onClick={() => {
            document.getElementById("Contact")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-full transition-colors text-sm lg:text-base">
            Plan a trip
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-3 flex flex-col bg-white p-4 rounded-lg shadow-lg justify-center align-center">
          <a href="#Sports" className="text-black hover:text-gray-200 transition-colors block py-2 w-fit">
            Sports
          </a>
          <a href="#Packages" className="text-black hover:text-gray-200 transition-colors block py-2">
            Packages
          </a>
          <a href="# WhyUs" className="text-black hover:text-gray-200 transition-colors block py-2">
            Why Us
          </a>
          <a href="#Contact" className="text-black hover:text-gray-200 transition-colors block py-2">
            Contact
          </a>
          <button onClick={() => {
            document.getElementById("Contact")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors w-full">
            Plan a trip
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
