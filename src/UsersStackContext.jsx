import React, {useState, createContext} from "react";

const UsersStackContext = createContext(null)

export function useUsersStackContext(){
    return createContext(UsersStackContext)
}
export function UsersStackContextProvider({children}){
    const [stack, setStack] = useState(null)
    return (
        <UsersStackContextProvider value={{stack, setStack}}>
            {children}
        </UsersStackContextProvider>
    )
}