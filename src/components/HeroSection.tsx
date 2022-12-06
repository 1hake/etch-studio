import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-10">
      <div className="text-center">
        <Link to="/">
          <div
            alt="logo"
            className="h-36 bg-dark-logo dark:bg-light-logo bg-no-repeat bg-center bg-contain "
          ></div>
          <h1 className=" text-2xl md:text-4xl mb-1 md:mb-3 text-black dark:text-white font-semibold">
            ETCH STUDIO.
          </h1>
        </Link>

        {/* <a
          href="#works"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
        >
          See Works
        </a> */}
      </div>
    </div>
  );
};
