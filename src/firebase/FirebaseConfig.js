// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDv9KdVPaZ7qJKlZTsufVPnyap1iyJMxUQ",
  authDomain: "samkart-678ef.firebaseapp.com",
  projectId: "samkart-678ef",
  storageBucket: "samkart-678ef.appspot.com",
  messagingSenderId: "139461184868",
  appId: "1:139461184868:web:30cd5552b85c3fe27d3e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }