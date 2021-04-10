import firebase from "firebase";
export const firebaseConfig = {
  apiKey: "AIzaSyCWzm_QnyYLR6xgPDE702E-s5VgeYTQUew",
  authDomain: "linkedin-react-clone-2a195.firebaseapp.com",
  projectId: "linkedin-react-clone-2a195",
  storageBucket: "linkedin-react-clone-2a195.appspot.com",
  messagingSenderId: "841867390170",
  appId: "1:841867390170:web:6000d9ee6d31e19a1289e3",
};
export const instance = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();
export const auth = firebase.auth();
