import React, { useState, useEffect } from "react";
import About from "./components/About";
import { Showcase } from "./components/DisplayCategorie";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { ImagePanel } from "./components/ImagePanel";
import Services from "./components/Services";
import { ShowcaseIntro } from "./components/Showcase";
import Works from "./components/Works";
import { reveal as Menu } from "react-burger-menu";
import "./hooks/init";

function App() {
  const [theme, setTheme] = useState(null);

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
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>

      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
        <div className="max-w-5xl w-11/12 mx-auto">
          <HeroSection />
          {/* <Showcase limit={true} /> */}
          <ShowcaseIntro></ShowcaseIntro>
          <Services />
          {/* <Works /> */}
          {/* <ImagePanel></ImagePanel> */}
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
  ``;
}

export default App;
