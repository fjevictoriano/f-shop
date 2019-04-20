import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "@firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC-uht_o8FJx5aBRVVmPXMLWh3V1TKnn-M",
  authDomain: "z-shop-v2.firebaseapp.com",
  databaseURL: "https://z-shop-v2.firebaseio.com",
  projectId: "z-shop-v2",
  storageBucket: "z-shop-v2.appspot.com",
  messagingSenderId: "485577716278"
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
