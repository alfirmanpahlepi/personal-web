import Image from "next/image";
import { ArrowIcon, CodeIcon } from "../icons";

interface ProjectProps {
  portfolio: any;
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
  );
}