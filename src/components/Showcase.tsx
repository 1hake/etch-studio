import * as React from "react";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
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
        <main className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          {images && (
            <PhotoAlbum
              photos={randomlySliceNElems(images, 5)}
              layout={isMobile ? "rows" : "columns"}
              columns={isMobile ? 1 : 4}
              onClick={(event, photo, index) => {
                // setIndex(index);
              }}
            />
          )}
        </main>
        {index >= 0 && (
          <Lightbox
            mainSrc={slides[index]}
            nextSrc={slides[(index + 1) % slides.length]}
            prevSrc={slides[(index + slides.length - 1) % slides.length]}
            onCloseRequest={() => setIndex(-1)}
            onMovePrevRequest={() =>
              setIndex((index + slides.length - 1) % slides.length)
            }
            onMoveNextRequest={() => setIndex((index + 1) % slides.length)}
            enableZoom={false}
          />
        )}
      </section>
    </>
  );
};
