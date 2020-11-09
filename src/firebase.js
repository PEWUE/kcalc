import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA0pJgz-P8ETRSBv6e3AyaTbnt_YZARapg",
    authDomain: "kcalc-b1420.firebaseapp.com",
    databaseURL: "https://kcalc-b1420.firebaseio.com",
    projectId: "kcalc-b1420",
    storageBucket: "kcalc-b1420.appspot.com",
    messagingSenderId: "892587764452",
    appId: "1:892587764452:web:e0b1b12186b83854795af1",
    measurementId: "G-ERXBBDJQK7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export {db};