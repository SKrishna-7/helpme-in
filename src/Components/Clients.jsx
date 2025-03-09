"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Irbaz from '../assets/Team/irbazahmed.jpg'
import Mustajab from '../assets/Team/mustazub.jpg'
import Azmat from '../assets/Team/azmatrizvi.jpg'
import shahina from '../assets/Team/shahina.jpg'
import zabi from '../assets/Team/zabi.png'

const people = [
  {
    id: 1,
    name: "Irbaz Ahmed",
    designation: "Tech Support Lead",
    image:
      Irbaz,
  },
  {
    id: 2,
    name: "Mustajab",
    designation: "Design Head",
    image:
     Mustajab
  },
  {
    id: 3,
    name: "Azmat Rizvi",
    designation: "Marketing Head",
    image:
      Azmat
  },
  {
    id: 4,
    name: "Shahina",
    designation: "SEO",
    image:
      shahina
  },
  
  {
    id: 5,
    name: "Zabiullah",
    designation: "Internship Supervisor",
    image:
      zabi
  },
  
  
];

export default function Client() {
  return (
    (<div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
