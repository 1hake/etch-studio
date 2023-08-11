import "yet-another-react-lightbox/styles.css";

import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import { getDownloadUrl } from "../utils/firebaseUtils";

export default function RelatedPhotosLightBox({ currentPhoto }) {
    const [open, setOpen] = React.useState(false);
    const [images, setImages] = React.useState([]);

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

    return (
        <div className="flex w-full justify-center">
            <button className="rounded-full bg-gray-800 text-white px-4 py-2"
                type="button" onClick={() => setOpen(true)}>
                Voir {currentPhoto?.related_images?.length} autres photos
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.map((image) => {
                    return {
                        src: image,
                    };
                })}
            />
        </div>
    );
}