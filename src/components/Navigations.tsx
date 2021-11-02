import { Navs } from "@/types";
import { useState } from "react";

export default function Navigations() {
  const [activeNav, setActiveNav] = useState<string>("home")
  return (
    <ul className="flex h-full">
      {
        navs.map((nav, i) => (
          <li key={i} className="flex-1">
            <a href="#"
              onClick={() => setActiveNav(nav.name)}
              className={`${activeNav !== nav.name
                ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
                : "bg-white text-[#E1306C] font-semibold"} 
               h-full grid place-items-center uppercase text-sm duration-200`}>
              {nav.name}
            </a>
          </li>
        ))
      }

    </ul>
  );
}

const navs: Navs = [
  { name: "home" },
  { name: "profile" },
  { name: "resume" },
  { name: "portfolio" },
  { name: "contact" },
]