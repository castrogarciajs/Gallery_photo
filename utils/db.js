import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_ID,
  appId: process.env.APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveImage = ({ title, image }) =>
  addDoc(collection(db, "images"), {
    title,
    image,
    date: Timestamp.fromDate(new Date()),
  });
