// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcgwu9MBJQerjmxCVlrutVIAHzewr4fH0",
  authDomain: "my-portfolio-b8fb3.firebaseapp.com",
  projectId: "my-portfolio-b8fb3",
  storageBucket: "my-portfolio-b8fb3.appspot.com",
  messagingSenderId: "147577375582",
  appId: "1:147577375582:web:cfe08ad8af0f699bdaddcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth