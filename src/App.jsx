import React, { useEffect } from "react"
import {
  AboutUs,
  Benefits,
  Contact,
  FAQ,
  Header,
  Hero,
  HowItWorks,
  Investors,
  ProductEcosystem,
  Service,
  TrustImpact,
  VisionMission,
} from "./component"
import { trackEvent } from "./lib/analytics"

function App() {
  useEffect(() => {
    const sectionIds = [
      "hero",
      "how-it-works",
      "services",
      "benefits",
      "ecosystem",
      "about",
      "trust-impact",
      "vision-mission",
      "investors",
      "faq",
      "contact",
    ]

    const seen = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            const id = entry.target.id
            if (!seen.has(id)) {
              seen.add(id)
              trackEvent("section_view", { section: id })
            }
          }
        })
      },
      { threshold: 0.4 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-epsi-bg-light">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Service />
        <Benefits />
        <ProductEcosystem />
        <AboutUs />
        <TrustImpact />
        <VisionMission />
        <Investors />
        <FAQ />
        <Contact />
      </main>
    </div>
  )
}

export default App
