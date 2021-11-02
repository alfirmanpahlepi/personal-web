import { Navs } from "@/types";
import { NavLink } from "./NavLink";

export default function Navigations() {
  return (
    <ul className="flex h-full">
      {navs.map((nav, i) => (
        <li key={i} className="flex-1">
          <NavLink
            link={nav.link}
            className="h-full grid place-items-center uppercase text-sm duration-200"
            activeClassname="bg-white text-[#E1306C] font-semibold"
            deactiveClassname="bg-gray-100 text-gray-500 hover:bg-gray-200"
          >
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul >
  );
}

const navs: Navs = [
  { name: "home", link: "/" },
  { name: "profile", link: "/profile" },
  { name: "resume", link: "/resume" },
  { name: "portfolio", link: "/portfolio" },
  { name: "contact", link: "/contact" },
]