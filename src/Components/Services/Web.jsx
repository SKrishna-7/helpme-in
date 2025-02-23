import { useState } from "react";

const WebSevices = () => {
    const services = ["Landing", "Brochure Site", "UX/UI Design", "E-Commerce","Corporate Website","Web 3.0",];
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
        // ${
        //     selectedServices.includes(service)
        //     ? "bg-orange-500 text-white" 
        //     : "bg-zinc-200 text-gray-800 hover:bg-gray-100"
        // }`}
        // onClick={() => toggleService(service)}
    
    >
      {service}
    </div>
    ))}
        </div>

        <div className="lg:p-5 mt-5 lg:w-5/6 px-2 mb-3 ">
            <p className="text-base font-semibold text-zinc-800 text-justify"> We design and develop modern, responsive, and user-friendly websites that help businesses
 establish a strong online presence. Our websites are built to be fast, secure, and optimized for all
 devices, ensuring a seamless experience for visitors. Whether you need a portfolio, e-commerce
 store, or business website, we provide tailored solutions to meet your needs</p>
        
        </div>
        <a href="#" className="mt-9  px-5 text-xl font-bold text-orange-500 ">Learn More</a>

      </div>
    )
  };


  export default WebSevices