import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDdoLexzW9F8xu4pgCrTGqrbLFWbB3DRIM",
  authDomain: "sodajerk-5039f.firebaseapp.com",
  projectId: "sodajerk-5039f",
  storageBucket: "sodajerk-5039f.appspot.com",
  messagingSenderId: "134105694470",
  appId: "1:134105694470:web:39777725462c5591a9de87",
  measurementId: "G-5LNDGW1NHG"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
