import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGRZY6Pt7z5JN5CDhcZ-6H2MRs1spG9TU",
  authDomain: "hackathon-9f5a1.firebaseapp.com",
  projectId: "hackathon-9f5a1",
  storageBucket: "hackathon-9f5a1.appspot.com",
  messagingSenderId: "278848560192",
  appId: "1:278848560192:web:71c9b720417a60c663d3a5",
  measurementId: "G-TG5P91S683"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);

export {app, auth, db}