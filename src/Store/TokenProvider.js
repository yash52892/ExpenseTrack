import Token from "./TokenContext";
import { useState} from "react";

const TokenProvider=(props)=>{
    const[tok, setToken]=useState("");

    const contextToken=(id)=>{
        setToken(id);
    }
    const tokenstate={
        setContextToken:contextToken,
        token:tok
    }

    return(
        <Token.Provider value={tokenstate}>
        {props.children}
    </Token.Provider>
    )
}

export default TokenProvider;