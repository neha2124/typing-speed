import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import TableData from '../component/TableData'
import Graph from '../component/graph'
import UserInfo from '../component/userInfo'
const UserPage = () => {
    const [data, setData] = useState([])
    const [graphData, setGraphData] = useState([])
    
    const [user ,loading] = useAuthState(auth)
    // console.log(user , loading)
    const navigate  = useNavigate()
    
    const fetchUserData = () =>{
        const resultRef = db.collection('Result')
        const {uid} =auth.currentUser
       let tempData = []
       let tempGraphData = []
        resultRef
        .where("userId" ,"==", uid)
        // .orderBy('timeStamp', 'desc')
        .get()
        .then((snapshot)=>{
            snapshot.docs.map((doc) => {
                console.log(doc.data())
                tempData.push({ ...doc.data() })
                // console.log(tempData)
                tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0], doc.data().wpm])
            });
            setData(tempData)
            setGraphData(tempGraphData)
        })
        
    }
    useEffect(()=>{
      
        if(!loading){
           fetchUserData()
    // console.log(data)

        }
         if(!loading && !user){
            navigate('/')
        }

    },[loading])
   
  return (
    <div className='canvas userPage'>
      <UserInfo total={data.length}/>
      <div>
      <Graph graphData={graphData}/>
      </div>
      <div>
      <TableData data={data} />
      </div>
    </div>
  )
}

export default UserPage