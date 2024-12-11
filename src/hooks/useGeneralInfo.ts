import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { projectFirestore } from "../firebase-config";
import { getDownloadUrl } from "../utils/firebaseUtils";

interface GeneralInfo {
  intro: string[];
  image_en_tete: string;
  phone: string;
  email: string;
  [key: string]: any;
}

const useGeneralInfo = (docId: string) => {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const docRef = doc(projectFirestore, "general_info", docId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists() && isSubscribed) {
          const data = docSnapshot.data() as GeneralInfo;

          // Fetch the download URL for the image_en_tete
          if (data.image_en_tete) {
            data.image_en_tete = await getDownloadUrl(data.image_en_tete);
          }

          if (isSubscribed) {
            setGeneralInfo(data);
          }
        } else if (isSubscribed) {
          setError("No document found");
        }
      } catch (err) {
        if (isSubscribed) setError("Error fetching general info");
        console.error(err);
      } finally {
        if (isSubscribed) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isSubscribed = false;
    };
  }, [docId]);

  return { generalInfo, loading, error };
};

export default useGeneralInfo;