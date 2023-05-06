import React,{useState} from 'react'
import Select from 'react-select'
import { ThemeOptions } from '../utils/ThemeContet'
import {useTheme }  from './context/ThemeContext'

const Footer = () => {
    // const {setTheme} = useTheme()
    const [value, setValue] = useState()
    const handleChange = (e) =>{
          setValue(e.value)
        //   setTheme(e.value)
    }
  return (
    <div className='footer-section'>
        <div className="links">

        </div>
        <div className="theme-section">
            <Select
            value={value}
            onChange={handleChange}
            options={ThemeOptions}
            menuPlacement='top'
        >
            </Select>
        </div>
    </div>
  )
}

export default Footer