import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxP2thceBcWhgCYryyfUYrcA-HEIU4A1Y",
  authDomain: "facebook-clone-bb7f6.firebaseapp.com",
  projectId: "facebook-clone-bb7f6",
  storageBucket: "facebook-clone-bb7f6.appspot.com",
  messagingSenderId: "339758079095",
  appId: "1:339758079095:web:0af4efbe6a8ca2cb883a72",
  measurementId: "G-QN5PY8MCNQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
