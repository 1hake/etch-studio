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
    return <div>404</div>;
  }
  return (
    <section className="py-8 col-span-10 col-start-2 col-end-12">
      <SectionTitle id="showcase">
        {name?.toUpperCase()}
      </SectionTitle>
      <main className="py-8  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 w-full">
        <DisplayCategory
          limit={false}
          category={params.category}
        ></DisplayCategory>
      </main>
    </section>
  );
};
