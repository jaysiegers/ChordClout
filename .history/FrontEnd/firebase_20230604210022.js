// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjOheYTd7pJy23neY-Isb5x1ursYIF8zM",
  authDomain: "chord-clout-aa0dc.firebaseapp.com",
  projectId: "chord-clout-aa0dc",
  storageBucket: "chord-clout-aa0dc.appspot.com",
  messagingSenderId: "1057167448430",
  appId: "1:1057167448430:web:3e5085c7ff980ac931c97f",
  measurementId: "G-ZS56ZDLGD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);