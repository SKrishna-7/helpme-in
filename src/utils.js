import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
  {
    name: "Work",
    subMenuHeading: ["Development", "Design"],
    link:'#work',
    subMenu: [
      {
        name: "Web Development",
        desc: "Creating modern sites",
        icon: PanelsTopLeft,
        link:'#work',

      },
      {
        name: "UI/UX Design",
        desc: "visually appealing interface",
        icon: Bolt,
        
        link:'#work',

      },
      {
        name: "SEO",
        desc: "SEO & Digital Growth",
        icon: PanelTop,
    link:'#work',

      },
      {
        name: "Graphic Design",
        desc: "materials that represent businesses",
        icon: Database,
    link:'#work',

      },
    ],
    gridCols: 2,
  },
  {
    name: "About Us",
    // subMenuHeading: ["Get started", "Programs", "Recent"],
    // subMenu: [
    //   {
    //     name: "Markplace",
    //     desc: "Browse templates",
    //     icon: ShoppingBag,
    //   },
    //   {
    //     name: "Meetups",
    //     desc: "Upcoming events",
    //     icon: MapPin,
    //   },
    //   {
    //     name: "Updates",
    //     desc: "Changelog",
    //     icon: BellDot,
    //   },
    //   {
    //     name: "Academy",
    //     desc: "Watch lessions",
    //     icon: Play,
    //   },
    //   {
    //     name: "Blog",
    //     desc: "Posts",
    //     icon: BookOpenText,
    //   },
    //   {
    //     name: "Figma",
    //     desc: "Plugin",
    //     icon: Figma,
    //   },
    //   {
    //     name: "Experts",
    //     desc: "Jobs",
    //     icon: BriefcaseBusiness,
    //   },
    //   {
    //     name: "Gallery",
    //     desc: "Images",
    //     icon: Images,
    //   },
    // ],
    // gridCols: 3,
    link:'#aboutus'
  },
  {
    name: "Services",
    link:'#contact',

    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
        link:'#contact'
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
        link:'#contact'

      },
      // {
      //   name: "Emergency",
      //   desc: "Urgent issues",
      //   icon: TriangleAlert,
      // },
    ],
    gridCols: 1,
  },
  {
    name: "Industry",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
      },
    ],
    gridCols: 2,
    link:'#contact'
  },
  // {
  //   name: "Pricing",
  // },
  // {
  //   name: "Contact",
  // },
];