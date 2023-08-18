
import React from 'react'

const BenefitsCard = ({title,subtitle}) => {
  return (
    <div className="max-w-sm hover:cursor-pointer hover:ml-2 rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-gray-900 text-xl mb-2">{title}</div>
        <p className="text-gray-500 text-base">{subtitle}</p>
      </div>
    </div>
  )
}

export default BenefitsCard
