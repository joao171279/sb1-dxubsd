import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuBfOCgfEwiP4MRTXGOE7rGT6TTAxLKTY",
  authDomain: "webflow-ba876.firebaseapp.com",
  projectId: "webflow-ba876",
  storageBucket: "webflow-ba876.firebasestorage.app",
  messagingSenderId: "1012507830628",
  appId: "1:1012507830628:web:a7ea7d65270d7649e7b271",
  measurementId: "G-E8EF56707C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);