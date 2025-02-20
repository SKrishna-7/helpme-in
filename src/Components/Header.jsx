import React ,{useState,useEffect }from 'react'
import DesktopMenu from './DesktopMenu'
import MobMenu from './MobMenu'
import { Menus } from "../utils";
import Logo from "../assets/logo.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
         <div>
      <header className={`h-20  text-[15px] fixed inset-0 w-full flex-center z-[999]
        ${scrolling? "bg-black text-white" : "bg-transparent"}`}>
        <nav className=" flex justify-between items-center w-full  mt-4 lg:px-12 px-1">
          <div className="flex justify-center z-[999] relative">
            <img src={Logo} alt="" className="h-12" />          
          </div>

          <div className="">
            <ul className="lg:flex  hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} scroll={scrolling} />
            ))}
          </ul>
            </div>
          
          <div className="flex lg:w-[200px] justify-around">
            <button
              aria-label="sign-in"
              className="font-medium text-[17px] px-3 text-gray-600 "
            >
              Careers
            </button>
            <button
              aria-label="sign-in"
              className="font-medium text-[16px] bg-orange-600
              px-5 py-2 rounded-3xl text-white lg:block hidden"

            >
              Contact
            </button>
            <div className="lg:hidden mt-1">
              <MobMenu Menus={Menus} scroll={scrolling} />
            </div>
          </div>
        </nav>
      </header>
    </div>
    </div>
  )
}

export default Header