import React from 'react'
import { useState } from 'react';
const SEOServices = () => {
  const services = ["SEO"];
        const [selectedServices, setSelectedServices] = useState([]);
        const toggleService = (service) => {
          setSelectedServices((prev) =>
            prev.includes(service)
              ? prev.filter((s) => s !== service) // Deselect
              : [...prev, service] // Select
          );
        };
      return (
        <div className="w-full overflow-hidden relative h-screen lg:max-h-full max-h-max lg:rounded-2xl lg:p-10 text-black bg-white lg:pb-5 lg:normal-case pb-20 uppercase">

<div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 mt-5">

  {
      services.map((service)=>(
          <div
        key={service}
        className="py-2 lg:m-3 lg:block hidden text-sm lg:font-bold font-semibold rounded-3xl  cursor-pointer text-center min-w-max lg:w-max px-5 bg-orange-500 text-white"
      >
        {service}
      </div>
      ))}
          </div>
  
          <div className="lg:p-5 mt-5 lg:w-5/6 px-2 lg:m-3 mb-9 ">
            <p className="text-sm lg:text-base text-zinc-600 text-left lg:text-zinc-800 lg:font-semibold">
              A website is only useful if people can find it. We optimize websites for search engines to improve
 rankings and attract more visitors. Our SEO services include keyword research, on-page
 optimization, technical SEO, and link building to help businesses increase organic traffic and
 visibility
              </p>
          
          </div>
          <a href="#" className="  lg:px-5 px-2 lg:text-xl lg:font-bold lg:mt-9 font-[50] text-orange-600 ">Learn More</a>

</div>
      )
    };
  
  

export default SEOServices