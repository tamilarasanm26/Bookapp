import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDdhRZ1UbSNSroUautlsT79n4On-VCShbI",
  authDomain: "bookproject-053.firebaseapp.com",
  projectId: "bookproject-053",
  storageBucket: "bookproject-053.appspot.com",
  messagingSenderId: "918843351421",
  appId: "1:918843351421:web:be41b6b2208f4d9b9bac14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,app};