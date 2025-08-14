import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAxAdWavg9EiC8LfLSzl8Xzi4Z7hfpJjQQ",
  authDomain: "foodapp-78cf6.firebaseapp.com",
  projectId: "foodapp-78cf6",
  storageBucket: "foodapp-78cf6.appspot.com",
  messagingSenderId: "230694186632",
  appId: "1:230694186632:web:e7d81b39bdb52d2522393d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
