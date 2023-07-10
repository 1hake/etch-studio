import * as React from "react";
import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

import useDatabase from "../hooks/useDatabase";
import useMediaQuery from "../hooks/useMediaQuery";
import { getDownloadUrl } from "../utils/firebaseUtils";

import { SectionTitle } from "./SectionTitle";

export interface ShowcaseProps {
  limit: boolean;
}

interface PhotoAlbumElement {
  src: string;
  width: number;
  height: number;
}

interface FirebaseElement {
  url: string;
  width: number;
  height: number;
  images: string[];
}

const randomlySliceNElems = (arr, n) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export const ShowcaseIntro: React.SFC<ShowcaseProps> = (ShowcaseProps) => {
  const [images, setImages] = useState<PhotoAlbumElement[]>([]);
  const [index, setIndex] = useState(-1);
  const elements: FirebaseElement[] = useDatabase("images", false);
  const slides = images.map(({ src, width, height, images }) => src);

  useEffect(() => {
    if (elements.length > 0) {
      const promises = elements.map((element: FirebaseElement) => {
        return getDownloadUrl(element.url);
      });
      Promise.all(promises).then((urls) => {
        const newImages = urls.map((url, index) => {
          return {
            src: url,
            width: elements[index].width,
            height: elements[index].height,
          };
        });
        setImages(newImages);
      });
    }
  }, [elements]);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12">
        <SectionTitle id="showcase">Showcase</SectionTitle>
        <main className="py-8  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 w-full ">
          {images && (
            <PhotoAlbum
              photos={randomlySliceNElems(images, 5)}
              layout={"columns"}
              columns={isMobile ? 2 : 3}
              onClick={(event, photo, index) => {
                // setIndex(index);
              }}
            />
          )}
        </main>
      </section>
    </>
  );
};
