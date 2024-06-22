import { createContext , useState} from "react";
import React from "react";

export const InputContext = createContext()

export const InputProvider = ({children}) =>{
    const[inputs, setInputs] = useState({
        date: (new Date()).toLocaleDateString("en-CA"),
        time: "",
        visitors: "",
        occasion: "",
        name: ""
    })
return (
        <InputContext.Provider value={{inputs, setInputs}}>
            {children}
        </InputContext.Provider>
    )
}

