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
  const [index, setIndex] = useState<number | null>(null);
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
            categories: [], // Add default value
            published: true, // Add default value
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

  if (elements.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary">
          Aucune création trouvée dans cette catégorie.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="animate-fade-in">
        <PhotoAlbum
          photos={images}
          layout="masonry"
          columns={isMobile ? 2 : 3}
          spacing={16}
          renderPhoto={({ photo, layout, wrapperStyle }) => (
            <div
              style={wrapperStyle}
              className="group cursor-pointer"
              onClick={() => handleImageClick(layout.index)}
            >
              <div className="relative overflow-hidden rounded-xl bg-surface dark:bg-dark-surface elevated-card hover-lift">
                <img
                  src={photo.url}
                  alt={photo.name || "Image"}
                  style={{
                    width: layout.width,
                    height: layout.height,
                    objectFit: "cover",
                  }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-body-lg font-semibold text-white mb-1">
                      {photo.name}
                    </h3>
                    {photo.description && (
                      <p className="text-body-sm text-white/90 line-clamp-2">
                        {photo.description}
                      </p>
                    )}
                    {photo.price && photo.price > 0 && (
                      <p className="text-body-md font-bold text-white mt-2">
                        {photo.price} €
                      </p>
                    )}
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        />
      </div>

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
