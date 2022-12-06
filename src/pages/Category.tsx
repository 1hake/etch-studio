import React from "react";
import useCategorie from "../hooks/useCategorie";
import { useParams } from "react-router-dom";
import { DisplayCategory } from "../components/DisplayCategorie";
import { SectionTitle } from "../components/SectionTitle";

export const Category = () => {
  const params = useParams();
  console.log("🚀 ~ file: Category.tsx:7 ~ Category ~ params", params);
  if (!params) {
    return <div>404</div>;
  }
  return (
    <section className="py-8 col-span-10 col-start-2 col-end-12">
      <SectionTitle id="showcase">
        {params.category?.toUpperCase()}
      </SectionTitle>
      <main className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 w-full sm:w-11/12 lg:w-10/12 mx-auto">
        <DisplayCategory
          limit={false}
          category={params.category}
        ></DisplayCategory>
      </main>
    </section>
  );
};
