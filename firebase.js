import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZ0IrAKzUDKje-IJgEjEMI1qQnppqkdHw",
  authDomain: "whatsapp-cl-fefc1.firebaseapp.com",
  projectId: "whatsapp-cl-fefc1",
  storageBucket: "whatsapp-cl-fefc1.appspot.com",
  messagingSenderId: "756689540102",
  appId: "1:756689540102:web:3af114647679d5518f5f87",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app().firestore();
  const auth = app().auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};
