
import React, { useState } from 'react';
import data from '../constant/data';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const {t} = useTranslation()

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
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq' className="min-h-screen py-8 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faq.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <div
              className={`flex justify-between items-center cursor-pointer p-4 ${
                activeIndex === index ? 'bg-gray-400' : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : ''
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
                      ? 'M19 9l-7 7-7-7'
                      : 'M9 5l7 7-7 7'
                  }
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="p-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;