import React, { useEffect } from 'react'
import Graph from './graph'
import { auth, db } from '../firebaseconfig'
import { toast } from 'react-toastify'


const Stats = ({
    Wpm,
    Accuracy,
    Correctchar,
    WrongChar,
    Missedchar,
    ExtraChar,
    graphData
}) => {
  const pushDataToDB = ()=>{
    const resultRef = db.collection('Result');
    const {uid} = auth.currentUser;
    resultRef.add({
      wpm:Wpm,
      accuracy:Accuracy,
      timeStamp: new Date(),
      charaters:` ${Correctchar} / ${WrongChar} / ${Missedchar} / ${ExtraChar}`,
      userId:uid
    }).then((res)=>{
      toast.success('Result saved', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }).catch((err)=>{
      toast.error('not able to save result', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  }
  useEffect(()=>{
   if(auth.currentUser){
     pushDataToDB()
   }
  },[])
  return (
    <div className='stats-component'>
        <div className="stats">
        <div  className='title'> WPM </div>
              <div className="subtitle">{Wpm}</div>  
        <div className='title'>Accuracy</div>
             <div className="subtitle">{Accuracy}</div> 
        <div className='title'> Character</div>
            <div className="subtitle">
        {Correctchar} / {WrongChar} /{Missedchar} / {ExtraChar}
        </div>
        
        </div>
        <div className="graph">
        <Graph graphData={graphData}/>
        </div>
      
    </div>
  )
}

export default Stats