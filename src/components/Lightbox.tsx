import "yet-another-react-lightbox/styles.css";

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";

import { getDownloadUrl } from "../utils/firebaseUtils";

export default function RelatedPhotosLightBox({ currentPhoto }) {
    const [open, setOpen] = React.useState(false);
    const [images, setImages] = React.useState([]);
    const [selectedImage, setSelectedImage] = React.useState(null);

    React.useEffect(() => {
        if (currentPhoto?.related_images?.length > 0) {
            const promises = currentPhoto.related_images.map((url) => {
                return getDownloadUrl(url);
            });
            Promise.all(promises).then((urls) => {
                setImages(urls);
            });
        }
    }, [currentPhoto]);

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
        setOpen(true);
    }

    return (
        <div className="flex flex-col w-full p-4 bg-white">
            <div className="flex justify-start flex-wrap gap-2">
                {images && images.map((image, index) => (
                    <img key={index} src={image} alt={`thumbnail ${index}`} className="rounded-md w-16 h-16 object-cover m-auto" onClick={() => handleThumbnailClick(image)} /> // display all thumbnails
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => {
                    setOpen(false);
                    setSelectedImage(null);
                }}
                slides={selectedImage ? [{ src: selectedImage }] : []}
            />
        </div>
    );
}