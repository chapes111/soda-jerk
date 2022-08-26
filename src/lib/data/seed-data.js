// import { faker } from '@faker-js/faker'
// import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
  // todo: put config here
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
