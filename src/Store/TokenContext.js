import { createContext } from "react";

const Token=createContext({
    token:"",
    setContextToken:(id)=>{},
})

export default Token;