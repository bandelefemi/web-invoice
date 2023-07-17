import React from 'react'

const success = () => {
  return (
    <div className=' text-center flex items-center justify-center bg-[#ebf0f5] py-10 h-screen'>
        <div className=' bg-white p-16 rounded-md shadow-md m-auto'>
            <div className=' h-52 w-52 bg-[#f8faf5] m-auto flex items-center justify-center rounded-full' >
                <i className=' text-[#9abc66] text-8xl'>
                ✓ 
                </i>
            </div>
            <h1 className=' text-[#88b04b] font-sans mt-5 font-bold text-3xl'>
                Success!
            </h1>
            <p className=' text-[#404f5e] mt-3'>
            We received your payment request;<br/> we'll be in touch shortly! 
            </p>
        </div>
    </div>
  )
}

export default success