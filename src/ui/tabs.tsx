"use client";;
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
  <>
  
    <div
      className={cn(
        " [perspective:1000px]  overflow-auto sm:overflow-visible no-visible-scrollbar  w-full max-w-max justify-evenly lg:h-full text-black ",
        containerClassName
      )}>
      <div className="lg:h-[80%] flex flex-col max-w-max
      justify-evenly h-max  ">
      {propTabs.map((tab, idx) => (
        <button
          key={tab.title}
          onClick={() => {
            moveSelectedTabToTop(idx);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={cn("lg:relative  py-5  ", tabClassName)}
          style={{
            transformStyle: "preserve-3d",
          }}>
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={cn(
                "absolute inset-0 text-black   ",
                activeTabClassName
              )} />
          )}

          <span className={`relative
          block lg:normal-case uppercase
          ${active.value == tab.value ? "text-black" :'text-zinc-400'}
             hover:text-orange-500
          text-left  lg:font-extrabold pl-2 lg:pl-20 lg:text-5xl
           `}>
            {tab.title}
          </span>
        </button>
      ))}
      </div>
    </div>

    <FadeInDiv
      tabs={tabs}
      active={active}
      key={active.value}
      hovering={hovering}
      className={cn("mt-3", contentClassName)} />
  </>);
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    (<div className="relative w-full " >
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full absolute top-1 left-0", className)}>
          {tab.content}
        </motion.div>
      ))}
    </div>)
  );
};
