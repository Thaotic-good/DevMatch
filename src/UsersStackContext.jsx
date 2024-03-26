import React, {useState, useContext, createContext} from "react";

export const UsersStackContext = createContext();

export function useUsersStackContext() {
    return useContext(UsersStackContext)
}
export function UsersStackContextProvider({children}){
    const [stack, setStack] = useState([]);
    return (
        <UsersStackContext.Provider value={{stack, setStack}}>
            {children}
        </UsersStackContext.Provider>
    )
}