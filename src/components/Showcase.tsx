import * as React from "react";
import { useState } from "react";

import useDatabase from "../hooks/useDatabase";

import { ImageComponent } from "./ImageComponent";

import useCategorie from "../hooks/useCategorie";
import SectionTitle from "./SectionTitle";
import PhotoAlbum from "react-photo-album";
import photos from "../data/photos";

export interface ShowcaseProps {
  limit: boolean;
}

export const ShowcaseIntro: React.SFC<ShowcaseProps> = (ShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const images: object[] = useCategorie("images", ShowcaseProps.limit, "test");
  const [index, setIndex] = useState(-1);

  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12">
        <SectionTitle id="showcase">Showcase</SectionTitle>
        <main className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          <PhotoAlbum
            photos={photos}
            layout={"columns"}
            columns={4}
            onClick={(event, photo, index) => {
              setIndex(index);
            }}
          />
        </main>
      </section>
    </>
  );
};
