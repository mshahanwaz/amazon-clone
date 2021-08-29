import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_NI_mNnFz-xs4Ujk4FXhWsDlmUSiaiV4",
  authDomain: "amzn-build.firebaseapp.com",
  projectId: "amzn-build",
  storageBucket: "amzn-build.appspot.com",
  messagingSenderId: "176004877874",
  appId: "1:176004877874:web:ca890fe32e6d7cf63d362b",
  measurementId: "G-5GWBHMGNT8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = firebase.firestore();
