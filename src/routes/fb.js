import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // todo: put config here
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
