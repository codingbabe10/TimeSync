import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
// TODO FIGURE OUT IF I NEED TO HIDE SOMETHING IN HERE AND HOW
const firebaseConfig = {
    apiKey: "AIzaSyA0OcWG_fE3Cb_JqP1fZhiULt80p09HWt4",
    authDomain: "timesync-97896.firebaseapp.com",
    projectId: "timesync-97896",
    storageBucket: "timesync-97896.appspot.com",
    messagingSenderId: "57517692574",
    appId: "1:57517692574:web:47bce8c15d8bf3059b8d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();