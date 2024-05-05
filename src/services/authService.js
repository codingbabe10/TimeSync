import {
    signOut,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig";


const signIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error: ", errorCode, " ", errorMessage);
        });
};

// const signInWithGoogle = async () => {
//     try {
//         await signInWithPopup(auth, googleProvider);
//     } catch (err) {
//         console.error(err);
//     }
// };

function signUpWithCredentials({ email, password, username, timezone}) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // add username, position, and and other data to db. Im thinking they get an array of "projects" which theyll get a position for each. each project gets a unique id.
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error: ", errorCode, " ", errorMessage);
        });
}

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error(err);
    }
};

export {
    logOut,
    signIn,
    signUpWithCredentials
}