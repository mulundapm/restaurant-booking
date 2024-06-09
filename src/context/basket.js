import { createContext , useState} from "react";
import React from "react";

export const basketContext = createContext()

export const BasketProvider = ({children}) =>{
    const[basketItem, setbasketItem] = useState([])
return (
        <basketContext.Provider value={{basketItem, setbasketItem}}>
            {children}
        </basketContext.Provider>
    )
}

