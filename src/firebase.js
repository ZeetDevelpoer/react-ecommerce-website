import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     // Your Firebase configuration details
     apiKey: "AIzaSyA2wKd-Sj3BQjm8sxZYZAhhqNmtG8nK320",
     authDomain: "react-ecommerce-website-d9f69.firebaseapp.com",
     projectId: "react-ecommerce-website-d9f69",
     storageBucket: "react-ecommerce-website-d9f69.appspot.com",
     messagingSenderId: "224559655430",
     appId: "1:224559655430:web:75155200322a3727047187",
     measurementId: "G-81H2DL33MQ",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };

export default app;
