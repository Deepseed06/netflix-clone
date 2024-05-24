import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDfsGy0UYkSq4P2FJjLWZU0olrVFrd3np4",
    authDomain: "netflix-clone-15259.firebaseapp.com",
    projectId: "netflix-clone-15259",
    storageBucket: "netflix-clone-15259.appspot.com",
    messagingSenderId: "27302473581",
    appId: "1:27302473581:web:d3d2a84ff8f444abcff464"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
