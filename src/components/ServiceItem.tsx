import React from "react";

interface Props {
  title: string;
  icon: string;
  description: string;
  background: string;
}

const ServiceItem = ({ title, icon, description, background }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`transition rounded-md  hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform duration-500 ease-in-out`}
    >
      <div className="p-5 ">
        <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">
          {title}
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
