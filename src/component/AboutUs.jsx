import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl text-center mb-8 text-gray-800 uppercase font-bold tracking-wide">
          {t("aboutUs.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pb-4">
          <div className="space-y-4">
            <p className="text-gray-700 text-base leading-relaxed">
              {t("aboutUs.description1")}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t("aboutUs.description2")}
            </p>
          </div>

          <div>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>{t("aboutUs.listItem1")}</li>
              <li>{t("aboutUs.listItem2")}</li>
              <li>{t("aboutUs.listItem3")}</li>
              <li>{t("aboutUs.listItem4")}</li>
              <li>{t("aboutUs.listItem5")}</li>
              <li>{t("aboutUs.listItem6")}</li>
              <li>{t("aboutUs.listItem7")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
