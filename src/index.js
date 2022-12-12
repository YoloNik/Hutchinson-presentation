import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//import 'firebase/auth';
//import { initializeApp } from 'firebase/app';
//import { getDatabase } from 'firebase/database';
//import { getAnalytics } from 'firebase/analytics';

//const fbStart = () => {
//  const firebaseConfig = {
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//    appId: process.env.REACT_APP_FIREBASE_APP_ID,
//    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
//    databaseURL: process.env.REACT_APP_FIREBASEDATA_URL,
//  };

//  const app = initializeApp(firebaseConfig);
//  //const analytics = getAnalytics(app);
//  return getDatabase(app);
//};

//export { app, analytics };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  /*</React.StrictMode>,*/
);
