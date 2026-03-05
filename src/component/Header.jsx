import React, { useState } from "react"
import { useTranslation } from "react-i18next"

function Header() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <header className="bg-epsi-primary text-white fixed top-0 left-0 w-full z-20 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold text-xl">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-epsi-secondary text-xs font-semibold text-epsi-bg-light">
            EH
          </span>
          <span>EpsiHome</span>
        </a>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-epsi-secondary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className={isMenuOpen ? "hidden" : ""}
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                clipRule="evenodd"
              />
              <path
                className={isMenuOpen ? "" : "hidden"}
                fillRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "" : "hidden"
          } md:flex md:ml-4 md:space-x-6 ml-2 space-y-4 md:space-y-0 pt-4 md:pt-0 list-none text-sm`}
        >
          <li>
            <a
              href="#services"
              className="block text-white/90 hover:text-epsi-secondary transition-colors"
            >
              {t("header.services")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-white/90 hover:text-epsi-secondary transition-colors"
            >
              {t("header.about")}
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="block text-white/90 hover:text-epsi-secondary transition-colors"
            >
              {t("header.faq")}
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="block text-white/90 hover:text-epsi-secondary transition-colors"
            >
              {t("header.benefits")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white/90 hover:text-epsi-secondary transition-colors"
            >
              {t("header.contact")}
            </a>
          </li>
        </ul>
        <div className="md:ml-6 ml-2 text-gray-800">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-slate-200 hover:border-epsi-secondary px-4 py-2 pr-8 rounded-md shadow-lg text-sm text-epsi-text focus:outline-none focus:ring-1 focus:ring-epsi-secondary focus:border-epsi-secondary"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English 🇺🇸</option>
              <option value="fr">Français 🇫🇷</option>
              <option value="es">Español 🇪🇸</option>
              <option value="de">Deutch 🇩🇪</option>
              {/* Add more language options as needed */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.172 6.172a6 6 0 018.657 7.656A1 1 0 1113.828 12H11v2a1 1 0 11-2 0v-2H6.172a1 1 0 01-.707-1.707l1.414-1.414zm3.656-2.828a1 1 0 10-1.414-1.414L4.05 6.95A7.963 7.963 0 004 10h2a6 6 0 012.828-5.656zM10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
