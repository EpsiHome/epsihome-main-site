import React from "react"
import { useTranslation } from "react-i18next"

const HowItWorks = () => {
  const { t } = useTranslation()

  const personas = [
    {
      key: "renters",
      title: t("howItWorks.renters.title", "For renters & buyers"),
      steps: [
        t(
          "howItWorks.renters.step1",
          "Browse verified listings with transparent details.",
        ),
        t(
          "howItWorks.renters.step2",
          "Estimate affordability and returns with built‑in tools.",
        ),
        t(
          "howItWorks.renters.step3",
          "Apply for financing and close fully online.",
        ),
      ],
    },
    {
      key: "owners",
      title: t("howItWorks.owners.title", "For landlords & managers"),
      steps: [
        t(
          "howItWorks.owners.step1",
          "List properties and reach more qualified tenants.",
        ),
        t(
          "howItWorks.owners.step2",
          "Track leases, payments, and expenses in one place.",
        ),
        t(
          "howItWorks.owners.step3",
          "Connect to services like inspections and insurance.",
        ),
      ],
    },
    {
      key: "lenders",
      title: t("howItWorks.lenders.title", "For lenders & insurers"),
      steps: [
        t(
          "howItWorks.lenders.step1",
          "Define products and underwriting criteria.",
        ),
        t(
          "howItWorks.lenders.step2",
          "Receive qualified applications with richer context.",
        ),
        t(
          "howItWorks.lenders.step3",
          "Integrate via APIs to automate decisions and servicing.",
        ),
      ],
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-16 bg-white border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-epsi-primary mb-3">
          {t("howItWorks.title", "How EpsiHome works")}
        </h2>
        <p className="text-sm sm:text-base text-epsi-muted max-w-2xl mb-8">
          {t(
            "howItWorks.subtitle",
            "EpsiHome connects every part of the property journey—from discovery and decisions to financing and long‑term management—for each player in the ecosystem.",
          )}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {personas.map((persona) => (
            <article
              key={persona.key}
              className="rounded-2xl border border-slate-200 bg-epsi-bg-light/60 p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-epsi-primary mb-3">
                {persona.title}
              </h3>
              <ol className="space-y-2 text-xs text-epsi-muted list-decimal list-inside">
                {persona.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

