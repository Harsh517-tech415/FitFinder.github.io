// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDepg4IqFiqSDjrotC9Qc49trnIBl8gMKI",
  authDomain: "fitfinder-595d4.firebaseapp.com",
  databaseURL: "https://fitfinder-595d4-default-rtdb.firebaseio.com",
  projectId: "fitfinder-595d4",
  storageBucket: "fitfinder-595d4.appspot.com",
  messagingSenderId: "248459377102",
  appId: "1:248459377102:web:82a51264471985d05dd39f",
  measurementId: "G-NVX7RN61HB"
};

// Initialize Firebase
const app  =initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth();
export const storage=getStorage(app);