import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGeneralInfo from "../hooks/useGeneralInfo";
import { useDarkMode } from "../hooks/useDarkMode";
import lightHeroImage from "../images/etch_lamps.webp";
import darkHeroImage from "../images/dark-hero.webp";

export const HeroSection = () => {
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN");
  const isDark = useDarkMode();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll to show/hide switch
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const handleThemeSwitch = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem('theme', newTheme);

    // Update document class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
              className="inline-block group rounded-xl p-4"
            >
              <div className="w-32 h-32 md:w-52 md:h-52 mx-auto bg-dark-logo dark:bg-light-logo bg-no-repeat bg-center bg-contain transition-transform duration-700 ease-in-out group-hover:scale-105" />
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
      <div className="relative text-center max-w-4xl mx-auto px-6 animate-fade-in flex flex-col justify-start h-screen pt-0 md:-mt-40">
        {/* Logo */}
        <div className="">
          <a
            href="#services"
            className="inline-block group rounded-xl p-4 cursor-pointer"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto bg-dark-logo dark:bg-light-logo bg-no-repeat bg-center bg-contain transition-transform duration-700 ease-in-out group-hover:scale-105" />
          </a>
        </div>
      </div>

      {/* Fixed CTA Theme Switch - Close to center */}
      {!isScrolled && (
        <div className="fixed top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 animate-fade-in">
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Toggle switch */}
              <button
                type="button"
                onClick={handleThemeSwitch}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${isDark
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-400/30"
                  : "shadow-lg"
                  }`}
                style={!isDark ? { backgroundColor: '#204082' } : {}}
                aria-label="Toggle theme"
              >
                {/* Toggle Circle */}
                <div
                  className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out flex items-center justify-center ${isDark
                    ? "translate-x-8"
                    : "translate-x-0"
                    }`}
                >
                  {/* Simple icon */}
                  <div className="w-3 h-3 flex items-center justify-center">
                    {isDark ? (
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            </div>

            {/* Encouraging text */}
            <p className="text-body-md font-medium text-text-secondary dark:text-dark-text-secondary/90 animate-pulse">
              {isDark ? "Éteindre la lumière" : "Allumer la lumière"}
            </p>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-200/20 dark:bg-accent-800/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-200/20 dark:bg-primary-800/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};
