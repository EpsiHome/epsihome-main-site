import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import images from "../constant/images"

const Hero = () => {
  const { t } = useTranslation()
  const [audience, setAudience] = useState("customers")

  const isInvestors = audience === "investors"

  const heading = isInvestors
    ? t(
        "heroInvestor.tagline",
        "Invest in Africa’s real estate infrastructure.",
      )
    : t(
        "hero.tagline",
        "Find, finance, and manage property across Africa in one platform.",
      )

  const subcopy = isInvestors
    ? t(
        "heroInvestor.subcopy",
        "EpsiHome is building the rails for African real estate—aggregating listings, data, and capital so investors can back a modern ecosystem across the continent.",
      )
    : t(
        "hero.subcopy",
        "EpsiHome connects renters, buyers, landlords, and lenders on a single platform—combining listings, financing, and property management with local expertise and trustworthy data.",
      )

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
            {heading}
          </h1>
          <p className="text-base sm:text-lg text-epsi-muted mb-6">{subcopy}</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              type="button"
              onClick={() => setAudience("customers")}
              className={`flex-1 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold border transition-colors ${
                !isInvestors
                  ? "bg-epsi-primary text-white border-epsi-primary"
                  : "bg-white text-epsi-primary border-epsi-primary/40 hover:bg-epsi-primary/5"
              }`}
            >
              {t("hero.ctaUser", "For customers")}
            </button>
            <button
              type="button"
              onClick={() => setAudience("investors")}
              className={`flex-1 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold border transition-colors ${
                isInvestors
                  ? "bg-epsi-primary text-white border-epsi-primary"
                  : "bg-white text-epsi-primary border-epsi-primary/40 hover:bg-epsi-primary/5"
              }`}
            >
              {t("hero.ctaInvestor", "For investors")}
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-epsi-muted">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-epsi-accent" />
              <span>
                {isInvestors
                  ? t(
                      "heroInvestor.point1",
                      "Large, fragmented real estate market",
                    )
                  : t("hero.point1", "End-to-end property journey")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-epsi-accent" />
              <span>
                {isInvestors
                  ? t(
                      "heroInvestor.point2",
                      "Platform spanning listings, data, and finance",
                    )
                  : t("hero.point2", "Built for Africa and its diaspora")}
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative rounded-2xl bg-white shadow-lg border border-slate-200 p-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-epsi-primary/5 via-epsi-secondary/5 to-epsi-accent/5 pointer-events-none" />
            <div className="relative space-y-3">
              <div className="h-2.5 w-24 rounded-full bg-epsi-primary/15" />
              <div className="grid grid-cols-5 gap-3 mt-2">
                <div className="col-span-3 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={images.marketplace}
                    alt="EpsiHome marketplace view"
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={images.virtual_tours}
                      alt="Virtual property tours"
                      className="h-18 w-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={images.propertyManager}
                      alt="Property management dashboard"
                      className="h-18 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

