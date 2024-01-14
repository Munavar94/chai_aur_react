import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // variable
    // Method = function
    darkTheme: () => {},    
    lightTheme: () => {},
});

// Provider for wrapping
export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme() {
    return useContext(ThemeContext);
}