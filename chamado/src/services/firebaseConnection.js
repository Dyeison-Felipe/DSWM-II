
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyANJsloaGjgkSbctkMwzdm7j7MsWUTOewY",
  authDomain: "tickets-b-dyeison.firebaseapp.com",
  projectId: "tickets-b-dyeison",
  storageBucket: "tickets-b-dyeison.appspot.com",
  messagingSenderId: "373410238166",
  appId: "1:373410238166:web:69626844306237494e8377"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };