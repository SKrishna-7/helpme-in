"use client";
 
import { Tabs } from "../ui/tabs";
import { useState } from "react";
import WebSevices from "./Services/web";
import UiServices from "./Services/ui";
import SEOServices from "./Services/seo";
import GraphicServices from "./Services/Graphic";
import MarketingServices from "./Services/Marketing";
import { motion } from 'framer-motion'
import {fadeIn} from '../ui/Varient'

export default function Aboutus() {
    const tabs = [
      {
        title: " Web Development",
        value: "webdesign",
        content: (          
            <WebSevices/>
        ),
      },
      {
        title: "UI/UX Design",
        value: "uidesign",
        content: (
            <UiServices />

        ),
      },
      {
        title: "Graphic Design",
        value: "graphicdesign",
        content: (
            <GraphicServices />

        ),
      },
      {
        title: "Social Media Marketing",
        value: "social",
        content: (
            <MarketingServices />

        ),
      },
      {
        title: "Search Engine Optimization",
        value: "seo",
        content: (
            <SEOServices/>

        ),
      },
    ];
   
    return (
        <div className="h-screen w-full lg:px-10  bg-white px-3 max-h-full  lg:overflow-hidden">
            <h1 className="text-2xl pb-6 text-left pt-20 text-orange-600">Our Services</h1>
      <div className=" h-full [perspective:1000px]  mt-1 flex ">
        <motion.div 
        variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{
            once:false,amount:0.7
        }}
        className="w-full lg:flex ">
                <Tabs tabs={tabs} />
        </motion.div>
        </div>
      </div>
    );
  }
   
  const DummyContent=()=>{
    return(
        <div className="">text</div>
    )
  }