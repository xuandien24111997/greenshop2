import firebase from 'firebase'
import React from 'react'

var firebaseConfig = {
    apiKey: "AIzaSyApIArgcb6IqW_DJVOhX3rYrP4x51EWPNQ",
    authDomain: "greenshop-10e19.firebaseapp.com",
    projectId: "greenshop-10e19",
    storageBucket: "greenshop-10e19.appspot.com",
    messagingSenderId: "255913704941",
    appId: "1:255913704941:web:0083d8eaa115c167227be4"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;