// layouit component

import { dark } from "@mui/material/styles/createPalette";
import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    setTheme("light");
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 dark:bg-white bg-black text-lg p-1 rounded-md transition duration-500 ease-in-out"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter transition duration-1000 ease-in-out">
        <div className="max-w-5xl w-11/12 mx-auto">
          <HeroSection />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};
