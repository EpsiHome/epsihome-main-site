import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="bg-gray-800 fixed top-0 left-0 text-white w-[100%] py-4">
      <nav className="container mx-auto px-4 flex flex-wrap items-center md:justify-between justify-center">
        <a href="/" className="flex items-center text-white font-bold text-xl">
          EpsiHome
        </a>
        <ul className="flex ml-8 flex-wrap list-none">
          <li className="md:ml-6 ml-2">
            <a href="#services" className="hover:text-gray-400">
              {t("header.services")}
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#about" className="hover:text-gray-400">
              {t("header.about")}
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#faq" className="hover:text-gray-400">
              {t("header.faq")}
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#benefits" className="hover:text-gray-400">
              {t("header.benefits")}
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <a href="#contact" className="hover:text-gray-400">
              {t("header.contactUs")}
            </a>
          </li>
          <li className="md:ml-6 ml-2">
            <div className="relative">
              <button className="flex items-center text-white hover:text-gray-400 focus:outline-none">
                <span className="mr-2">{t("header.language")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.172 6.172a6 6 0 018.657 7.656A1 1 0 1113.828 12H11v2a1 1 0 11-2 0v-2H6.172a1 1 0 01-.707-1.707l1.414-1.414zm3.656-2.828a1 1 0 10-1.414-1.414L4.05 6.95A7.963 7.963 0 004 10h2a6 6 0 012.828-5.656zM10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul className="absolute hidden mt-2 py-2 bg-white rounded-md shadow-lg">
                <li>
                  <button
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    onClick={() => changeLanguage("en")}
                  >
                    <span>English</span>
                    <span className="ml-auto">🇺🇸</span>
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    onClick={() => changeLanguage("fr")}
                  >
                    <span>Français</span>
                    <span className="ml-auto">🇫🇷</span>
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    onClick={() => changeLanguage("es")}
                  >
                    <span>Español</span>
                    <span className="ml-auto">🇪🇸</span>
                  </button>
                </li>
                {/* Add more language options as needed */}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// export default HeaderThe updated code includes a language dropdown menu with language options for English, French, and Spanish. When a language is selected, it triggers the `changeLanguage` function, which updates the language using the `i18n.changeLanguage` function from the `react-i18next` library.

// Each language option in the dropdown is represented by a button with the language name and the corresponding country flag emoji. You can add more language options to the dropdown by duplicating the `<li>` block and modifying the language and country values.

// Make sure to import the necessary dependencies and set up the translation configuration in your application for the translation functionality to work correctly.```