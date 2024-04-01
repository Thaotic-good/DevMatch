import React, {createContext, useContext, useState} from "react"

export const PercentageMatchContext = createContext(null);

export function usePercentageMatch(){
    return useContext(PercentageMatchContext)
}

export function PercentageMatchProvider({children}){
    const [percentage, setPercentage]= useState(null)
    return (
        <PercentageMatchContext.Provider value={{percentage, setPercentage}}>
            {children}
        </PercentageMatchContext.Provider>
    );
}

