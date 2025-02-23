import React from 'react'

const Recognition = () => {
  return (
    <div className="w-full h-screen items-center justify-center">
        <p className='px-10 py-10 text-lg font-bold '>Nexicon Connections Recognition</p>
    <div className="flex justify-between ">

        <div className="flex">.</div>
        <div className="flex-1 px-10">
            <div className="flex justify-between max-w-2xl p-2 border-b items-end
            hover:border-b-4 transition-all duration-300 
            border-gray-900">
                <p className='text-lg'>Recognized at Islamiah College.</p>
                <p className='text-xs text-gray-500'>Impact Awards</p>
            </div>
       
            <div className="flex justify-between max-w-5xl   p-2 border-b items-end
            hover:border-b-4 transition-all duration-300 
            border-gray-900">
                <p className='text-lg'>Our agency has been appreciated for providing top-quality IT and
                digital services</p>
                <p className='text-xs text-gray-500'>Impact Awards</p>
            </div>
       
            
           
           
           
           
           
        </div>

        </div>
    </div>
  )
}

export default Recognition