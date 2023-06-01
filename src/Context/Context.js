import React, { createContext, useState} from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
    const [showSide, setShowSide] = useState(false)
    const toggleSide = ()=>{
        setShowSide(!showSide)
    }
    return(
        <AuthContext.Provider value={{showSide, toggleSide}}>{children}</AuthContext.Provider>
    )
}