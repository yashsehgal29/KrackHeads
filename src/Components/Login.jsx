import React from 'react'

const Login = () => {
  return (
    <>
    <div className="Login w-96 h-96 relative">
        <div className="Bgrectangle w-96 h-96 left-0 top-0 absolute bg-white rounded-3xl shadow " />
        <div className="Login w-48 left-[152px] top-[43px] absolute text-center text-black text-3xl font-normal font-['Kumbh Sans']">Login</div>
        <div className="Submit w-40 h-14 left-[172px] top-[302px] absolute">
            <div className="Rectangle5 w-40 h-14 left-0 top-0 absolute bg-blue-100 rounded-lg" />
            <div className="Submit left-[28px] top-[9px] absolute text-center text-black text-3xl font-normal font-['Kumbh Sans']">Submit</div>
        </div>
        <div className="NewHereSignUp left-[185px] top-[362px] absolute text-center text-black text-base font-normal font-['Walter Turncoat']">New here? Sign up!</div>
        <div className="Textfield w-96 h-14 left-[57px] top-[211px] absolute">
            <div className="Rectangle5 w-96 h-14 left-0 top-0 absolute bg-zinc-100 rounded-lg" />
            <div className="Input left-[22px] top-[13px] absolute text-neutral-500 text-2xl font-normal font-['Kumbh Sans']">Password</div>
        </div>
        <div className="Textfield w-96 h-14 left-[57px] top-[120px] absolute">
            <div className="Rectangle5 w-96 h-14 left-0 top-0 absolute bg-zinc-100 rounded-lg" />
            <div className="Input left-[22px] top-[13px] absolute text-neutral-500 text-2xl font-normal font-['Kumbh Sans']">Username</div>
        </div>
    </div>
    
    
    </>
  )
}

export default Login