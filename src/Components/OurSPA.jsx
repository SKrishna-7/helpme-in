import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import logo from '../assets/logo.svg'
import founder from '../assets/founder.png'
import goals from '../assets/goals.jpg'
import vison from '../assets/vision.png'
import conn from '../assets/letscon.jpeg'

const content = [
    {
      title: "Our Story",
      description:
        "Nexion Connects was founded by Muhammad Aafaque, a student with a deep interest in startups and digital solutions. While still in college, he worked with multiple companies, gaining hands-on experience in design, web development, and branding. With this knowledge, he started Nexion Connects to offer professional services to businesses of all sizes.",
      content: (
        <div className="h-full w-full flex  text-white">
         <img
            src={founder}
            className="w-full object-cover  "
            alt="founder"
          />
        </div>
      ),
    },

    {
      title: "Future Goals",
      description:
        "• Expand our services beyond Ambur and work with businesses across India.\n \
        \n\n• Introduce more services, including mobile app development and digital branding \n \
        •  Build long-term relationships with startups, entrepreneurs, and businesses",

      content: (
        <div className="h-full w-full flex  text-white">
         <img
            src={goals}
            className="w-full object-cover "
            alt="founder"
          />
        </div>
      ),
    },
    {
      title: "Our Vison",
      description:
      " Our vision is to become a trusted creative agency, known for our expertise and commitment to quality.",
      content: (
        <div className="h-full w-full flex  text-white">
         <img
            src={vison}
            className="w-full object-cover "
            alt="founder"
          />
        </div>
      ),
    },
    {
      title: "Let's Connect",
      description:
        "We believe in delivering more than just services - we build relationships. Let's work together to bring your brand to the next level. Contact us today!",
      content: (
        <div className="h-full w-full flex  text-white">
         <img
            src={conn}
            className="w-full object-cover "
            alt="founder"
          />
        </div>
      ),
    },
  ];


const OurSPA = () => {
  return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default OurSPA