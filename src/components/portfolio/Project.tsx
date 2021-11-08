import { Portfolio } from "@/types";
import { ArrowIcon, CodeIcon } from "../icons";

interface ProjectProps {
  portfolio: Portfolio;
}

export default function Project({ portfolio }: ProjectProps) {
  return (
    <div className="h-full w-full border-2 border-dashed md:flex p-4">
      <div className="h-[300px] md:h-full bg-pink-600 w-full mb-3 md:m-0">
        {portfolio.img}
      </div>
      <div className="h-full px-5 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            <a href="#" className="hover:underline">
              {portfolio.title}
            </a>
          </h1>
          <p className="text-gray-600">{portfolio.date}</p>
          <p className="my-2">{portfolio.desc}</p>
          <ul className="uppercase space-x-2">
            {portfolio.tech.map((el, i) => (
              <li
                key={i}
                className={`${colorTech(
                  el
                )} font-medium text-sm px-1 rounded-sm inline`}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-x-5 flex items-center mt-5 md:mt-0">
          <button className="font-bold flex items-center space-x-2">
            <i className="h-6 w-6">
              <ArrowIcon />
            </i>
            <span>Visit project</span>
          </button>
          <button className="font-bold flex items-center space-x-2">
            <i className="h-5 w-5">
              <CodeIcon />
            </i>
            <span>Source code</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const colorTech = (tech: string): string => {
  switch (tech) {
    case "react":
      return "bg-blue-400";
    case "next":
      return "bg-gray-400";
    case "tailwind":
      return "bg-green-400";
    case "bootstrap":
      return "bg-purple-400";
    default:
      return "bg-gray-400";
  }
};
