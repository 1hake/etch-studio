import * as React from "react";
import { useState } from "react";

import useDatabase from "../hooks/useDatabase";

import { ImageComponent } from "./ImageComponent";

import useCategorie from "../hooks/useCategorie";
import SectionTitle from "./SectionTitle";

export interface ShowcaseProps {
  limit: boolean;
}

export const Showcase: React.SFC<ShowcaseProps> = (ShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const images: object[] = useCategorie("images", ShowcaseProps.limit, "test");

  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12">
        <SectionTitle id="showcase">Showcase</SectionTitle>
        <main className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          {images.map((img: any, index: number) => {
            return (
              <ImageComponent
                open={() => {
                  setIsGalleryOpen(true);
                  setCurrentIndex(index);
                }}
                key={index}
                url={img.url}
                label={img.label}
                description={img.description}
              />
            );
          })}
        </main>
      </section>
    </>
  );
};
