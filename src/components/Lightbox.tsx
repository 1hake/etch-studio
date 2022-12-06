import { useState } from "react/cjs/react.production.min";
import FsLightbox from "fslightbox-react";

function Lightbox() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <button onClick={() => openLightboxOnSlide(1)}>
        Open the lightbox on the first slide.
      </button>
      <button onClick={() => openLightboxOnSlide(2)}>
        Open the lightbox on the second slide.
      </button>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={["/Images/1.jpg", "/Images/2.jpg"]}
        slide={lightboxController.slide}
      />
    </>
  );
}
