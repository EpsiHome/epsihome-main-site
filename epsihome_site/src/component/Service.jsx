import React from "react";
import ServiceCard from "./common/ServiceCard";
import data from "../constant/data";
import { useTranslation } from "react-i18next";

function Service() {
  const {t} = useTranslation()
  return (
    <section id="services" className="bg-white py-12 mt-4">
      <h1 className="text-3xl text-center my-4 text-gray-800 uppercase font-bold">{t("services.title")}</h1>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap -mx-4">
          {data.services.map((service, index) => (
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
  );
}

export default Service;
