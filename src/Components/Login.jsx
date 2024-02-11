import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center w-screen h-screen mt-[150px]' >
      <div className='bg-white shadow-xl rounded-xl h-fit w-96 sh '>

        <div className='text-[40px] font-bold text-center my-[30px]'>
            Login
        </div>
        <div className='justify-center w-full h-full '>
          <form className='flex flex-col items-center justify-center p-4 gap-y-6'> 
            <div className='flex items-center justify-center w-full'>
              <input type="text" name="username" placeholder='UserName' className='w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100' />
            </div>
            <div className='flex items-center justify-center w-full'>
              <input type="password" name="password" placeholder='Password' className='w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100' />
              
            </div>
            <div  className='flex flex-col justify-center w-2/3'>
              <button type='submit' className=' text-3xl mt-[20px] bg-blue-200 p-3 rounded-xl shadow-xl hover:shadow'>Submit</button>
              <div className='p-3 text-center'>
                <NavLink>New Here? Sign up</NavLink>

              </div>
            </div>
          </form>
        </div>
        
        
        
      </div>
    </div>
    
    
  
  )
}

export default Login
