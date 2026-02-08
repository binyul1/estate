// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1e680.firebaseapp.com",
  projectId: "mern-estate-1e680",
  storageBucket: "mern-estate-1e680.firebasestorage.app",
  messagingSenderId: "191277379670",
  appId: "1:191277379670:web:625dc395559c1b569f8bf7",
  measurementId: "G-H2H7L94H1C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);