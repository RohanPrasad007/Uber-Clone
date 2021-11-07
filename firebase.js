// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCsep2Ox2dAW-ZKxPB9rTuDMydWYGHS1g",
  authDomain: "uber-clone-d2267.firebaseapp.com",
  projectId: "uber-clone-d2267",
  storageBucket: "uber-clone-d2267.appspot.com",
  messagingSenderId: "365542891817",
  appId: "1:365542891817:web:1f91f77a46fbfd46b7d738",
  measurementId: "G-36G3GE86EJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
