import services from "../data/services";
import { SectionTitle } from "./SectionTitle";
import ServiceItem from "./ServiceItem";

export const Services = () => {
  return (
    <div className="">
      <SectionTitle>Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <ServiceItem
            title={service.title}
            icon={service.icon}
            description={service.description}
            background={service.background}
            navigation={service.navigation}
          />
        ))}
      </div>
    </div>
  );
};
