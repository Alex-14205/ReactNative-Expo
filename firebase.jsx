
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmS8IPgxO-V2DJti0RpDOUyluDU-xKz4I",
  authDomain: "firestore-crud-ac197.firebaseapp.com",
  projectId: "firestore-crud-ac197",
  storageBucket: "firestore-crud-ac197.firebasestorage.app",
  messagingSenderId: "683349282412",
  appId: "1:683349282412:web:99d71005a9bb052b38d249",
  measurementId: "G-6Q701DZT1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
