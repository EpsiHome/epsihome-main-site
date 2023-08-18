
import React from 'react'
import BenefitsCard from './common/BenefitsCard'
import data from '../constant/data'

const Benefits = () => {
  return (
    <section id='benefits' className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.platformBenefits.map((benefit, index) => (
          <BenefitsCard key={index} title={benefit.title} subtitle={benefit.subtitle} />
        ))}
      </div>
    </section>
  )
}

export default Benefits
