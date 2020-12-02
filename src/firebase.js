import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsLNBoDJylURoTC2I1IbvbNTOdA8EdUDw",
  authDomain: "clone-af.firebaseapp.com",
  databaseURL: "https://clone-af.firebaseio.com",
  projectId: "clone-af",
  storageBucket: "clone-af.appspot.com",
  messagingSenderId: "293276786888",
  appId: "1:293276786888:web:d2f1db3858f943cdaec5fd",
  measurementId: "G-CFWK327X67",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
