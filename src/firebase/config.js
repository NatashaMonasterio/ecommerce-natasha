import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9Mkso3B7aDsyOTbTU7zckTSPQFtMAbdw",
  authDomain: "ecommerce-react-coderhou-55be7.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-55be7",
  storageBucket: "ecommerce-react-coderhou-55be7.appspot.com",
  messagingSenderId: "92789217656",
  appId: "1:92789217656:web:1b4b21866433411fec508d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
}