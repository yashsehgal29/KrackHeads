import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex-col items-center justify-center h-1/6 '>
      <div className='flex items-center justify-around py-5 '>
      <div className="flex mr-[100px] items-center ">
        <Link to='/'><div><span className="text-rose-500 text-[70px] font-normal font-['Kumbh Sans']">Aid</span><span className="text-black text-[70px] font-normal font-['Kumbh Sans']">wise</span></div></Link>
      </div>
      {/* Navbar */}
      <div className='flex items-center gap-[50px] '>
        <Link to='/' className='nav-link'><div className="text-black text-[25px] font-normal font-['Kumbh Sans']  ">Home</div></Link>
        {/* About page */}
        <Link to='/about' className='nav-link'> <div className="text-black text-[25px] font-normal font-['Kumbh Sans']">About us</div></Link>
        {/* Services */}
        <Link to='/services' className='nav-link'> <div className="text-black text-[25px] font-normal font-['Kumbh Sans']">Services</div></Link>
        {/* Login sign up button */}
        <Link to='/logsign'> 
         <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[222px] h-[65px] relative">
              <div className="w-[222px] h-[62px] left-0 top-0 absolute bg-red-300 rounded-[23px] border border-white" />
              <div className=" flex justify-center items-center w-[222px] h-[62px] left-0 top-[3px] absolute bg-rose-400 rounded-[23px] border border-white" >
                 <div className="text-3xl font-bold text-white LogInSignUp">log in/sign up</div>
              </div>
            </div>
           
          </div>
        </Link>
       
      </div>
       {/* Navbar closes */}
    </div>
    
       
    
      
    </div>
   
  )
}

export default Navbar
