import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [ theme, setTheme ] = useState(localStorage.getItem("theme") || "light");
    const toggleTheme = () =>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }
    useEffect(()=>{
        document.documentElement.classList.toggle("dark", theme === "dark")
    },[theme])

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}