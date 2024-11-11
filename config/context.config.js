"use client"
import { Children, createContext,useState } from "react";


const AppContext=  createContext();

const AppProvider = ({Children}) => {
    const [loanDocId,setLoanDocId] = useState(null);

    return(
        <AppContext.Provider value={{loanDocId,setLoanDocId}}>
            {Children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}