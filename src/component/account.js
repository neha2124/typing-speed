import React, { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
import { Modal, AppBar, Tabs, Tab, Box } from '@mui/material'
import Login from './login'
import Signup from './signup'
import GoogleButton from 'react-google-button'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebaseconfig'
import { toast } from 'react-toastify'
import errorMapping from './errorMapping'
import { LogoutSharp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

const Account = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleOpenModal = () => {
        if (user) {
            navigate('/user')
        }
        setOpen(true)
    }
    const handleChange = () => {
        setOpen(false)
    }
    const handleValueChange = (e, v) => {
        setValue(v)
    }
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'


    }
    const logOut = () => {
        auth.signOut().then((res) => {
            toast.success('logged out', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }).catch((err) => {
            toast.error('not able to logged out', {
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
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSubmit = () => {
        signInWithPopup(auth, googleProvider).then((res) => {
            toast.success('Google login successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            handleChange()
        }).catch((err) => {
            toast.error(errorMapping[err.code] || 'some error occured', {
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
        <>
            <div>

                <AccountCircle onClick={handleOpenModal} />
                {user && <LogoutSharp onClick={logOut} />}

                <Modal
                    open={open}
                    onClose={handleChange}
                    sx={style}
                >
                    <div style={{ width: '400px', textAlign: 'center' }}>
                        <AppBar position='static' style={{ background: 'transparent' }}>
                            <Tabs variant='fullWidth'
                                value={value}
                                onChange={handleValueChange}
                            >
                                <Tab label="login"
                                    style={{
                                        color: 'white'
                                    }}
                                ></Tab>
                                <Tab label="signUp"
                                    style={{
                                        color: 'white'
                                    }}
                                ></Tab>
                            </Tabs>
                        </AppBar>
                        {value === 0 && <h1><Login handleClose={handleChange}/></h1>}
                        {value === 1 && <h1><Signup handleClose={handleChange} /></h1>}

                        <Box>
                            <span>or</span>
                            <GoogleButton
                                style={{ width: '100%', marginTop: '10px' }}
                                onClick={handleGoogleSubmit} />
                        </Box>
                    </div>
                </Modal>
            </div>

        </>
    )
}

export default Account