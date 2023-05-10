import React from 'react'
import Account from './account'
const Header = () => {
  return (
    <div className='header-component'>
        <div className="logo">
         <img src="https://as2.ftcdn.net/v2/jpg/01/91/96/83/1000_F_191968336_HrHpdgijMy4UsaWNTSP1vCnWUQsYPduW.jpg" alt="" />
        </div>
        <div className="icon">
            <Account/>
        </div>

    </div>
  )
}

export default Header