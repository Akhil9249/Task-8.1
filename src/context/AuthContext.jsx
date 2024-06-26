import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [userDetails, setUserDetails] = useState({ username: "", password: "" });

    const logOut = () => {
        setAuth(false);
    };

    const abc = () => {
        console.log(logIn(),"logIn======");
    };

    const logIn = () => {
        let fromLocal = JSON.parse(localStorage.getItem("movie"));
        console.log("inside login");
        console.log(fromLocal);
        console.log(userDetails.username,fromLocal.username);
        console.log(userDetails.password,fromLocal.password);

        if (userDetails.username == fromLocal.username && userDetails.password == fromLocal.password) {
            console.log("++++++++++++++++++++++++++++++++");
            setAuth(true);
        }

        
    };

    const handleChange = (event) => {
        setUserDetails((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return <AuthContext.Provider value={{ auth, logOut, logIn, handleChange, abc }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
