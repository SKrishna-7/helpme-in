import React from "react";
import { motion } from "framer-motion";

const MovingText = () => {
  return (
    <div className="w-full overflow-hidden h-[300px] py-4 bg-white justify-center items-center  flex relative">
      <motion.div
        className="text-gray-300 text-3xl font-semibold whitespace-nowrap flex"
        
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
       Why Choose Us -  Modern & Effective Solutions - User-Friendly Approach - All-in-One Services - Collaborative Work - - Proven Results  &nbsp;
      </motion.div>
    </div>
  );
};

export default MovingText;
