import React from "react";

import useGeneralInfo from "../hooks/useGeneralInfo";

export const Intro: React.FC = () => {
  const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN"); 

  if (loading) {
    return <></>
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!generalInfo) {
    return <p>No information available</p>;
  }

  const { intro, image_en_tete } = generalInfo;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8">
      <div className=" text-center lg:text-left space-y-2">
        {intro.map((paragraph, index) => (
          <p
            key={index}
            className="dark:text-white text-black leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center">
        <div className="lg:w-full w-full lg:h-1/2  rounded-lg shadow-lg overflow-hidden">
          <img
            src={image_en_tete}
            alt="Header"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
