import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import TableData from '../component/TableData'
import Graph from '../component/graph'
const UserPage = () => {
    const [data, setData] = useState([])
    const [graphData, setGraphData] = useState([])
    
    const [user ,loading] = useAuthState(auth)
    // console.log(user , loading)
    const navigate  = useNavigate()
    
    const fetchUserData = () =>{
        const resultRef = db.collection('Result')
        const {uid} =auth.currentUser
        // let quer = query(resultRef, where('userId' '=='))
       let tempData = []
       let tempGraphData = []
        resultRef
        .where("userID" ,"==", uid)
        .get()
        .then((snapshot)=>{
            snapshot.docs.map((doc)=>{
                // console.log(doc.data())
                tempData.push({ ...doc.data() })
                // console.log(tempData)
                tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString(), doc.data().wpm])
            });
            setData(tempData)
            setGraphData(tempGraphData)
        })
        
    }
    useEffect(()=>{
        // fetchUserData()
        if(!loading){
           fetchUserData()
    // console.log(data)

        }
         if(!loading && !user){
            navigate('/')
        }

    },[loading])
   
  return (
    <div className='canvas'>
      <Graph graphData={graphData}/>
      <TableData data={data} />
    </div>
  )
}

export default UserPage