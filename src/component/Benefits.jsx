
import React from "react"
import BenefitsCard from "./common/BenefitsCard"
import { useTranslation } from "react-i18next"

const Benefits = () => {
  const { t } = useTranslation()

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
  ]

  return (
    <section
      id="benefits"
      className="py-16 bg-epsi-bg-light border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-epsi-primary text-center mb-3">
          {t("benefits.title", "Why EpsiHome")}
        </h2>
        <p className="text-sm text-epsi-muted text-center max-w-2xl mx-auto mb-8">
          {t(
            "benefits.subtitle",
            "Outcomes for renters, buyers, landlords, and the wider ecosystem when everything runs on one platform.",
          )}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitsCard
              key={index}
              title={benefit.title}
              subtitle={benefit.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
