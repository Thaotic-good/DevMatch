/*PURPOSE OF THIS:
* 1. in TechnologiesList the user will choose his stack in userStack state
* 2. that state gets passed through setStack and is stored in UsersStackContext
* 3. context gets passed into TechnologiesComparator*/
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