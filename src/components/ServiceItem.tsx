import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  icon: string;
  description: string;
  background: string;
  navigation?: string;
}

const ServiceItem = ({
  title,
  icon,
  description,
  background,
  navigation,
}: Props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <Link to={`categories/${navigation}`}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={`transition rounded-md  hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform duration-500 ease-in-out`}
      >
        <div className="p-5 h-44 flex flex-col justify-center text-center">
          <h1 className="font-bold text-2xl  text-white  mb-1">
            {title.toLocaleUpperCase()}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
