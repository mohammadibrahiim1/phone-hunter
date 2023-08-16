// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdX26NO17cFBxk0BSnSUCaHUxpbMN4QpY",
  authDomain: "phone-hunter-fb45f.firebaseapp.com",
  projectId: "phone-hunter-fb45f",
  storageBucket: "phone-hunter-fb45f.appspot.com",
  messagingSenderId: "258831070283",
  appId: "1:258831070283:web:bf3fb45658324e251f49ce",
  measurementId: "G-0323X1Z8WF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
