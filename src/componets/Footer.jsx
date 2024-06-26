import React from 'react'

const Footer = () => {
  return (
    <div className='mx-w-full min-h-[127px] bg-black  bg-opacity-95 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-32 lg:px-56 gap-1'>
      {/* bg-black  */}
      
      <div className=' '>
        <p className='text-sm mb-2 text-white'>Question? Call</p>
        <p className='text-sm text-white'>FAQ</p>
        <p className='text-sm text-white'>Cookie Preference</p>
        <select name="" id="" className='text-sm  mt-3 '>
          <option value="">English</option>
        </select>
      </div>
      <div className=''>
        <p className='text-sm mt-6 text-white'>Help Center</p>
        <p className='text-sm text-white'>Corporate Information</p>
      </div>
      <div className=''>
        <p className='text-sm mt-6 text-white'>Terms of Use</p>
        <p className='text-sm text-white'>Privacy</p>
      </div>
      <div className=''></div>
     
    </div>
  )
}

export default Footer
