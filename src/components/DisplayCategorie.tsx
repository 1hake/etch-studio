import * as React from "react";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import PhotoAlbum from "react-photo-album";
import useCategorie from "../hooks/useCategorie";

import useDatabase from "../hooks/useDatabase";
import useMediaQuery from "../hooks/useMediaQuery";
import { getDownloadUrl } from "../utils/firebaseUtils";
import { SectionTitle } from "./SectionTitle";

export interface ShowcaseProps {
  limit: boolean;
  categorie: string;
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

export const DisplayCategory: React.SFC<ShowcaseProps> = ({
  limit,
  category,
}) => {
  const [images, setImages] = useState<PhotoAlbumElement[]>([]);
  const [index, setIndex] = useState(-1);
  const elements: FirebaseElement[] = useCategorie("images", false, category);
  console.log("🚀 ~ file: DisplayCategorie.tsx:37 ~ elements", elements);
  const slides = images.map(({ src, width, height, images }) => src);

  const isMobile = useMediaQuery("(max-width: 768px)");

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

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PhotoAlbum
        photos={images}
        layout={isMobile ? "rows" : "columns"}
        columns={4}
        onClick={(event, photo, index) => {
          setIndex(index);
        }}
      />
    </>
  );
};
