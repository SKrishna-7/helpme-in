import React, { useState } from "react";
import { motion } from "framer-motion";
import heart from '../assets/heart.svg'

const GetInTouch = () => {
  const [focused, setFocused] = useState(null);
  const services = ["Branding", "Web Design", "UX/UI", "Development","Video Production","Brand Assets","Deck","Other"];
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service) // Deselect
        : [...prev, service] // Select
    );
  };
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center lg:pt-24 ">
      <h2 className="text-center lg:text-5xl text-2xl font-bold">Get in Touch with <b className="text-orange-500">Nexion</b></h2>

      {/* Form Section */}
      <div className="w-full flex flex-col lg:flex-row py-20 lg:px-10 justify-center gap-12 ">
        {/* Contact Form */}
        <div className="lg:p-8 p-4 rounded-lg w-full lg:w-1/2">
          <form className="flex flex-col gap-6">
            {/* Input Fields */}
            {["Your Name", "Your Email", "Your Message"].map((placeholder, index) => (
              <div
                  key={placeholder}
              >
                <input
                  type={placeholder === "Your Email" ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full p-3 bg-transparent border-b focus:border-gray-900 transition-all duration-300 border-gray-300 outline-none
                  text-lg font-semibold"
                  onFocus={() => setFocused(index)}
                  onBlur={() => setFocused(null)}
                />
               
              </div>
            ))}

            
          </form>
        </div>

        <div className=" lg:p-8 p-4 w-full lg:w-1/2">
          <p className="text-xl font-semibold">I'm interested in...</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 mt-5">

  {services.map((service) => (
    <div
      key={service}
      className={`p-3 m-2 text-sm font-bold  rounded-2xl cursor-pointer text-center
        ${
            selectedServices.includes(service)
            ? "bg-orange-500 text-white" 
            : "bg-gray-100 text-gray-800 hover:bg-gray-100"
        }`}
        onClick={() => toggleService(service)}
    
    >
      {service}
    </div>
  ))}
</div>

{
        selectedServices.length>0 ?
        <div className="mt-8 lg:p-8 w-full">
        <input type="text"
        className="text-lg w-full border-b-2 p-2 outline-none focus:border-b-gray-950"
        placeholder="Tell us Your approximate Budget" />
       </div>

       :''
    
}
        </div>
      </div>
            <div className="relative">
                <button type="submit">
                    <img src={heart} alt="submit" 
                    className="w-40 relative" />
                </button>
                <p className="absolute top-[40%] left-[35%] cursor-pointer text-center text-white text-xl">Send</p>
            </div>
    </div>
  );
};

export default GetInTouch;
