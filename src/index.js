import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/styles.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "flexindumentaria-71aa7.firebaseapp.com",
  projectId: "flexindumentaria-71aa7",
  storageBucket: "flexindumentaria-71aa7.appspot.com",
  messagingSenderId: "607651542875",
  appId: "1:607651542875:web:255c31e2672843b0850c7e",
  measurementId: "G-LEJG9J6LNP"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
