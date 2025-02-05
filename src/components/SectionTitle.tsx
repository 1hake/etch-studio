import React from "react";

interface Props {
  children: React.ReactNode;
  id: string;
}

export const SectionTitle = ({ children, id }: Props) => {
  return (
    <div id={id} className="flex flex-row items-center my-4">
      <span className="w-full h-0.5 bg-gray-400 mr-4"></span>
      <h1 className="dark:text-white text-4xl font-light text-black text-center">
        
        {children}
      </h1>
      <span className="w-full h-0.5 bg-gray-400 ml-4"></span>
    </div>
  );
};


