import React from "react"
import ServiceCard from "./common/ServiceCard"
import { useTranslation } from "react-i18next"
import images from "../constant/images"

function Service() {
  const { t } = useTranslation()

  const services = [
    {
      title: t("services.items.0.title"),
      image: images.marketplace,
      description: t("services.items.0.description"),
    },
    {
      title: t("services.items.1.title"),
      image: images.propertyManager,
      description: t("services.items.1.description"),
    },
    {
      title: t("services.items.2.title"),
      image: images.estatedata,
      description: t("services.items.2.description"),
    },
    {
      title: t("services.items.3.title"),
      image: images.inspection,
      description: t("services.items.3.description"),
    },
    {
      title: t("services.items.4.title"),
      image: images.insurance,
      description: t("services.items.4.description"),
    },
    {
      title: t("services.items.5.title"),
      image: images.virtual_tours,
      description: t("services.items.5.description"),
    },
    {
      title: t("services.items.6.title"),
      image: images.mortgage,
      description: t("services.items.6.description"),
    },
    {
      title: t("services.items.7.title"),
      image: images.analysis,
      description: t("services.items.7.description"),
    },
  ]

  return (
    <section
      id="services"
      className="py-16 bg-white border-t border-slate-200 text-epsi-text"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-epsi-primary text-center mb-3">
          {t("services.title", "Our services")}
        </h2>
        <p className="text-sm text-epsi-muted text-center max-w-2xl mx-auto mb-8">
          {t(
            "services.subtitle",
            "Everything you need to discover, finance, and manage property in one place.",
          )}
        </p>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
