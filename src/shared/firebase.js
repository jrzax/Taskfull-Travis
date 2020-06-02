import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAVNSVyEbG8w8Cu5CMtLbgQ15OOXnHOK98",
  authDomain: "taskfull-travis.firebaseapp.com",
  databaseURL: "https://taskfull-travis.firebaseio.com",
  projectId: "taskfull-travis",
  storageBucket: "taskfull-travis.appspot.com",
  messagingSenderId: "211836358302",
  appId: "1:211836358302:web:0a105b13e51645c256b58f"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
