import React, {createContext, useContext, useState} from "react"

const ButtonsChoiceContext = createContext();

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



