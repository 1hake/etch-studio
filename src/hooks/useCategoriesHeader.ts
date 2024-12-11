import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { projectFirestore } from "../firebase-config";
import { getDownloadUrl } from "../utils/firebaseUtils";

interface CategoryHeader {
  category: string;
  header_image: string; 
  name: string
}

const useCategoriesHeader = () => {
  const [headers, setHeaders] = useState<CategoryHeader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeaders = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(projectFirestore, "category_headers"));
        const fetchedHeaders: CategoryHeader[] = [];

        // Fetch each document and resolve the download URL for the header image
        for (const doc of querySnapshot.docs) {
          const data = doc.data() as { category: string; header_image: string };
          const downloadUrl = await getDownloadUrl(data.header_image); // Get the download URL
          fetchedHeaders.push({
            category: data.category,
            header_image: downloadUrl,
            name: data.name
          });
        }

        setHeaders(fetchedHeaders);
      } catch (err) {
        console.error(err);
        setError("Error fetching category headers");
      } finally {
        setLoading(false);
      }
    };

    fetchHeaders();
  }, []);

  return { headers, loading, error };
};

export default useCategoriesHeader;