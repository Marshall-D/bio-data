import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZv4inCM1l86ZcjKgjWoMWQ2yhshw6y_o",
    authDomain: "bio-data-6ee02.firebaseapp.com",
    projectId: "bio-data-6ee02",
    storageBucket: "bio-data-6ee02.appspot.com",
    messagingSenderId: "783371983869",
    appId: "1:783371983869:web:8b701069bbbe7091019794"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);