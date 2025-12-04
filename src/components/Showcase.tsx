import React, { useCallback, useEffect, useState } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";

import useDatabase from "../hooks/useDatabase";
import useMediaQuery from "../hooks/useMediaQuery";
import { Image } from "../types/types";
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

interface ExtendedPhoto extends Photo {
  name?: string;
  description?: string;
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
  const [images, setImages] = useState<ExtendedPhoto[]>([]);
  const [originalImages, setOriginalImages] = useState<Image[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [showAll, setShowAll] = useState<boolean>(false);
  const elements: FirebaseElement[] = useDatabase("images", false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchImages = async () => {
      if (elements.length > 0) {
        try {
          const urls = await Promise.all(
            elements.map((element) => getDownloadUrl(element.url))
          );

          // Create images for PhotoAlbum display
          const newImages: ExtendedPhoto[] = urls.map((url, index) => ({
            src: url, // PhotoAlbum expects 'src'
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

          // Create original images for modal (with 'url' property)
          const originalImagesData: Image[] = urls.map((url, index) => ({
            url: url, // Modal expects 'url'
            width: elements[index].width,
            height: elements[index].height,
            name: elements[index].name,
            description: elements[index].description,
            related_images: elements[index].related_images || [],
            gif: elements[index].gif || "",
            materials: elements[index].materials || [],
            size: elements[index].size || "",
            price: elements[index].price || 0,
            categories: [],
            published: true,
          }));

          // Randomize the order of both arrays
          const shuffledIndices = Array.from({ length: newImages.length }, (_, i) => i)
            .sort(() => Math.random() - 0.5);

          const shuffledImages = shuffledIndices.map(i => newImages[i]);
          const shuffledOriginalImages = shuffledIndices.map(i => originalImagesData[i]);

          setImages(shuffledImages);
          setOriginalImages(shuffledOriginalImages);
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

  const handleToggleView = useCallback(() => {
    setShowAll(!showAll);
  }, [showAll]);

  const displayImages = limit
    ? (showAll ? images : images.slice(0, 6))
    : images;

  if (elements.length === 0) {
    return (
      <section id="showcase" className="section-padding">
        <div className="container-custom">
          <SectionTitle>Portfolio</SectionTitle>
          <div className="grid-responsive">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[3/4] skeleton rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="showcase" className="section-padding bg-background-secondary dark:bg-dark-background-secondary">
      <div className="container-custom">
        <SectionTitle
          subtitle="Toutes mes créations artisanales réunies ici"
        >
          Portfolio
        </SectionTitle>

        <div className="animate-fade-in">
          <PhotoAlbum
            photos={displayImages}
            layout="masonry"
            columns={isMobile ? 2 : 3}
            spacing={16}
            renderPhoto={({ photo, layout, wrapperStyle }) => {
              const extendedPhoto = photo as ExtendedPhoto;
              const originalIndex = images.findIndex(img => img.src === extendedPhoto.src);
              return (
                <div
                  style={wrapperStyle}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(originalIndex)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-surface dark:bg-dark-surface elevated-card hover-lift">
                    <img
                      src={extendedPhoto.src}
                      alt={extendedPhoto.name || "Image"}
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
                          {extendedPhoto.name}
                        </h3>
                        {extendedPhoto.description && (
                          <p className="text-body-sm text-white/90 line-clamp-2">
                            {extendedPhoto.description}
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
              )
            }}
          />
        </div>

        {limit && images.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={handleToggleView}
              className="btn-secondary hover-lift inline-flex items-center"
            >
              {showAll ? "Voir moins" : "Voir tous les projets"}
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {selectedImageIndex !== null && (
        <MyDialog
          isOpen={selectedImageIndex !== null}
          currentPhoto={originalImages[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </section>
  );
};
