import { createContext, useState } from 'react';

export const DarkModeCtx = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <DarkModeCtx.Provider value={[darkMode, setDarkMode]}>
            {children}
        </DarkModeCtx.Provider>
    )
}