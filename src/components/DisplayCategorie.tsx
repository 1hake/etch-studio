import { useCallback, useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

import useCategorie from "../hooks/useCategorie";
import useMediaQuery from "../hooks/useMediaQuery";
import { Image } from "../types/types";
import { getDownloadUrl } from "../utils/firebaseUtils";
import { MyDialog } from "./Panel";

export interface ShowcaseProps {
  limit: boolean;
  category: string;
}

interface FirebaseElement {
  url: string;
  width: number;
  height: number;
  images: string[];
  description: string;
  name: string;
  related_images: string[];
  gif: string;
  materials: string[];
  size: string;
  price: number;
}

export const DisplayCategory = ({ limit, category }: ShowcaseProps) => {
  const [images, setImages] = useState<Image[]>([]);
  const [index, setIndex] = useState<number>(null);
  const elements: FirebaseElement[] = useCategorie("images", false, category);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (elements.length > 0) {
          const urls = await Promise.all(
            elements.map((element) => getDownloadUrl(element.url))
          );
          const newImages = urls.map((url, index) => ({
            url: url,
            width: elements[index].width,
            height: elements[index].height,
            name: elements[index].name,
            description: elements[index].description,
            related_images: elements[index].related_images,
            gif: elements[index].gif,
            materials: elements[index].materials,
            size: elements[index].size,
            price: elements[index].price,
          }));
          setImages(newImages);
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImages();
  }, [elements]);

  const handleImageClick = useCallback((index: number) => {
    setIndex(index);
  }, []);

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <PhotoAlbum
        photos={images}
        layout="columns"
        columns={isMobile ? 2 : 3}
        renderPhoto={({ photo, layout, wrapperStyle }) => (
          <div
            style={{
              ...wrapperStyle,
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
            className="bg-gray-100 shadow-md"
          >
            <img
              onClick={() => handleImageClick(layout.index)}
              src={photo.url}
              alt={photo.name || "Image"}
              style={{
                width: layout.width,
                height: layout.height,
                objectFit: "cover",
              }}
              className="rounded-lg cursor-pointer"
            />
          </div>
        )}
      />
      {index !== null && index >= 0 && index < images.length && (
        <MyDialog
          isOpen={index !== null}
          currentPhoto={images[index]}
          onClose={() => setIndex(null)}
        />
      )}
    </>
  );
};
