import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB61YwiObV5b52BplKQB0vgkf_U0FdubMk",
  authDomain: "debt-666aa.firebaseapp.com",
  databaseURL: "https://debt-666aa.firebaseio.com",
  projectId: "debt-666aa",
  storageBucket: "debt-666aa.appspot.com",
  messagingSenderId: "1057961509983",
  appId: "1:1057961509983:web:67b8d457e84d5b4d",
};

var firebaseapp = null;

if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(config);
} else {
  firebaseapp = firebase.app(); // if already initialized, use that one
}

const projectStorage = firebaseapp.storage();
const projectFirestore = firebaseapp.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();
const persistance = firebase.auth.Auth.Persistence.NONE;

export { projectStorage, projectFirestore, timeStamp, auth, persistance };
