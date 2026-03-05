import React from "react"
import { useTranslation } from "react-i18next"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="pt-24 pb-16 bg-epsi-bg-light text-epsi-text"
    >
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-epsi-secondary/10 px-3 py-1 text-xs font-semibold text-epsi-secondary mb-4">
            {t("hero.badge", "Proptech for African real estate")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-epsi-primary mb-4">
            {t(
              "hero.tagline",
              "Find, finance, and manage property across Africa in one platform.",
            )}
          </h1>
          <p className="text-base sm:text-lg text-epsi-muted mb-6">
            {t(
              "hero.subcopy",
              "EpsiHome connects renters, buyers, landlords, and lenders on a single platform—combining listings, financing, and property management with local expertise and trustworthy data.",
            )}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-epsi-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-epsi-secondary transition-colors"
            >
              {t("hero.ctaUser", "Join the early access list")}
            </a>
            <a
              href="#investors"
              className="inline-flex items-center justify-center rounded-md border border-epsi-secondary px-5 py-2.5 text-sm font-semibold text-epsi-secondary hover:bg-epsi-secondary hover:text-epsi-bg-light transition-colors"
            >
              {t("hero.ctaInvestor", "For investors")}
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-epsi-muted">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-epsi-accent" />
              <span>{t("hero.point1", "End-to-end property journey")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-epsi-accent" />
              <span>{t("hero.point2", "Built for Africa and its diaspora")}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="rounded-2xl bg-white shadow-lg border border-slate-200 p-6">
            <div className="mb-4 h-3 w-20 rounded-full bg-epsi-primary/10" />
            <div className="space-y-3">
              <div className="h-8 w-3/4 rounded-md bg-epsi-primary/5" />
              <div className="h-8 w-1/2 rounded-md bg-epsi-primary/5" />
              <div className="h-32 rounded-xl bg-gradient-to-br from-epsi-primary/10 via-epsi-secondary/10 to-epsi-accent/10" />
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-16 rounded-md bg-epsi-primary/5" />
                <div className="h-16 rounded-md bg-epsi-secondary/5" />
                <div className="h-16 rounded-md bg-epsi-accent/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

