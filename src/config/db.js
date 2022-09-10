import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";

const firebaseApp = ({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA0cJdIRb47IFR82QC35Zl52qBBxWyL1dQ",
    authDomain: "instragram-clone-2fc18.firebaseapp.com",
    databaseURL: "https://instragram-clone-2fc18-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "instragram-clone-2fc18",
    storageBucket: "instragram-clone-2fc18.appspot.com",
    messagingSenderId: "392854374529",
    appId: "1:392854374529:web:fb3f906e1f540213926580",
    measurementId: "G-3QZFJFG7PP"
});

const app = initializeApp(firebaseApp);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);



export { db, auth, storage }