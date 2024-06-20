// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgJz_1aJXKe04fmCIXjQUL5g0HZNsuo0I",
  authDomain: "disneyplus-clone-bd913.firebaseapp.com",
  projectId: "disneyplus-clone-bd913",
  storageBucket: "disneyplus-clone-bd913.appspot.com",
  messagingSenderId: "971688630480",
  appId: "1:971688630480:web:b33c62fc136193cb06e6d5",
  measurementId: "G-R4YH9YWT1H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;
