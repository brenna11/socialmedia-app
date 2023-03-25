import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpei7ZOoQv3W26DW9m0k3-30tW2HUlg6Q",
  authDomain: "socialmedia-f3c83.firebaseapp.com",
  projectId: "socialmedia-f3c83",
  storageBucket: "socialmedia-f3c83.appspot.com",
  messagingSenderId: "597199954968",
  appId: "1:597199954968:web:25427d91460f51495ecf6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);