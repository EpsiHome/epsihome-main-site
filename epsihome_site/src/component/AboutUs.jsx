import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-us h-screen overflow-scroll bg-white justify-center">
      <h1 className="text-3xl text-center my-4 text-gray-800 uppercase font-bold">
        {t("aboutUs.title")}
      </h1>
      <div className="grid grid-cols-2 px-4 gap-4">
        <div>
          <p className="text-gray-700 mb-4">{t("aboutUs.description1")}</p>
          <p className="text-gray-700 mb-4">{t("aboutUs.description2")}</p>
        </div>
        <div>
          <ul className="list-disc mb-4">
            <li className="text-gray-700">{t("aboutUs.listItem1")}</li>
            <li className="text-gray-700">{t("aboutUs.listItem2")}</li>
            <li className="text-gray-700">{t("aboutUs.listItem3")}</li>
            <li className="text-gray-700">{t("aboutUs.listItem4")}</li>
            <li className="text-gray-700">{t("aboutUs.listItem5")}</li>
            <li className="text-gray-700">{t("aboutUs.listItem6")}</li>
            <li className="text-gray-700">{t("aboutUs.listItem7")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
