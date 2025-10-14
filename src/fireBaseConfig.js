// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDehp77Gvd2plKFcZdZhVcno-gXhlLS3E",
  authDomain: "ovio-ef5f2.firebaseapp.com",
  projectId: "ovio-ef5f2",
  storageBucket: "ovio-ef5f2.firebasestorage.app",
  messagingSenderId: "852190306895",
  appId: "1:852190306895:web:58d6fdb6f676b0bb6c803a",
  measurementId: "G-F0YNLJFCLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);