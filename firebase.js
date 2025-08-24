// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXhxZnBJNtA5aUuOapx_vw-CMWp8iQzUY",
  authDomain: "virtual-herrbal-garden.firebaseapp.com",
  projectId: "virtual-herrbal-garden",
  storageBucket: "virtual-herrbal-garden.firebasestorage.app",
  messagingSenderId: "475676965766",
  appId: "1:475676965766:web:e70a1fbb18337221e6ca07",
  measurementId: "G-QD8EWWXGVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 