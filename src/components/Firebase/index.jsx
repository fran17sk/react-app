import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAi969FefI3BBWR5pVSjCmhSZmh9s3N08k",
    authDomain: "palitomaciasstore.firebaseapp.com",
    projectId: "palitomaciasstore",
    storageBucket: "palitomaciasstore.appspot.com",
    messagingSenderId: "468053170208",
    appId: "1:468053170208:web:5e27fa11a23192063c4445"
};
const app = initializeApp(firebaseConfig);
console.log(app)
export const db = getFirestore(app)