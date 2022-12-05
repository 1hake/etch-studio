import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/WhatsApp%20Image%202022-11-20%20at%2018.00.18.png?alt=media&token=d2294dc1-9f10-4e26-a2a6-d77defa303bf"
          alt="logo"
          className="h-36"
        />
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-white dark:text-white font-semibold">
          ETCH STUDIO
        </h1>

        {/* <a
          href="#works"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
        >
          See Works
        </a> */}
      </div>
    </div>
  );
}

export default HeroSection;
