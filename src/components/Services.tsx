import useCategoriesHeader from "../hooks/useCategoriesHeader";
import { SectionTitle } from "./SectionTitle";
import ServiceItem from "./ServiceItem";

export const Services = () => {
  const { headers, loading, error } = useCategoriesHeader();

  if (loading) {
    return (
      <section id="services" className="section-padding">
        <div className="container-custom">
          <SectionTitle>Nos Créations</SectionTitle>
          <div className="grid-responsive">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/3] skeleton rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="section-padding">
        <div className="container-custom text-center">
          <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary">
            Erreur lors du chargement des catégories
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Plusieurs catégories de créations artisanales à découvrir"
        >
          Créations
        </SectionTitle>

        <div className="grid-responsive animate-fade-in">
          {headers.map((header, index) => (
            <div
              key={header.category}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceItem
                title={header.name}
                icon={header.header_image}
                description={`Découvrez notre collection de ${header.name.toLowerCase()}`}
                background={header.header_image}
                navigation={header.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};