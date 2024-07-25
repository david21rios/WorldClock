// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEvMGs2HIU9j5wv2KATXcbftTNe9cilSU",
    authDomain: "pr-r1f4s.firebaseapp.com",
    projectId: "pr-r1f4s",
    storageBucket: "pr-r1f4s.appspot.com",
    messagingSenderId: "968281755357",
    appId: "1:968281755357:web:113751ff930ef36b301534"
};

const app  = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
