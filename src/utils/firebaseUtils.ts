// function that create dowmload url from firebase storage path

import { projectStorage } from "../firebase-config";

export const getDownloadUrl = async (path: string) => {
  const storageRef = projectStorage.ref(path);
  const url = await storageRef.getDownloadURL();
  return url;
};
