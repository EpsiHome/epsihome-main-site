import React from "react"
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
  VisionMission,
} from "./component"

function App() {
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
        <VisionMission />
        <Investors />
        <FAQ />
        <Contact />
      </main>
    </div>
  )
}

export default App
