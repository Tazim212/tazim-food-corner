// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASWGf826kdHYbrvViWLHMJ_XLH2SDtxok",
  authDomain: "tazim-food-corner.firebaseapp.com",
  projectId: "tazim-food-corner",
  storageBucket: "tazim-food-corner.firebasestorage.app",
  messagingSenderId: "1052717759204",
  appId: "1:1052717759204:web:b4bfd3ad7f089c74ee4af1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);