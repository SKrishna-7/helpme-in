import React from "react";
import { motion } from "framer-motion";

const MovingText = () => {
  return (
    <div className="w-full overflow-hidden h-[300px] py-4 bg-white justify-center items-center  flex">
      <motion.div
        className="text-gray-300 text-3xl font-semibold whitespace-nowrap flex"
        
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
       Top System - Figma, Adobe, Sketch M/WBE-Certified 5-Star Clutch Top 40 Design Agen &nbsp;
      </motion.div>
    </div>
  );
};

export default MovingText;
