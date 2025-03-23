import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWg_A-py1n50c4YpceKiXIUqtTLtW8a9w",
  authDomain: "unsplash-by-aao.firebaseapp.com",
  projectId: "unsplash-by-aao",
  storageBucket: "unsplash-by-aao.firebasestorage.app",
  messagingSenderId: "836400092552",
  appId: "1:836400092552:web:ae18894b658ec31afad63d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
