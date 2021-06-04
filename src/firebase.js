import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDn1ggcnZ9nMCDIitQhF86J-oxaZDXFufk",
  authDomain: "netflix-clone-357a3.firebaseapp.com",
  projectId: "netflix-clone-357a3",
  storageBucket: "netflix-clone-357a3.appspot.com",
  messagingSenderId: "771524966302",
  appId: "1:771524966302:web:71e92a889a71c534eec88f",
  measurementId: "G-YS2D9T1RD1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;