import React, {createContext, useContext, useState} from "react"

export const ButtonsChoiceContext = createContext(null);

export function useButtonsChoice(){
    return useContext(ButtonsChoiceContext)
}

export function ButtonsChoiceProvider({children}){
    const [choice, setChoice]= useState(null)
    return (
        <ButtonsChoiceContext.Provider value={{choice, setChoice}}>
            {children}
        </ButtonsChoiceContext.Provider>
    );
}



