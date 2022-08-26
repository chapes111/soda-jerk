// import { faker } from '@faker-js/faker'
// import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDdoLexzW9F8xu4pgCrTGqrbLFWbB3DRIM",
//   authDomain: "sodajerk-5039f.firebaseapp.com",
//   projectId: "sodajerk-5039f",
//   storageBucket: "sodajerk-5039f.appspot.com",
//   messagingSenderId: "134105694470",
//   appId: "1:134105694470:web:39777725462c5591a9de87",
//   measurementId: "G-5LNDGW1NHG"
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
