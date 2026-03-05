import React from "react"
import { useTranslation } from "react-i18next"

const VisionMission = () => {
  const { t } = useTranslation()

  return (
    <section
      id="vision-mission"
      className="py-16 bg-white text-epsi-text border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-epsi-primary mb-6">
          {t("vision.title", "Our Vision & Mission")}
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-epsi-muted">
          <div>
            <h3 className="font-semibold text-epsi-text mb-1">
              {t("vision.visionLabel", "Vision")}
            </h3>
            <p>
              {t(
                "vision.vision",
                "EpsiHome’s vision is to make safe, transparent homeownership and real estate investing possible for millions of Africans and the diaspora by digitizing every step of the property journey.",
              )}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-epsi-text mb-1">
              {t("vision.missionLabel", "Mission")}
            </h3>
            <p>
              {t(
                "vision.mission",
                "EpsiHome’s mission is to unify property discovery, financing, and management into one trusted platform—delivered through web, mobile, and APIs—starting in Cameroon and expanding across Africa.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

