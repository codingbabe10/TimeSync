import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const Context = createContext(null);

function UserContext({ children }) {


    const [user, setUser] = useState(null);


    onAuthStateChanged(auth, (foundUser) => {
    if (foundUser) {
        setUser(foundUser);
        }
    });
    
    return (
        <Context.Provider value={{user}}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserContext };