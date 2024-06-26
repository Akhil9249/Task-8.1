import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = () => {
 const {auth,logOut} = useContext(AuthContext)
  return (
    <div className='Header-main-container max-w-[1640px] mx-auto flex flex-col items-center justify-center'>
      <div className='w-full h-2/4 flex justify-between items-center px-2'>
        <div className='w-36 h-10 '><h1 className=' DebugMedia font-bold text-2xl text-[#FF0000] '>DebugMedia</h1></div>
        <div className=' flex gap-1'>
            <p className='border-solid border px-2 py-1 bg-black bg-opacity-50 text-white  rounded-xl cursor-pointer text-sm  border-white'>Light</p>
            {auth?(
              <p className='border-solid border-2 px-2 py-1 bg-white text-black rounded-lg cursor-pointer text-sm'>  <Link to="/" onClick={logOut}>Logout</Link></p>
            ):(
              <p className='border-solid border-2 px-2 py-1 bg-white text-black rounded-lg cursor-pointer text-sm'>  <Link to="/home">LogIn</Link></p>
            )}
            
        </div>
      </div>
      {auth?(
          <div className='w-[100px] sm:w-[150px] lg:w-[500px] mt-5'>
          <input type="text" className='w-full focus:outline-none rounded-md' />
        </div>
      ):(
        <div className='w-[100px] sm:w-[150px] lg:w-[500px] mt-5 mb-6'></div>
      )}
      
      
    </div>
  )
}

export default Header
