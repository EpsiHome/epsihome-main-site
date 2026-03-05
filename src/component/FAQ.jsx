
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const { t } = useTranslation()

  const faq = [
    {
      question: t("faq.items.0.question"),
      answer: t("faq.items.0.answer"),
    },
    {
      question: t("faq.items.1.question"),
      answer: t("faq.items.1.answer"),
    },
    {
      question: t("faq.items.2.question"),
      answer: t("faq.items.2.answer"),
    },
    {
      question: t("faq.items.3.question"),
      answer: t("faq.items.3.answer"),
    },
    {
      question: t("faq.items.4.question"),
      answer: t("faq.items.4.answer"),
    },
    {
      question: t("faq.items.5.question"),
      answer: t("faq.items.5.answer"),
    },
    {
      question: t("faq.items.6.question"),
      answer: t("faq.items.6.answer"),
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-16 bg-white border-t border-slate-200 text-epsi-text"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-epsi-primary text-center mb-3">
          {t("faq.title", "Frequently Asked Questions")}
        </h2>
        <p className="text-sm text-epsi-muted text-center max-w-2xl mx-auto mb-8">
          {t(
            "faq.subtitle",
            "Answers to common questions from early users, partners, and the wider community.",
          )}
        </p>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden bg-epsi-bg-light/60"
            >
              <button
                type="button"
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm sm:text-base ${
                  activeIndex === index
                    ? "bg-epsi-bg-light"
                    : "bg-white hover:bg-epsi-bg-light/60"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-epsi-text">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-epsi-muted transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      activeIndex === index
                        ? "M19 9l-7 7-7-7"
                        : "M9 5l7 7-7 7"
                    }
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-sm text-epsi-muted">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ