// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAedJc_zw9N9tHbMI3AT1D3aOrZoJ1dWZg",
  authDomain: "gadget-grove-72f09.firebaseapp.com",
  projectId: "gadget-grove-72f09",
  storageBucket: "gadget-grove-72f09.firebasestorage.app",
  messagingSenderId: "953109153978",
  appId: "1:953109153978:web:762eda4163fe78cdf41a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)