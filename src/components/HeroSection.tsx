import React from "react";
import { Link } from "react-router-dom";
import useGeneralInfo from "../hooks/useGeneralInfo";
import { useDarkMode } from "../hooks/useDarkMode";
import lightHeroImage from "../images/etch_lamps.webp";
import darkHeroImage from "../images/dark-hero.webp";

export const HeroSection = () => {
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");
  const isDark = useDarkMode();

  if (loading) {
    return (
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/20 via-transparent to-primary-50/20 dark:from-accent-900/10 dark:via-transparent dark:to-primary-900/10" />
        <div className="relative text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="mb-8">
            <div className="skeleton w-32 h-32 md:w-52 md:h-52 mx-auto rounded-xl" />
          </div>
          <div className="skeleton h-12 w-3/4 mx-auto mb-6" />
          <div className="space-y-4 mb-8">
            <div className="skeleton h-6 w-full" />
            <div className="skeleton h-6 w-5/6 mx-auto" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="skeleton h-12 w-48" />
            <div className="skeleton h-12 w-32" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/20 via-transparent to-primary-50/20 dark:from-accent-900/10 dark:via-transparent dark:to-primary-900/10" />
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-block group focus-ring rounded-xl p-4"
            >
              <div className="w-32 h-32 md:w-52 md:h-52 mx-auto bg-dark-logo dark:bg-light-logo bg-no-repeat bg-center bg-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </div>
          <h1 className="text-display-xl md:text-display-2xl font-bold text-text-primary dark:text-dark-text-primary mb-8">
            ETCH STUDIO.
          </h1>
          <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary">
            Erreur lors du chargement des informations
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background images with smooth transition */}
      <div className="absolute inset-0">
        {/* Light mode background */}
        <div
          className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ease-in-out ${isDark ? 'opacity-0' : 'opacity-100'
            }`}
          style={{
            backgroundImage: `url(${lightHeroImage})`
          }}
        />
        {/* Dark mode background */}
        <div
          className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ease-in-out ${isDark ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${darkHeroImage})`
          }}
        />
      </div>

      {/* Background overlay */}

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/10 via-transparent to-primary-50/10 dark:from-accent-900/20 dark:via-transparent dark:to-primary-900/20" />

      {/* Main content */}
      <div className="relative text-center max-w-4xl mx-auto px-6 animate-fade-in flex flex-col justify-end h-screen pb-24">
        {/* Logo */}
        <div className="mt-24">
          <a
            href="#services"
            className="inline-block group focus-ring rounded-xl p-4 cursor-pointer"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto bg-dark-logo dark:bg-light-logo bg-no-repeat bg-center bg-contain transition-transform duration-300 group-hover:scale-105" />
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-200/20 dark:bg-accent-800/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-200/20 dark:bg-primary-800/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};
