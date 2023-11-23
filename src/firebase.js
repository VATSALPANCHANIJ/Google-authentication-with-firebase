import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALf0bhm_fZtmogINbuXFDD5RIcgsuLLos",
  authDomain: "authentication-19dc2.firebaseapp.com",
  projectId: "authentication-19dc2",
  storageBucket: "authentication-19dc2.appspot.com",
  messagingSenderId: "1098529131492",
  appId: "1:1098529131492:web:4b738fbffc84fb35ed15f1",
  measurementId: "G-8SHFSLTPKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;
