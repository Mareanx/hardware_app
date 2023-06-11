// Import the functions you need from the SDKs you need
import { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyGcxbNMaM7e20OcdHBbS49EkHMmLPU0I",
  authDomain: "app-hardware.firebaseapp.com",
  projectId: "app-hardware",
  storageBucket: "app-hardware.appspot.com",
  messagingSenderId: "494316887189",
  appId: "1:494316887189:web:a9b17085f410bde70e8f9c",
  measurementId: "G-6PCNM4EH78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get db reference
export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: AsyncStorageStatic,
});
