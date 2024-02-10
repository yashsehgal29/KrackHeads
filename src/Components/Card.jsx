import React from 'react'

const Card = (props) => {
  return (
    <div className=" w-[258px] h-80 px-5 py-7 bg-pink-200 rounded-[38px] flex-col justify-start items-start gap-2.5 inline-flex">
  <div className="flex flex-col items-center justify-start gap-5 Text">
    <div className=" w-[213px] text-center text-neutral-700 text-[27px] font-semibold font-['Kumbh Sans']"><span className="uppercase">{props.heading}</span></div>
    <div className="w-[218px] h-[173px] text-center text-black text-base font-light font-['Josefin Sans']">{props.description} </div>
  </div>
</div>
  )
}

export default Card
