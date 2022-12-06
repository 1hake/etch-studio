import React from "react";

export const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        ETCH STUDIO
      </a>
      <a
        href="mailto:colin.champdavoine@gmail.com"
        className="text-sm md:text-md hover:text-indigo-500"
      >
        tonmail@gmail.com
      </a>
      <p className="text-xs mt-2 text-gray-500">
        © Colin Champdavoine 2021. All rights reserved.
      </p>
    </div>
  );
};
