// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBUpOULqJVXa2C6TqRFh6igHFXxpmLBlDI",
    authDomain: "alltask-eaa6d.firebaseapp.com",
    projectId: "alltask-eaa6d",
    storageBucket: "alltask-eaa6d.firebasestorage.app",
    messagingSenderId: "379811131392",
    appId: "1:379811131392:web:3b655d268500578c67a8e5",
    measurementId: "G-0FY0L8WTGG"
  },
};


// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);