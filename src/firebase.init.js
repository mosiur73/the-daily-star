// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUZr_ePZFLDAfR7WOCADY6xtR5-MYcASI",
  authDomain: "the-daily-star-2089c.firebaseapp.com",
  projectId: "the-daily-star-2089c",
  storageBucket: "the-daily-star-2089c.firebasestorage.app",
  messagingSenderId: "259935626253",
  appId: "1:259935626253:web:553c9a824328c5fb15e144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);