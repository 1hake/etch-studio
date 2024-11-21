import React, { useCallback, useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

import useDatabase from "../hooks/useDatabase";
import useMediaQuery from "../hooks/useMediaQuery";
import { getDownloadUrl } from "../utils/firebaseUtils";
import { MyDialog } from "./Panel";
import { SectionTitle } from "./SectionTitle";

export interface ShowcaseProps {
  limit: boolean;
}

interface FirebaseElement {
  url: string;
  width: number;
  height: number;
  name: string;
  description: string;
  related_images?: string[];
  gif?: string;
  materials?: string[];
  size?: string;
  price?: number;
}

const randomlySliceNElems = (arr: any[], n: number) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
};

export const ShowcaseIntro: React.FC<ShowcaseProps> = ({ limit }) => {
  const [images, setImages] = useState<FirebaseElement[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const elements: FirebaseElement[] = useDatabase("images", false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchImages = async () => {
      if (elements.length > 0) {
        try {
          const urls = await Promise.all(
            elements.map((element) => getDownloadUrl(element.url))
          );
          const newImages = urls.map((url, index) => ({
            url,
            width: elements[index].width,
            height: elements[index].height,
            name: elements[index].name,
            description: elements[index].description,
            related_images: elements[index].related_images || [],
            gif: elements[index].gif || "",
            materials: elements[index].materials || [],
            size: elements[index].size || "",
            price: elements[index].price || 0,
          }));
          setImages(limit ? randomlySliceNElems(newImages, 5) : newImages);
        } catch (error) {
          console.error("Error fetching image URLs:", error);
        }
      }
    };

    fetchImages();
  }, [elements, limit]);

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-4 col-span-10 col-start-2 col-end-12 w-full">
      <SectionTitle id="showcase">Showcase</SectionTitle>
      <main className="w-full">
        <PhotoAlbum
          photos={randomlySliceNElems(images, 5)}
          layout="columns"
          columns={isMobile ? 2 : 3}
          renderPhoto={({ photo, layout, wrapperStyle }) => (
            <div
              style={{
                ...wrapperStyle,
                borderRadius: "0.5rem",

              }}
              className="bg-gray-100 shadow-md cursor-pointer"
              onClick={() => handleImageClick(images.indexOf(photo))}
            >
              <img
                src={photo.url}
                alt={photo.name || "Image"}
                style={{
                  width: layout.width,
                  height: layout.height,
                  objectFit: "cover",
                }}
                className="rounded-lg"
              />
            </div>
          )}
        />
      </main>
      {selectedImageIndex !== null && (
        <MyDialog
          isOpen={selectedImageIndex !== null}
          currentPhoto={images[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </section>
  );
};
