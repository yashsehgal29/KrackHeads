import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <div>
    <div className='flex'>
      {/* Image and then get an account */}
      <div className='flex flex-col items-center justify-center w-1/2'>
          <img src='/src/assets/image 1.svg'/>
         
      </div>
      {/* For text */}
      <div className='flex flex-col w-1/2'>
        <div className='mt-10 '>
          <div ><span className="text-[55px]  font-normal text-black">Your </span><span className="text-rose-500 text-[55px] font-normal font-['Kumbh Sans']">one stop </span>
          </div>
          <div>
          <span className="text-black text-[55px] font-normal font-['Kumbh Sans'] ">solution for all your<br/> health needs</span>
          </div>
      </div>
      
        <div className="w-[626px] mt-[20px]"><span className="text-black text-xl font-['Kumbh Sans']">
          Welcome to AidWise, your ultimate Health Companion! Seamlessly review medical prescriptions, reports, and scan images, receive personalized advice rooted in Indian Ayurvedic Home remedies, and connect with vital Blood, Organ, and medicine donation services.<br/></span>
          <span className="text-black text-[25px] font-normal font-['Kumbh Sans'] font-bold">Let's put your well-being first, together.<br/></span>
         
        </div>
         <div className="  bg-rose-400 rounded-[23px] w-1/2 border border-white h-[60px] flex items-center justify-center mt-20 hover:bg-rose-600" >
            <div className=" text-white text-3xl font-bold font-['Kumbh Sans']">Get an account</div>
          </div>
      </div>
      
     
    </div>
    {/* functionality */}
    <div className='flex flex-col gap-y-[90px] '>
      <div className='flex justify-center gap-[60px] h-1/2 mt-[60px]'>
          <Card heading="review your prescriptions" description="Get a detailed analysis of your prescription, including potential side effects of medicines. Our Prescription Analyser will help you make an informed decision for your health."/>
          <Card heading="Review Medical Scans" description="Our Scan Analyser will provide you a thorough analysis of your medical scans, giving you a clear report of the findings."/>
          <Card heading="Ayurvedic Home Remedies" description="Explore the power of natural remedies with the help of Ayush, our AI Ayurvedic Advisor. Get personalized suggestion and find natural solutions to common ailments."/>
      </div>
      <div className='flex justify-center gap-[60px] h-1/2 '>
          <Card heading="blood and medicine donation" description="Be a part of something bigger and save lives by donating blood. Our services make it easier for you to contribute to your community. We also help you donate your surplus medicines to those in need."/>
          <Card heading="organ donation services" description="Give the gift of life  by becoming an organ donor. Our Organ donation services will guide you through the process and provide the support to ensure smooth and meaningful experience."/>
      </div>
    </div>
      
      
      </div>
  )
}

export default Home
