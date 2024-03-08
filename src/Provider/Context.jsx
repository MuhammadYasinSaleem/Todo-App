import React,{createContext} from "react";
import { useState } from "react";
export const Context=createContext()
const ContextProvider=(props)=>{
    const [item,setitem]=useState(['Eat','Drink'])
    const [reset,setreset]=useState(false)
    return(
<Context.Provider value={{item,setitem,reset,setreset}}>
    {props.children}
</Context.Provider>
    )
}

export default ContextProvider