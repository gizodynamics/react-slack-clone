import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDBjiZfuXZD9rezV9fDO4DPxxgnSAbzY8s",
  authDomain: "react-slack-clone-59674.firebaseapp.com",
  databaseURL: "https://react-slack-clone-59674.firebaseio.com",
  projectId: "react-slack-clone-59674",
  storageBucket: "react-slack-clone-59674.appspot.com",
  messagingSenderId: "450668846019"
};
firebase.initializeApp(config);

export default firebase;
