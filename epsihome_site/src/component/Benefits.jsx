
import React from 'react'
import BenefitsCard from './common/BenefitsCard'
import data from '../constant/data'
import { useTranslation } from 'react-i18next'

const Benefits = () => {
  const {t} = useTranslation()
  console.log(t)

  const benefits = [
    {
      title: t("benefits.items.0.title"),
      subtitle: t("benefits.items.0.subtitle"),
    },
    {
      title: t("benefits.items.1.title"),
      subtitle: t("benefits.items.1.subtitle"),
    },
    {
      title: t("benefits.items.2.title"),
      subtitle: t("benefits.items.2.subtitle"),
    },
    {
      title: t("benefits.items.3.title"),
      subtitle: t("benefits.items.3.subtitle"),
    },
    {
      title: t("benefits.items.4.title"),
      subtitle: t("benefits.items.4.subtitle"),
    },
    {
      title: t("benefits.items.5.title"),
      subtitle: t("benefits.items.5.subtitle"),
    },
    {
      title: t("benefits.items.6.title"),
      subtitle: t("benefits.items.6.subtitle"),
    },
    {
      title: t("benefits.items.7.title"),
      subtitle: t("benefits.items.7.subtitle"),
    },
    {
      title: t("benefits.items.8.title"),
      subtitle: t("benefits.items.8.subtitle"),
    },
  ];

  return (
    <section id='benefits' className="flex py-4 justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <BenefitsCard key={index} title={benefit.title} subtitle={benefit.subtitle} />
        ))}
      </div>
    </section>
  )
}

export default Benefits
