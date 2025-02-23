import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// Sample card data
const cards = [
  { id: 1, title: "Symphony Sleep", description: "Branding/Packing/Graphic Design/Branding/Packing/Graphic Design", img: "https://picsum.photos/500/300?random=1" },
  { id: 2, title: "Symphony Sleep", description: "Branding/Packing/Graphic Design/Branding/Packing/Graphic Design", img: "https://picsum.photos/500/300?random=2" },
  { id: 3, title: "Symphony Sleep", description: "Branding/Packing/Graphic Design/Branding/Packing/Graphic Design", img: "https://picsum.photos/500/300?random=3" },
  { id: 4, title: "Symphony Sleep", description: "Branding/Packing/Graphic Design/Branding/Packing/Graphic Design", img: "https://picsum.photos/500/300?random=4" },
  { id: 5, title: "Card 5", description: "This is card 5", img: "https://picsum.photos/500/300?random=5" },
  { id: 6, title: "Card 6", description: "This is card 6", img: "https://picsum.photos/500/300?random=6" },
  { id: 7, title: "Card 7", description: "This is card 7", img: "https://picsum.photos/500/300?random=7" },
  { id: 8, title: "Card 8", description: "This is card 8", img: "https://picsum.photos/500/300?random=8" },
];

const CARDS_PER_VIEW = 3;

const CardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Go to previous slide
  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? cards.length - CARDS_PER_VIEW : prev - 1));
  };

  // Go to next slide
  const nextSlide = () => {
    setStartIndex((prev) => (prev >= cards.length - CARDS_PER_VIEW ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full  py-5">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-[30%] transform  z-10 bg-white shadow-md p-3 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: `-${startIndex * (100 / CARDS_PER_VIEW)}%` }}
          transition={{ duration: 0.5 }}
          style={{ width: `${(cards.length / CARDS_PER_VIEW) * 100}%` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="w-1/3 min-w-[500px]  object-contain   overflow-hidden">
              <img src={card.img} alt={card.title} className="w-full h-[350px] object-contain" />
              <div className="p-2">
                <p className="py-2 font-bold  w-[40px] h-[40px] bg-black text-center text-white  rounded-full ">{card.id}</p>
                <h2 className="text-base font-bold pt-3">{card.title}</h2>
                <p className="text-gray-900 text-medium font-medium">{card.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-[30%] transform  z-10 bg-white shadow-md p-3 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      <p className="text-2xl font-bold text-orange-500 p-20"><Link>View all Projects </Link></p>
    </div>
  );
};

export default CardCarousel;
