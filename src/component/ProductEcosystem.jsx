import React from "react"
import { useTranslation } from "react-i18next"

const ProductEcosystem = () => {
  const { t } = useTranslation()

  const parts = [
    {
      key: "web",
      title: t("ecosystem.web.title", "Web app"),
      body: t(
        "ecosystem.web.body",
        "Modern dashboards for discovery, onboarding, and portfolio management across all your properties.",
      ),
    },
    {
      key: "mobile",
      title: t("ecosystem.mobile.title", "Mobile app"),
      body: t(
        "ecosystem.mobile.body",
        "On-the-go experience for renters, buyers, and owners with messaging, notifications, and task tracking.",
      ),
    },
    {
      key: "backend",
      title: t("ecosystem.backend.title", "Backend & APIs"),
      body: t(
        "ecosystem.backend.body",
        "Secure services and APIs that power listings, payments, data pipelines, and integrations with banks and insurers.",
      ),
    },
  ]

  return (
    <section
      id="ecosystem"
      className="py-16 bg-epsi-bg-light border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-epsi-primary mb-3">
          {t("ecosystem.title", "One platform, three touchpoints")}
        </h2>
        <p className="text-sm sm:text-base text-epsi-muted max-w-2xl mb-8">
          {t(
            "ecosystem.subtitle",
            "EpsiHome ties together the public web experience, the mobile app in users’ hands, and the infrastructure behind the scenes.",
          )}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {parts.map((part) => (
            <article
              key={part.key}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5"
            >
              <h3 className="text-sm font-semibold text-epsi-primary mb-2">
                {part.title}
              </h3>
              <p className="text-xs text-epsi-muted">{part.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductEcosystem

