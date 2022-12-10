import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const API_KEY = import.meta.env.VITE_API_KEY
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const PROJECT_ID = import.meta.env.PROJECT_ID
const STORAGE_BUCKET = import.meta.STORAGE_BUCKET
const MESSAGING_SENDER_ID = import.meta.MESSAGING_SENDER_ID
const APP_ID = import.meta.APP_ID
const MEASUREMENT_ID =  import.meta.env.MEASUREMENT_ID


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
