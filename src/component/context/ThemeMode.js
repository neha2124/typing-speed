// import React from "react";
import { createContext, useContext, useState } from "react";
import { themeOptions } from "../../utils/ThemeContet";

const ThemeContext = createContext() 

export const ThemeContextProvider =({ children }) => {
     const defaultValue = JSON.parse(localStorage.getItem('theme'))|| themeOptions[0].value  
     const [theme, setTheme] = useState(defaultValue);
    let values = {
        theme,
        setTheme
    }
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );

}
 export const useTheme  = () =>  useContext(ThemeContext);
 
//  export default ThemeProvider



