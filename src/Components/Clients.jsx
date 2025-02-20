import React from "react";

const clients = [
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
  "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
 "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
 "https://dd.nyc/wp-content/uploads/2024/10/Loreal_.svg",
 
];

const ClientLogos = () => {
  return (
    <div className="w-full py-10 px-10 md:px-16 flex flex-col">
      <p className="text-sm md:text-4xl font-medium mb-8 pl-10  ">DD.NYC Clients</p>
      
      <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-y-20 gap-x-6 w-full max-w-screen-lg">
        {clients.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo} alt={`Client ${index + 1}`} className="w-44 h-34 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
