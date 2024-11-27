import { data } from "autoprefixer";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Corrected 'getFireStore' to 'getFirestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTW-Igx2PDLg6Z1Gq7Lv0BKYpbZADo8Gw",
    authDomain: "last-project-5cdee.firebaseapp.com",
    projectId: "last-project-5cdee",
    storageBucket: "last-project-5cdee.firebasestorage.app",
    messagingSenderId: "965137237389",
    appId: "1:965137237389:web:eddf7d16e9641d63cf69c4",
    measurementId: "G-8747ZCB4XY"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);  // Corrected 'getFireStore' to 'getFirestore'

export default database