import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "@firebase/storage";

const config = {
  apiKey: "AIzaSyAd_6Oqqt43ujYBbwwwwgumYQ1RpJBTSJ8",
  authDomain: "z-shop-f2c8d.firebaseapp.com",
  databaseURL: "https://z-shop-f2c8d.firebaseio.com",
  projectId: "z-shop-f2c8d",
  storageBucket: "z-shop-f2c8d.appspot.com",
  messagingSenderId: "158199387196"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
