// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPf7C0UavJnytf37btH0dscSUlcg0Un0",
  authDomain: "expensive-me-budget-tracker.firebaseapp.com",
  projectId: "expensive-me-budget-tracker",
  storageBucket: "expensive-me-budget-tracker.appspot.com",
  messagingSenderId: "819374553949",
  appId: "1:819374553949:web:d866178065ebfcae5306b4"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
