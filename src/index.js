import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDkZasCyVALvgm2MfIV9sLTOEMS52r5ERQ",
  authDomain: "betta-shop-ecommerce.firebaseapp.com",
  projectId: "betta-shop-ecommerce",
  storageBucket: "betta-shop-ecommerce.appspot.com",
  messagingSenderId: "761955250691",
  appId: "1:761955250691:web:fe3eda4bd267c697095436"
};


initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
