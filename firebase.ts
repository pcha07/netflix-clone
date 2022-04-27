// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhmb2N7lOy79Kam6S8R2ibKu9xPDsPAUw",
  authDomain: "netlfic-clone.firebaseapp.com",
  projectId: "netlfic-clone",
  storageBucket: "netlfic-clone.appspot.com",
  messagingSenderId: "195957328835",
  appId: "1:195957328835:web:ad71a8243618135b7f4b76"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }