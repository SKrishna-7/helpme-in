"use client";
 
import { Tabs } from "../ui/tabs";
import { useState } from "react";
import WebSevices from "./Services/web";
import UiServices from "./Services/ui";
import SEOServices from "./Services/seo";
import GraphicServices from "./Services/Graphic";
import MarketingServices from "./Services/Marketing";


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
            <h1 className="text-2xl font-bold text-left pt-20 text-orange-500">Our Services</h1>
      <div className=" h-full [perspective:1000px]  mt-1 flex ">
        <div className="w-full lg:flex ">
                <Tabs tabs={tabs} />
        </div>
        </div>
      </div>
    );
  }
   
  const DummyContent=()=>{
    return(
        <div className="">text</div>
    )
  }