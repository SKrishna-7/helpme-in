import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobMenu({ Menus,scroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative px-3" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu size={40}  />}
      </button>

      <motion.div
        className={`fixed left-0 right-0 top-16 overflow-y-auto h-full ${
          scroll? "bg-black text-white":"bg-gray-100 text-black"
        }backdrop-blur  p-6 pb-20`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu,link }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <a href={link}
                  className="flex-center-between p-4 hover:bg-white/25 rounded-md cursor-pointer relative "
                  onClick={() => {setClicked(isClicked ? null : i) ;hasSubMenu? none : setIsOpen(false)}}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </a>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon }) => (
                      <a href={link}
                        key={name}
                        className="p-2 flex-center hover:bg-orange-500 hover:text-white rounded-md gap-x-2 cursor-pointer"
                        onClick={()=>{
                          setIsOpen(false)
                        }}
                      >
                        <Icon size={17} />
                        {name}
                      </a>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}