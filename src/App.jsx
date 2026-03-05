import React from "react"
import {
  AboutUs,
  Benefits,
  Contact,
  FAQ,
  Header,
  Hero,
  Service,
  VisionMission,
} from "./component"

function App() {
  return (
    <div className="min-h-screen bg-epsi-bg-light">
      <Header />
      <main>
        <Hero />
        <Service />
        <Benefits />
        <AboutUs />
        <VisionMission />
        <FAQ />
        <Contact />
      </main>
    </div>
  )
}

export default App
