import { NavLink } from "./NavLink";
import { CoperIcon, DocumentIcon, HomeIcon, PhoneIcon, UserIcon } from "./icons";

type Navs = Array<{ name: string; link: string; icon: JSX.Element }>;

export default function Navigations() {
  return (
    <ul className="flex h-full">
      {navs.map((nav, i) => (
        <li key={i} className="flex-1">
          <NavLink
            link={nav.link}
            className="h-full grid place-items-center uppercase text-sm duration-200"
            activeClassname="bg-white text-pink-700 font-bold"
            deactiveClassname="bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium"
          >
            <span className="hidden xs:inline">{nav.name}</span>
            <i className="xs:hidden h-4 w-4">{nav.icon}</i>
          </NavLink>
        </li>
      ))}
    </ul >
  );
}

const navs: Navs = [
  { name: "home", link: "/", icon: <HomeIcon /> },
  { name: "profile", link: "/profile", icon: <UserIcon /> },
  { name: "resume", link: "/resume", icon: <DocumentIcon /> },
  { name: "portfolio", link: "/portfolio", icon: <CoperIcon /> },
  { name: "contact", link: "/contact", icon: <PhoneIcon /> },
]