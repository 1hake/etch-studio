import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase-config";

const useCategorie = (
  collection: string,
  limit: boolean,
  categorie: string
) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .where("categories", "array-contains", categorie)
      .onSnapshot((snap) => {
        let documents: any = [];
        snap.forEach((doc: any) => {
          documents.push({ ...doc.data() });
        });
        if (limit) {
          documents = documents.filter((doc: any) => doc.forShowcase === true);
        }
        setImages(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return images;
};

export default useCategorie;
