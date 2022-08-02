import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB7DguxRo_FvFaO13KIuNFs95ijpswAqiw",
  authDomain: "professional-ecommerce-store.firebaseapp.com",
  projectId: "professional-ecommerce-store",
  storageBucket: "professional-ecommerce-store.appspot.com",
  messagingSenderId: "776481555610",
  appId: "1:776481555610:web:4b455465e728f8aabb0b23"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
