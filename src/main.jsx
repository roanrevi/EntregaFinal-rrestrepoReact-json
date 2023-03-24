import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtfRfRXjuUhsmAbXCodfwF-RVjSE9vA4A",
  authDomain: "vivacommerce-32862.firebaseapp.com",
  projectId: "vivacommerce-32862",
  storageBucket: "vivacommerce-32862.appspot.com",
  messagingSenderId: "323044031024",
  appId: "1:323044031024:web:4907936eb421d92bd04bf5"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <App />
  
  </React.StrictMode>,
)
