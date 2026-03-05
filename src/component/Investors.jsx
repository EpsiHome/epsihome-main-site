import React from "react"
import { useTranslation } from "react-i18next"

const Investors = () => {
  const { t } = useTranslation()

  const blocks = [
    {
      key: "problem",
      title: t("investors.problemTitle", "Problem"),
      body: t(
        "investors.problemBody",
        "African real estate is large but fragmented, with opaque pricing, offline processes, and limited access to safe financing.",
      ),
    },
    {
      key: "solution",
      title: t("investors.solutionTitle", "Solution"),
      body: t(
        "investors.solutionBody",
        "EpsiHome builds a unified layer across discovery, data, financing, and property management, creating a single, trusted infrastructure.",
      ),
    },
    {
      key: "whyNow",
      title: t("investors.whyNowTitle", "Why now"),
      body: t(
        "investors.whyNowBody",
        "Smartphone penetration, digital payments, and a young, urbanising population make this the right moment to digitise how Africans access and invest in property.",
      ),
    },
  ]

  return (
    <section
      id="investors"
      className="py-16 bg-white border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-epsi-primary mb-3">
          {t("investors.title", "For investors")}
        </h2>
        <p className="text-sm sm:text-base text-epsi-muted max-w-2xl mb-8">
          {t(
            "investors.subtitle",
            "EpsiHome offers investors exposure to African real estate through a platform that connects people, properties, and capital.",
          )}
        </p>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {blocks.map((block) => (
            <article
              key={block.key}
              className="rounded-2xl border border-slate-200 bg-epsi-bg-light/70 p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-epsi-primary mb-2">
                {block.title}
              </h3>
              <p className="text-xs text-epsi-muted">{block.body}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-epsi-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-epsi-secondary transition-colors"
          >
            {t("investors.ctaCall", "Talk to the team")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Investors

