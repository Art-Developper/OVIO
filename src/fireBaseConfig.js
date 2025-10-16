import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCDehp77Gvd2plKFcZdZhVcno-gXhlLS3E",
  authDomain: "ovio-ef5f2.firebaseapp.com",
  projectId: "ovio-ef5f2",
  storageBucket: "ovio-ef5f2.firebasestorage.app",
  messagingSenderId: "852190306895",
  appId: "1:852190306895:web:58d6fdb6f676b0bb6c803a",
  measurementId: "G-F0YNLJFCLQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); 

export { app, analytics, auth, db };