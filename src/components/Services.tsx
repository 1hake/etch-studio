import useCategoriesHeader from "../hooks/useCategoriesHeader";
import { SectionTitle } from "./SectionTitle";
import ServiceItem from "./ServiceItem";

export const Services = () => {
  const { headers, loading, error } = useCategoriesHeader();
  console.log("🚀 ~ Services ~ headers:", headers)

  if (loading) {
    return null
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      <SectionTitle>Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {headers.map((header) => (
          <ServiceItem
            title={header.name}
            icon={header.header_image} // Assuming the icon can be represented by the image URL
            description={`Explore the works in ${header.category}`} // Placeholder description
            background={header.header_image} // Use the resolved download URL for the background
            navigation={`${header.category}`} // Navigate to category details
          />
        ))}
      </div>
    </div>
  );
};