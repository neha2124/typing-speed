import { createContext, useContext, useState } from "react";


 const TestModeContext = createContext()

 export const TestModeProvider = ({children}) => {
    const [updateTime , setUpdateTime] = useState(15)
    let values = {
        updateTime,
        setUpdateTime,

    }

    return(
        <TestModeContext.Provider value={values}>{children} </TestModeContext.Provider>
    )
    
    
 }
 export const TestContext = () =>  useContext(TestModeContext)
