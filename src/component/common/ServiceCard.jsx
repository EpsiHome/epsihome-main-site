
import React from 'react'

const ServiceCard = ({title,description,image}) => {
  return (
    <div className="w-full hover:cursor-pointer hover:mt-2 md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <img
          src={image}
          alt="Marketplace"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl text-gray-800 font-bold mb-2">{title}</h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard
