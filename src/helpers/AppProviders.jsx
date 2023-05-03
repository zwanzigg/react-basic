import {createContext, useState} from "react";

export const CurrentThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

export function AppProviders({children, theme, setTheme}) {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <CurrentThemeContext.Provider value={{theme, setTheme}}>
            <CurrentUserContext.Provider
                value={{
                    currentUser,
                    setCurrentUser
                }}
            >
                {children}
            </CurrentUserContext.Provider>
        </CurrentThemeContext.Provider>
    );
}


