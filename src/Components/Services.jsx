import React from 'react'
import logo from '../assets/logo.svg'
const Services = () => {
  return (
   <div className="w-full  max-h-max bg-white relative lg:pt-36 pt-20">
    <div className="lg:px-20 px-2">
        <h3 className='font-semibold text-orange-500 text-2xl px-2 uppercase'>About Us</h3>
        <p className='lg:text-5xl py-2 lg:w-[60%] lg:leading-none font-black text-3xl lg:block hidden w-screen'>
        Innovate. Design. Elevate. <br /> Your Digital Success Starts Here!</p>
    </div>
    <div className="lg:flex w-full mt-5 mb-5 lg:px-20 px-3 items-center justify-stretch  ">
        <div className="lg:w-[100%] justify-between py-1 text-[13px] lg:text-[17px] font-medium text-zinc-600 lg:text-zinc-800 text-justify lg:normal-case tracking-tight uppercase">
            <p className='py-3'> Nexion Connects is a creative design agency founded in 2024 and based in Ambur, Tamil Nadu. We
 are a team of passionate students skilled in design, development, and marketing. Our goal is to help
 businesses grow with innovative and high-quality digital solutions.</p>

            <p className='py-3 tracking-tighter text-justify w-full'>
            Nexion Connects was founded by Muhammad Aafaque, a student with a deep interest in startups
 and digital solutions. While still in college, he worked with multiple companies, gaining hands-on
 experience in design, web development, and branding. With this knowledge, he started Nexion
 Connects to offer professional services to businesses of all sizes.
            </p>
            <p className='lg:block hidden'>He saw the difficulties that startups and small businesses faced in branding, web presence, and
 marketing. 
This motivated him to build a team that could offer practical and effective solutions.</p>
        </div>
        <div className="h-full w-full lg:flex justify-center mt-10 hidden">
            <img src={logo} alt="logo" className='w-[200px]'/>
        </div>
    </div>

    <div className="lg:p-20 p-2 lg:flex w-full">
    <div className="lg:w-[500px] w-full flex justify-evenly items-center border-l-2 ">
            <h1 className='lg:text-5xl font-bold lg:px-5  text-5xl text-orange-600 tracking-tighter'>10</h1>
            <p className='text-[12px] lg:text-base font-thin lg:leading-1 py-3 pl-3 lg:normal-case uppercase tracking-tight text-gray-600 lg:text-zinc-900 leading-0'>successful agency projects - Brand Identity, Website Design, Product Packaging</p>
        </div>
        <div className="lg:w-[500px] w-full  flex justify-between  items-center border-l-2 lg:mt-0 mt-8">
        <h1 className='font-bold text-5xl lg:px-5 px-2 text-orange-600'>5*</h1>
        <p className='text-[12px] w-full font-thin lg:text-base py-3 lg:leading-1 lg:normal-case uppercase text-gray-600 lg:text-gray-800 tracking-tight'>In just five months, we have successfully delivered over 10 projects</p>

        </div>
    </div>
    <div className="lg:px-20 px-2 lg:py-5 py-10">
        <p className='py-2 text-xl lg:text-lg font-medium px-2 lg:font-bold uppercase'> Recognition</p>
    <div className="">
        <div className="">
            <div className="lg:max-w-2xl p-2 border-b items-end
            hover:border-b-4 transition-all duration-300 
            border-orange-500 my-5">
                <p className=' uppercase'>Recognized at Islamiah College.</p>
            </div>
       
            <div className="lg:max-w-5xl p-2 border-b items-end w-full
            hover:border-b-4 transition-all duration-300 
            border-orange-500">
                <p className='text uppercase leading-1 text-left'>Our agency has been appreciated for providing top-quality IT and
                digital services</p>
            </div>
           
           
        </div>

        </div>
    </div>
    <div className="w-full h-full relative bg-black text-white lg:p-32 px-6 py-20  uppercase  text-sm">
        <p className='py-3 font-thin text-orange-600 lg:block lg:text-lg lg:font-bold hidden'>Building a Strong Brand Identity</p>
        <p className='lg:text-4xl  w-full max-w-full py-4 text-sm lg:font-black '> A brand is not just a logo , <br /> it's how people recognize and connect with a business.</p>
        <div className="">
            <p className='py-2 font-thin '>At Nexion Connects, we focus on:</p>
            <div className="lg:flex w-full justify-stretch py-2">
                <div className="border-l-2 border-orange-600 lg:px-3 px-2 w-[350px] lg:mb-3 lg:mt-0 mb-9 mt-5">
                    <p className=''><b className=''>Visual Identity:</b> Designing logos, choosing colors, and maintaining consistency in branding</p>
                </div>
                <div className="border-l-2 border-orange-600 lg:px-3 w-[350px] px-2 lg:mb-3 lg:mt-0 mb-9 mt-5">
                    <p className=''><b className=''> Brand Messaging: </b>Writing content that clearly represents what a business stands for</p>
                </div> <div className="border-l-2 border-orange-600 lg:px-3 px-2 w-[350px] lg:mb-3 lg:mt-0  ">
                    <p className=''><b className=''>Market Strategy:</b> Positioning brands in a way that makes them stand out from competitors.</p>
                </div>
            </div>
        </div>
    </div>
    
   </div>
  )
}

export default Services