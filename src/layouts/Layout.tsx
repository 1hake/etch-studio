import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDarkMode = savedTheme === 'dark';
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  // Listen for theme changes from other components (like hero switch)
  useEffect(() => {
    const handleStorageChange = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
      }
    };

    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Listen for localStorage changes
    window.addEventListener('storage', handleStorageChange);

    // Create a mutation observer to watch for class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Track if user has ever scrolled (only for homepage)
      if (scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // Show header immediately on non-home pages
  useEffect(() => {
    if (!isHomePage && !hasScrolled) {
      setHasScrolled(true);
    }
  }, [isHomePage, hasScrolled]);

  const handleThemeSwitch = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');

    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-dark-background transition-colors duration-300">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${hasScrolled
          ? `transform translate-y-0 ${isScrolled
            ? "bg-white/80 dark:bg-dark-background/80 backdrop-blur-md"
            : "bg-transparent"
          }`
          : "transform -translate-y-full"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Only show when scrolled */}
            {hasScrolled && isScrolled && (
              <Link
                to="/"
                className="flex items-center space-x-2 group focus:outline-none rounded-lg"
              >
                <div className="w-24 h-24 bg-dark-logo dark:bg-light-logo bg-no-repeat bg-center bg-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:brightness-110" />
              </Link>
            )}

            {/* Navigation Links - Hidden on mobile for clean look */}
            {hasScrolled && isScrolled && (
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className={`text-body-md font-medium transition-colors duration-200 focus-ring rounded-lg px-3 py-2 ${isHomePage
                    ? "text-accent-600 dark:text-accent-400"
                    : "text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary"
                    }`}
                >
                  Accueil
                </Link>
                <a
                  href="#showcase"
                  className="text-body-md font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-200 focus-ring rounded-lg px-3 py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="text-body-md font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-200 focus-ring rounded-lg px-3 py-2"
                >
                  Contact
                </a>
              </div>
            )}

            {/* Theme Toggle - Only show when scrolled down */}
            {hasScrolled && isScrolled && (
              <button
                type="button"
                onClick={handleThemeSwitch}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${isDark
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label="Toggle theme"
              >
                {/* Toggle Circle */}
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-in-out flex items-center justify-center ${isDark ? "translate-x-6" : "translate-x-0"
                    }`}
                >
                  {/* Icon */}
                  <div className="w-2.5 h-2.5 flex items-center justify-center">
                    {isDark ? (
                      <svg className="w-2.5 h-2.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-2.5 h-2.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - only on homepage */}
        {isHomePage && (
          <div className="">
            <HeroSection />
          </div>
        )}

        {/* Page Content */}
        <div className={isHomePage ? "" : "pt-16"}>
          <div className="">
            {children}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};
