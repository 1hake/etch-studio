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
  description,
  background,
  navigation,
}: Props) => {
  return (
    <Link to={`categories/${navigation}`} className="group block">
      <article className="relative overflow-hidden rounded-xl bg-surface dark:bg-dark-surface elevated-card hover-lift group">
        {/* Background image */}
        <div
          className="aspect-[4/3] relative overflow-hidden"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="image-overlay" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-display-sm font-bold text-white mb-2 group-hover:text-accent-300 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-body-sm text-white/90 text-balance leading-relaxed">
              {description}
            </p>
          </div>

          {/* Hover arrow */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ServiceItem;
