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
        <div className="w-full overflow-hidden relative h-screen lg:max-h-full max-h-max lg:rounded-2xl lg:p-10 text-black bg-white pb-5">

<div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 mt-5">

  {
      services.map((service)=>(
          <div
        key={service}
        className="py-2 lg:m-2  text-sm lg:font-bold font-semibold rounded-3xl  cursor-pointer text-center min-w-max lg:w-full w-max px-5 bg-orange-500 text-white
         "
      >
        {service}
      </div>
      ))}
          </div>
  
          <div className="lg:p-5 mt-5 lg:w-5/6 px-2 mb-3 ">
              <p className="text-base font-semibold text-zinc-800"> 
              A website is only useful if people can find it. We optimize websites for search engines to improve
 rankings and attract more visitors. Our SEO services include keyword research, on-page
 optimization, technical SEO, and link building to help businesses increase organic traffic and
 visibility
              </p>
          
          </div>
          <a href="#" className="mt-9 px-5 text-xl font-bold text-orange-500 ">Learn More</a>
  
        </div>
      )
    };
  
  

export default SEOServices