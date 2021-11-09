import { Portfolio } from "@/types";
// import { ArrowIcon, CodeIcon } from "../icons";
import Image from "next/image";
import { ArrowIcon, CodeIcon } from "../icons";

interface ProjectProps {
  portfolio: Portfolio;
}

export default function Project({ portfolio }: ProjectProps) {
  return (
    <a href="#" className="h-full w-full relative group bg-black block">
      <Image
        className="group-hover:opacity-80 duration-200"
        objectFit="cover"
        layout="fill"
        alt="as"
        src="https://koran-online.vercel.app/_next/image?url=https%3A%2F%2Fmvpthemes.com%2Fzoxnews%2Fwp-content%2Fuploads%2F2017%2F07%2Fairplane.jpg&w=750&q=75"
      />
      <div className="p-3 absolute h-full w-full top-0 left-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 duration-500">
        <div className="text-center">
          <h4 className="sm:text-xl font-medium">{portfolio.title}</h4>
          <p className="text-gray-600 text-sm sm:text-base">{portfolio.date}</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="font-bold xs:flex items-center space-x-2">
            <i className="h-4 w-4 sm:h-6 sm:w-6 hidden xs:inline-block">
              <ArrowIcon />
            </i>
            <span className="text-xs sm:text-base">Visit project</span>
          </button>
          <button className="font-bold xs:flex items-center space-x-2">
            <i className="h-3 w-3 sm:h-5 sm:w-5 hidden xs:inline-block">
              <CodeIcon />
            </i>
            <span className="text-xs sm:text-base">Source code</span>
          </button>
        </div>
      </div>
    </a>
    // <div className="h-full w-full border-2 border-dashed md:flex p-4">
    //   <div className="h-[300px] md:h-full bg-pink-600 w-full mb-3 md:m-0">
    //     {portfolio.img}
    //   </div>
    //   <div className="h-full px-5 flex flex-col justify-between">
    //     <div>
    //       <h1 className="text-3xl font-bold">
    //         <a href="#" className="hover:underline">
    //           {portfolio.title}
    //         </a>
    //       </h1>
    //       <p className="text-gray-600">{portfolio.date}</p>
    //       <p className="my-2">{portfolio.desc}</p>
    //       <ul className="uppercase space-x-2">
    //         {portfolio.tech.map((el, i) => (
    //           <li
    //             key={i}
    //             className={`${colorTech(
    //               el
    //             )} font-medium text-sm px-1 rounded-sm inline`}
    //           >
    //             {el}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="space-x-5 flex items-center mt-5 md:mt-0">
    //       <button className="font-bold flex items-center space-x-2">
    //         <i className="h-6 w-6">
    //           <ArrowIcon />
    //         </i>
    //         <span>Visit project</span>
    //       </button>
    //       <button className="font-bold flex items-center space-x-2">
    //         <i className="h-5 w-5">
    //           <CodeIcon />
    //         </i>
    //         <span>Source code</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
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
