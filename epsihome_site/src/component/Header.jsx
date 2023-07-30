
import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="/" className="font-bold text-xl">
          Proptech Company
        </a>
        <ul className="flex">
          <li className="ml-6">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="ml-6">
            <a href="/services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li className="ml-6">
            <a href="/about" className="hover:text-gray-400">
              About Us
            </a>
          </li>
          <li className="ml-6">
            <a href="/contact" className="hover:text-gray-400">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;