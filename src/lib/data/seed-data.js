// import { faker } from '@faker-js/faker'
// import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { initializeApp } from "firebase/app";

// const API_KEY = import.meta.env.VITE_API_KEY
// const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
// const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
// const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
// const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID
// const APP_ID = import.meta.env.VITE_APP_ID
// const MEASUREMENT_ID =  import.meta.env.VITE_MEASUREMENT_ID
//
// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MEASUREMENT_ID
// };

// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)

// for(let i = 0; i < 90; i++) {
//   const location = {
//     address: faker.address.streetAddress(),
//     city: faker.address.cityName(),
//     location: faker.address.nearbyGPSCoordinate(),
//     name: faker.company.name(),
//     rating: faker.random.numeric() % 5,
//     ratings: {},
//     state: faker.address.stateAbbr(),
//     zip: faker.address.zipCode()
//   }

//   try {
//     const docRef = await addDoc(collection(db, "locations"), {
//       ...location
//     })
//     console.log("Document written with ID: ", docRef.id)
//   } catch (e) {
//     console.error("Error adding document: ", e)
//   }
// }
