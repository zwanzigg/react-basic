import React, {createContext, useCallback, useEffect, useState} from "react";
import {getCurrentUser} from "./api";

export const CurrentThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

export const AppProviders = ({children, theme, setTheme}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [accessToken, setAccessToken] = React.useState(localStorage.getItem("accessToken"));

    const getUserInfo = useCallback(async () => {
        const response = accessToken ? await getCurrentUser(accessToken) : null;
        const user = (!response || response.error) ? null : response;
        if (!user && accessToken) {
            setAccessTokenToLocalStorage('');
        }
            setCurrentUser(user);

    }, [accessToken]);

    const setAccessTokenToLocalStorage = (accessToken) => {
        localStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
    }

    useEffect(() => {
        getUserInfo().then(r => 1);
    }, [getUserInfo]);

    return (
        <CurrentThemeContext.Provider value={{theme, setTheme}}>
            <CurrentUserContext.Provider
                value={{
                    currentUser,
                    setCurrentUser,
                    setAccessTokenToLocalStorage: setAccessTokenToLocalStorage,
                    accessToken
                }}
            >
                {children}
            </CurrentUserContext.Provider>
        </CurrentThemeContext.Provider>
    );
}


