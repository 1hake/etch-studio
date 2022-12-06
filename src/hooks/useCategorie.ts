import { query, where, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase-config";

// useDatabase hook to fetch data from firestore using firebase version 9 modular

const useCategories = (collectionName: string, limit: boolean, category) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      const q = query(
        collection(projectFirestore, "images"),
        where("categories", "array-contains", category)
      );
      const querySnapshot = await getDocs(q);

      let documents: any = [];
      querySnapshot.forEach((doc: any) => {
        documents.push({ ...doc.data() });
      });

      if (limit) {
        documents = documents.filter((doc: any) => doc.forShowcase === true);
      }
      if (isSubscribed) {
        setImages(documents);
      }
    };
    fetchData();
    return () => {
      isSubscribed = false;
    };
  }, [collectionName]);

  return images;
};

export default useCategories;
