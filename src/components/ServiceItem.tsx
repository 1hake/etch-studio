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
  return (
    <Link to={`categories/${navigation}`}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio: "2 / 1", // Maintient le ratio 2:1
        }}
        className={`transition rounded-md hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform duration-500 ease-in-out`}
      >
        <div className="bg-black bg-opacity-50 rounded-md hover:bg-opacity-0 transition ease-in-out duration-500 h-full">
          <div className="p-5 flex flex-col justify-center text-center h-full">
            <h1 className="font-bold text-xl text-white break- mb-1">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
