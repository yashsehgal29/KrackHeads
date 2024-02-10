import React, { useState } from 'react'

const ProfileForm = () => {
    const [user,setuser]=useState(
        {
            Name:"",
            Age:"",
            DOB:"",
            Gender:"",
            Phone:"",
            BloodGroup:"",
            
        }
    )
    const data=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setuser({...user,[name]:val});
    }
    const Submitfunc=async(e)=>{
        e.preventDefault();
        console.log(user);
        const {Name,Age,DOB,Gender,Phone,BloodGroup}=user;
        const res=await fetch("https://crack-hack-default-rtdb.firebaseio.com/userdetails.json",
        {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                Name,Age,DOB,Gender,Phone,BloodGroup
            })
        }

         )
        setuser({Name:"",Age:"",DOB:"",Gender:"",Phone:"",BloodGroup:""});
    }
   
  return (

      <div className="w-1/3 pb-2  h-fit bg-[#fcaeae] rounded-lg">
        <div className='h-[100px] p-3 text-center text-3xl font-extrabold bg-[#ff8989]  rounded-lg'>
             <h1 className='mt-5'>Your Profile</h1>
        </div>
      
        <form onSubmit={Submitfunc}>
            <div className='flex gap-4 p-3 justify-evenly'>
                <div className='w-1/2'>
                 <label htmlFor="name">Name:</label><br/>
                <input  className='w-full h-[50px] p-3 rounded-lg' type="text"  name="Name" value={user.Name} required autoComplete='of'onChange={data}/><br/>
                </div>
       
            <div className='w-1/2 '>
                <label htmlFor="age">Age:</label><br/>
                <input  className='w-full h-[50px] p-3 rounded-lg' type="number"  name="Age" value={user.Age} required autoComplete='of'onChange={data}/><br/>
            </div>
            </div>
            
        
        <div className='flex gap-4 p-3 justify-evenly'>
            <div  className='w-1/2'>
                <label htmlFor="dob">Date of Birth:</label><br/>
                <input  className='w-full h-[50px] p-3 rounded-lg' autoComplete='of' type="date" name="DOB" required value={user.DOB} onChange={data}/><br/>
            </div>
        
            <div className='w-1/2 '> 
                <label htmlFor="gender">Gender:</label><br/>
                <select  className="w-full h-[50px] p-3 rounded-lg" id="Gender" name="Gender"  value={user.Gender} onChange={data}required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
            </div>
        </div>
        <div className='flex gap-4 p-3 justify-evenly '>
            <div className='w-1/2'>
                <label htmlFor="phone">Phone No.</label><br/>
                <input className='w-full h-[50px] p-3 rounded-lg ' autoComplete='of' type="text" name="Phone"  value={user.Phone} onChange={data}/>
            </div>
            <div className='w-1/2 '> 
                <label htmlFor="gender">Blood Group:</label><br/>
                <select  className="w-full h-[50px] p-3 rounded -lg" id="bloodgroup" name="BloodGroup" value={user.BloodGroup} onChange={data} required>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB-">AB+</option>
                <option value="AB+">AB-</option>
                </select>
            </div>
        </div>
       
       
        
        <br/>
        <div className='flex justify-center'>
             <button type='submit' className="w-1/2 p-2 text-2xl font-extrabold text-center bg-blue-600 rounded-lg"> Submit </button>
        </div>
       
        </form>
    </div>

  )
}

export default ProfileForm
