import { createContext, useState } from "react";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

const Context = createContext(null);

function UserContext({ children }) {

    const [user, setUser] = useState(null);

    const auth = getAuth();

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