import React,{useState} from 'react'
import Select from 'react-select'
import { themeOptions } from '../utils/ThemeContet'
import { useTheme }  from './context/ThemeMode.js'

const Footer = () => {
    
    // const [value, setValue] = useState()
    const {setTheme,theme} = useTheme()
    const handleChange = (e) =>{
          // setValue(e.value)
          setTheme(e.value)
          localStorage.setItem('theme',JSON.stringify(e.value))
    }
  return (
    <div className='footer-section'>
        <div className="links">

        </div>
        <div className="theme-section">
            <Select
            // value={value}
            onChange={handleChange}
            options={themeOptions}
            menuPlacement='top'
             defaultValue = {{label:'theme',value:'theme'}}
             

            styles={{
              control: styles =>({...styles, backgroundColor:theme.background, color:theme.color}),
              menu: styles =>({...styles, backgroundColor: theme.background}),
              option :(styles,{isFocused})=>{
                return {
                  ...styles,
                  backgroundColor:(!isFocused)? theme.background : theme.color,
                  color: (!isFocused) ? theme.color: theme.background,
                  cursor:'pointer'
                }
              }
            }}
        >
            </Select>
        </div>
    </div>
  )
}

export default Footer