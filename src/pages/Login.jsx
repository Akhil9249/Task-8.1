import React from 'react'

import { useAuth } from '../context/AuthContext'
import {useNavigate } from 'react-router-dom'
import './Login.css'


const Login = () => {
 const {logIn , handleChange ,auth} = useAuth()
 const navigate = useNavigate()


 
  return (
    <div className='Login-main-container max-w-[1640px] min-h-[430px] mx-auto flex flex-col items-center justify-center p-4'>
        <div className='max-w-[250px] min-h-[300px]  sm:w-[250px] sm:h-[300px] md:w-[250px] md:h-[300px] bg-black px-7 py-3'>
        <h1 className=' text-white mb-3 rounded-sm '>Sign In</h1>
        <div className=' w-full h-[200px] relative  '>
            <div className='bg-[#353333] rounded-sm '>
            <input type="text" name='username' onChange={handleChange} className='w-full bg-transparent focus:outline-none px-2 text-sm '  placeholder="Email or phone number "/>
            </div>
            <div className='bg-[#353333] rounded-sm mt-3 '>
            <input type="text" name='password' onChange={handleChange}  className='w-full px-2 bg-transparent focus:outline-none text-sm ' placeholder="Password" />
            </div>
            <button className='w-full text-sm font-bold mt-8 h-7 bg-[#FF0000] text-white rounded-sm ' onClick={()=>{ logIn();navigate(-1)}}>Sign In</button>
            <p className=' ForgetPassword text-white text-xs absolute bottom-14 right-0'>Forget Password</p>
            <p className='signup text-white text-xs absolute top-52 sm:top-52 '>new to Debug Media? <b>Sign up now</b> </p>
        </div>
        </div>
    </div>
  )
}

export default Login
