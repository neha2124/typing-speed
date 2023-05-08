import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AccountCircle } from '@mui/icons-material'
import { auth } from '../firebaseconfig'

const UserInfo = ({total}) => {
    const [user] = useAuthState(auth)
  return (
    <div className='user-info'>
        <div className="account">
          <div className="user-icon">
               <AccountCircle/>
                </div>
                <div className="info">
           <div className="user-email">
                {user.email}
              </div>
              <div className="join-dt">
                {user.metadata.creationTime}
              </div>
              </div>
    </div>
    
    <div className='total-test'>
        Total test :- {total}
    </div>
    </div>
    
  )
}

export default UserInfo