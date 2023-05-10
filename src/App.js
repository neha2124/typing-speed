// import logo from './logo.svg';
// import './App.css';
import { GlobalStyle } from "./style/globel";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UserPage from "./pages/userPage";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./component/context/ThemeMode.js";

function App() {
  const {theme} = useTheme()
  return (
    <>
    <ThemeProvider theme={theme}>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/user" element={<UserPage/>}></Route>
    </Routes>
      
     <GlobalStyle/>
     </ThemeProvider>
    
    
    </>
  );
}

export default App;
