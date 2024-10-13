import React, { useContext, useState } from "react";
const MyContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("red");
  const toggleTheme = () => {
    setTheme((previous) => (previous === "red" ? "blue" : "red"));
  };
  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

const ContextConsumer=()=>{
    const {theme,toggleTheme}=useContext(MyContext)
    console.log(theme)
    return (    
        <>
         {theme}
        <button onClick={toggleTheme}>
            Theme Button
        </button>
        
        </>
    )
}

export default ContextConsumer;
