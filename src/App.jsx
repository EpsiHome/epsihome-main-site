import React, { useEffect, useRef } from "react"
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

function App() {
  // Analytics is non-critical. If a browser extension blocks analytics files,
  // we still want the site to render.
  const trackEventRef = useRef(() => {})

  useEffect(() => {
    // Load analytics lazily so a blocked analytics request doesn't break the app.
    import("./lib/analytics")
      .then((mod) => {
        if (mod && typeof mod.trackEvent === "function") {
          trackEventRef.current = mod.trackEvent
        }
      })
      .catch(() => {
        // Ignore analytics load errors (adblockers/extension blocks, etc.)
      })

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
              trackEventRef.current("section_view", { section: id })
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
