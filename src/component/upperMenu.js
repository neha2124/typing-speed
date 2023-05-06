import React from 'react'
import { TestContext } from './context/TestMode'

const UpperMenu = ({Timer}) => {
    const {setUpdateTime} = TestContext()
const UpDateTime = (e) =>{
   setUpdateTime(Number(e.target.id))
}
  return (
    <div className="Time-mode-section">
    <div>{Timer}</div>
    <div className="test-modes">
        <div className="mode" id={15} onClick={UpDateTime}>15s</div>
        <div className="mode" id={30} onClick={UpDateTime}>30s</div>
        <div className="mode" id={60} onClick={UpDateTime}>60s</div>
    </div>
    </div>
  )
}

export default UpperMenu