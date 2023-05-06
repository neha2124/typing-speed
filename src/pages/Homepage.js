import React from 'react'
import TypeBox from "../component/TypeBox";
import Footer from "../component/Footer";
import Header from "../component/header";

const Homepage = () => {
  return (
    <div className='canvas'>
     <div className="header"><Header/></div>
     <div className="canv"><TypeBox/></div>
     <div className='footer'>
      <Footer/>
     </div>
    </div>
  )
}

export default Homepage