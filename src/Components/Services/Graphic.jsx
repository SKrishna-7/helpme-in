import React from 'react'
import { useState } from 'react';
const GraphicServices = () => {
  const services = ["Print Graphics", "Event Branding", "Deck Designs", "Digital Brand","Social Media Design"];
        const [selectedServices, setSelectedServices] = useState([]);
        const toggleService = (service) => {
          setSelectedServices((prev) =>
            prev.includes(service)
              ? prev.filter((s) => s !== service) // Deselect
              : [...prev, service] // Select
          );
        };
      return (
        <div className="w-full overflow-hidden relative h-screen lg:max-h-full max-h-max lg:rounded-2xl lg:p-10 text-black bg-white pb-5">
<div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 mt-5">

  {
      services.map((service)=>(
          <div
        key={service}
        className="py-2 lg:m-2  text-sm lg:font-bold font-semibold rounded-3xl  cursor-pointer text-center min-w-max w-full bg-orange-500 text-white"
      
      >
        {service}
      </div>
      ))}
          </div>
  
          <div className="lg:p-5 mt-5 lg:w-5/6 px-2 mb-3 ">
              <p className="text-base font-semibold text-zinc-800"> 
              Strong visuals help businesses stand out. We craft eye-catching designs, including logos, banners,
 posters, and brand identity elements, that reflect your brand's personality. Our designs are tailored
 to leave a lasting impression and enhance your brand recognition
              </p>
          
          </div>
          <a href="#" className="mt-9 px-5 text-xl font-bold text-orange-500 ">Learn More</a>
  
        </div>
      )
    };
  
  

export default GraphicServices