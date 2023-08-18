import React from 'react';

const Benefit = ({ title, subtitle }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {platformBenefits.map((benefit, index) => (
          <Benefit key={index} title={benefit.title} subtitle={benefit.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default App;