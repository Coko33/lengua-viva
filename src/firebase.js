/* import firebase from "firebase"; */
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
/* import { getStorage, ref } from "firebase/storage"; */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGd23vWdJ7rY1Dm-MOXNEa2T6-niVjnFg",
  authDomain: "lenguaviva-d1346.firebaseapp.com",
  databaseURL: "https://lenguaviva-d1346-default-rtdb.firebaseio.com",
  projectId: "lenguaviva-d1346",
  storageBucket: "lenguaviva-d1346.appspot.com",
  messagingSenderId: "216627910605",
  appId: "1:216627910605:web:22758f9180b25e73231684",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
/* export const storage = getStorage(app);
export const storageRef = ref(storage); */
