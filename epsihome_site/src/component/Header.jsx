import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 fixed top-0 left-0 text-white w-[100%] py-4">
      <nav className="container mx-auto px-4 flex flex-wrap items-center md:justify-between justify-center">
        <a href="/" className="flex items-center text-white font-bold text-xl">
          EpsiHome
        </a>
        <ul className="flex ml-8 flex-wrap list-none">
          <li className="md:ml-6 ml-2">
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#faq" className="hover:text-gray-400">
              FAQ
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#benefits" className="hover:text-gray-400">
              Benefits
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#contact" className="hover:text-gray-400">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
