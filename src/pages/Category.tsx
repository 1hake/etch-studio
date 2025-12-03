import { useParams } from "react-router-dom";

import { DisplayCategory } from "../components/DisplayCategorie";
import { SectionTitle } from "../components/SectionTitle";
import useCategoriesHeader from "../hooks/useCategoriesHeader";

export const Category = () => {
  const params = useParams();
  const { headers, loading, error } = useCategoriesHeader();

  const header = headers.find((header) => header.category.includes(params.category));
  const name = header ? header.name : null;

  if (!params) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-display-lg font-bold text-text-primary dark:text-dark-text-primary mb-4">
            Page non trouvée
          </h1>
          <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary">
            La page que vous cherchez n'existe pas.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="skeleton h-12 w-64 mx-auto mb-4" />
            <div className="skeleton h-6 w-96 mx-auto" />
          </div>
          <div className="grid-responsive">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[3/4] skeleton rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-display-lg font-bold text-text-primary dark:text-dark-text-primary mb-4">
            Erreur
          </h1>
          <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary">
            Une erreur est survenue lors du chargement de la catégorie.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle
          id="showcase"
          subtitle={`Découvrez notre collection de ${name?.toLowerCase() || 'créations'}`}
        >
          {name?.toUpperCase() || 'CATÉGORIE'}
        </SectionTitle>

        <div className="animate-fade-in">
          <DisplayCategory
            limit={false}
            category={params.category}
          />
        </div>
      </div>
    </section>
  );
};
