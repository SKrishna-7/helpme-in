import React from "react";
import { motion } from "framer-motion";

const MovingText = () => {
  return (
    <div className="w-full overflow-hidden h-[300px] py-4 bg-white justify-center items-center  flex relative">
      <motion.div
        className="text-gray-300 text-3xl font-semibold whitespace-nowrap flex uppercase"
        
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
      Brand Indentity - Graphic Design - Web Development - SEO - Digital Marketing - Artificial Intelligence &nbsp;
      </motion.div>
    </div>
  );
};

export default MovingText;
