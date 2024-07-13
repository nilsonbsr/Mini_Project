import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("auth-user")) || null);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};








/* import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

// create context
export const AuthContext = createContext()

export const useAuthContext = () =>{
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("auth-user")) || null) // return it as an object


    return <AuthContextProvider value={{authUser, setAuthUser}}>
        {children}
        </AuthContextProvider>
}
 */
