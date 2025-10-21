import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // getAuth, onAuthStateChanged, signOut auth-ի համար
import { getFirestore } from "firebase/firestore"; 

// Միայն մեկ անգամ ենք հայտարարում firebaseConfig օբյեկտը
const firebaseConfig = {
  apiKey: "AIzaSyCDehp77Gvd2plKFcZdZhVcno-gXhlLS3E",
  authDomain: "ovio-ef5f2.firebaseapp.com",
  projectId: "ovio-ef5f2",
  storageBucket: "ovio-ef5f2.firebasestorage.app",
  messagingSenderId: "852190306895",
  appId: "1:852190306895:web:58d6fdb6f676b0bb6c803a",
  measurementId: "G-F0YNLJFCLQ"
};

// Ինիցիալիզացնում ենք Firebase հավելվածը
const app = initializeApp(firebaseConfig);

// Ստանում ենք տարբեր ծառայությունների ինստանսները
const analytics = getAnalytics(app);
const auth = getAuth(app); // Ստանում ենք auth ինստանսը
const db = getFirestore(app);

// Export ենք անում այն ամենը, ինչ մեզ պետք է մեր հավելվածի այլ մասերում
// Այստեղ export ենք անում նաև onAuthStateChanged և signOut ֆունկցիաները
export { app, analytics, auth, db, onAuthStateChanged, signOut };