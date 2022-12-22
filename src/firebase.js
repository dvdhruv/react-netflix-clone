import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAXxz6bleci7ETNFa2JidUPDp5RRuCA1ow",
  authDomain: "netflix-clever-clone.firebaseapp.com",
  projectId: "netflix-clever-clone",
  storageBucket: "netflix-clever-clone.appspot.com",
  messagingSenderId: "676210584421",
  appId: "1:676210584421:web:c1261c6d72493b2b9e4f8c",
  measurementId: "G-PGFEGXQ42L"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();




  export {auth,provider}
  export default db;
