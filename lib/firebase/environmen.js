import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvvbq7egmHbW1z6wy8N-0aNeKOUg1a0Q8",
  authDomain: "blog-ca662.firebaseapp.com",
  projectId: "blog-ca662",
  storageBucket: "blog-ca662.appspot.com",
  messagingSenderId: "284614412812",
  appId: "1:284614412812:web:1c1ccb42f7e0870875fc29",
  measurementId: "G-R62489Y36G"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const emailJsConfig = {
  YOUR_SERVICE_ID: "service_wunaeqg",
  YOUR_TEMPLATE_ID: "template_zyltwq7",
  YOUR_PUBLIC_KEY: "Ywnhuln6wTbEmCFmE"
};
