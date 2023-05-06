import React, { useState } from 'react'
import {Box, Button, TextField} from '@mui/material'
import { auth } from '../firebaseconfig'
import {toast} from 'react-toastify'
import errorMapping from './errorMapping'

const Login = ({handleClose}) => {
    const [ email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const handleLogin = () =>{
        if(!email && !password){
            toast.error('fill all input', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        auth.signInWithEmailAndPassword(email,password).then((res)=>{
            toast.success('Signed in', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
                handleClose()
        }).catch ((err)=>{
            toast.error(errorMapping[err.code]||'some error occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false, 
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
            })
    }
  return (
    <Box 
    p={3}
    style={{
        display:'flex',
        flexDirection:'column',
        gap: '20px',
        color:'red'

    }}
    >
        <TextField
        variant='outlined'
        type='email'
        label='Enter Email'
        InputLabelProps={{
            style:{
                color:'white'
            }
        }}
        InputProps={{
            style:{
                color:'white'
            }
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    
        ></TextField>
        <TextField
        variant='outlined'
        type='password'
        label='Enter Password'
        InputLabelProps={{
            style :{
                color:'white'
                
            }
        }}
        InputProps={{
            style:{
                color:'white'
            }
        }}
        value={password}
        onChange={(e) => setPassword( e.target.value)}
        
        ></TextField>
        <Button 
        variant='contained'
        size='large'
        onClick={handleLogin}
        >Login</Button>
    </Box>
  )
}

export default Login