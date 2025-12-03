import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background dark:bg-dark-background transition-colors duration-300">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 dark:bg-dark-background/80 backdrop-blur-md border-b border-border/20 dark:border-dark-border/20"
          : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group focus-ring rounded-lg"
            >
              <div className="w-24 h-24 bg-dark-logo dark:bg-light-logo bg-no-repeat bg-center bg-contain transition-transform duration-200 group-hover:scale-105" />

            </Link>

            {/* Navigation Links - Hidden on mobile for clean look */}
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

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="p-2 rounded-lg bg-background-secondary dark:bg-dark-background-secondary border border-border dark:border-dark-border hover:bg-background-tertiary dark:hover:bg-dark-background-tertiary transition-colors duration-200 focus-ring"
              aria-label="Toggle theme"
            >
              <span className="text-lg">
                {theme === "dark" ? "🌙" : "🌞"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - only on homepage */}
        {isHomePage && (
          <div className="pt-16">
            <HeroSection />
          </div>
        )}

        {/* Page Content */}
        <div className={isHomePage ? "" : "pt-16"}>
          <div className="container-custom">
            {children}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};
