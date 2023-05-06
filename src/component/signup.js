import React, { useState } from 'react'
import {Box, Button, TextField} from '@mui/material'
import {auth} from '../firebaseconfig'
import { toast } from 'react-toastify'
import errorMapping from './errorMapping'

const Signup = ({handleClose}) => {
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
   
    const handleSignup = () =>{
      if(!email && !password  && !confirm ){
        toast.warn('fill all input', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }else if (password != confirm ){
        toast.error('password not matched', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
      }else{
        toast.success('Signed up', {
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

      auth.createUserWithEmailAndPassword(email,password).then((res)=>{
        toast.success('User Created', {
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
      }).catch((err)=>{
        toast.error(errorMapping[err.code] || 'some error occured', {
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
  return (
    <Box 
    p={3}
    style={{
        display:'flex',
        flexDirection:'column',
        gap: '20px',
        
        

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
        onChange={
            (e) => setPassword(e.target.value)
        }
        
        ></TextField>
        <TextField
        variant='outlined'
        type='password'
        label='Enter Confirm Password'
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
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        ></TextField>
        <Button 
        variant='contained'
        size='large'
        onClick={handleSignup}
        >SignUp</Button>
    </Box>
  )
}

export default Signup