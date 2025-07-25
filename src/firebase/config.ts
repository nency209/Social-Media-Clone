
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDKRbIX5aJChFmKFf8bauu-e83wiLrLi8s",
  authDomain: "social-media-clone-a9214.firebaseapp.com",
  projectId: "social-media-clone-a9214",
  storageBucket: "social-media-clone-a9214.firebasestorage.app",
  messagingSenderId: "465348376950",
  appId: "1:465348376950:web:66e6a2f19ca626217ee257"
};



const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)