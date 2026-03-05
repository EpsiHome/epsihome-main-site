import React from "react"
import { useTranslation } from "react-i18next"

const TrustImpact = () => {
  const { t } = useTranslation()

  const items = [
    {
      key: "partners",
      label: t("trust.partners.label", "Partners & ecosystem"),
      body: t(
        "trust.partners.body",
        "We are building with banks, insurers, agencies, and operators who understand African housing from the ground up.",
      ),
    },
    {
      key: "security",
      label: t("trust.security.label", "Security & transparency"),
      body: t(
        "trust.security.body",
        "From payments to documents, EpsiHome is designed to reduce fraud and increase clarity for everyone involved.",
      ),
    },
    {
      key: "impact",
      label: t("trust.impact.label", "Impact & inclusion"),
      body: t(
        "trust.impact.body",
        "Our goal is to unlock safe housing and investment access for millions of Africans and the diaspora.",
      ),
    },
  ]

  return (
    <section
      id="trust-impact"
      className="py-12 bg-epsi-bg-light border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-epsi-primary mb-3">
          {t("trust.title", "Built for trust and impact")}
        </h2>
        <p className="text-sm text-epsi-muted max-w-2xl mb-6">
          {t(
            "trust.subtitle",
            "EpsiHome sits at the intersection of fintech and real estate, with a focus on safety, inclusion, and long‑term value.",
          )}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.key}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4"
            >
              <h3 className="text-sm font-semibold text-epsi-primary mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-epsi-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustImpact

