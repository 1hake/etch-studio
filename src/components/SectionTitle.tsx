import React from "react";

function SectionTitle({ children, id }) {
  return (
    <div className="flex flex-row items-center my-4">
      <span className="w-full h-0.5 bg-gray-400 mr-4"></span>
      <h1 className="text-4xl font-light text-white">{children}</h1>
      <span className="w-full h-0.5 bg-gray-400 ml-4"></span>
    </div>
  );
}

export default SectionTitle;
