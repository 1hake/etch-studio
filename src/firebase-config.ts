import firebase from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyB61YwiObV5b52BplKQB0vgkf_U0FdubMk",
  authDomain: "debt-666aa.firebaseapp.com",
  databaseURL: "https://debt-666aa.firebaseio.com",
  projectId: "debt-666aa",
  storageBucket: "debt-666aa.appspot.com",
  messagingSenderId: "1057961509983",
  appId: "1:1057961509983:web:67b8d457e84d5b4d",
};

const app = initializeApp(config);
console.log("🚀 ~ file: firebase-config.ts:20 ~ app", app);

// var firebaseapp = null;

// if (!firebase.apps.length) {
//   firebaseapp = firebase.initializeApp(config);
// } else {
//   firebaseapp = firebase.app(); // if already initialized, use that one
// }

export const projectStorage = getStorage(app);
export const projectFirestore = getFirestore(app);
console.log(
  "🚀 ~ file: firebase-config.ts:36 ~ projectFirestore",
  projectFirestore
);
export const auth = getAuth(app);
