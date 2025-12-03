import React from "react";

import useGeneralInfo from "../hooks/useGeneralInfo";

export const Intro: React.FC = () => {
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="skeleton h-6 w-full" />
              <div className="skeleton h-6 w-5/6" />
              <div className="skeleton h-6 w-4/5" />
            </div>
            <div className="skeleton aspect-[4/3] rounded-xl" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding">
        <div className="container-custom text-center">
          <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary">
            Erreur lors du chargement des informations
          </p>
        </div>
      </section>
    );
  }

  if (!generalInfo) {
    return (
      <section className="section-padding">
        <div className="container-custom text-center">
          <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary">
            Aucune information disponible
          </p>
        </div>
      </section>
    );
  }

  const { intro, image_en_tete } = generalInfo;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in">
            {intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-body-lg text-text-primary dark:text-dark-text-primary leading-relaxed text-balance animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>


            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
