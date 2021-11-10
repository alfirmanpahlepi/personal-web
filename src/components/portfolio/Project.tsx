import Image from "next/image";
import { ArrowIcon, CodeIcon } from "../icons";

interface ProjectProps {
  portfolio: {
    img: string;
    title: string;
    demo?: string;
    sourceCode?: string;
    id: number;
  };
}

export default function Project({ portfolio }: ProjectProps) {
  return (
    <div className="h-full w-full relative group block">
      <Image
        className="group-hover:opacity-30 duration-200"
        objectFit="cover"
        layout="fill"
        alt={portfolio.img}
        src={`/portfolio/${portfolio.img}`}
      />
      <div className="p-3 absolute h-full w-full top-0 left-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 duration-500">
        <div className="text-center">
          <h4 className="sm:text-xl font-medium">{portfolio.title}</h4>
        </div>
        <div className="flex items-center justify-between">
          {portfolio.demo && (
            <a
              href={portfolio.demo}
              target="_blank"
              rel="noreferrer"
              className="font-bold block xs:flex items-center xs:space-x-2 px-2 xs:px-0"
            >
              <i className="h-10 w-10 inline-block xs:h-6 xs:w-6">
                <ArrowIcon />
              </i>
              <span className="text-xs sm:text-base hidden xs:inline-block">
                Visit project
              </span>
            </a>
          )}
          {portfolio.sourceCode && (
            <a
              href={portfolio.sourceCode}
              target="_blank"
              rel="noreferrer"
              className="font-bold block xs:flex items-center xs:space-x-2 px-2 xs:px-0"
            >
              <i className="h-8 w-8 inline-block xs:h-5 xs:w-5">
                <CodeIcon />
              </i>
              <span className="text-xs sm:text-base hidden xs:inline-block">
                Source code
              </span>
            </a>
          )}
        </div>
      </div>
      <a
        href={portfolio.demo}
        target="_blank"
        rel="noreferrer"
        className="absolute top-0 left-0 h-3/4 w-full text-indigo-600 underline z-20 opacity-0"
      >
        {portfolio.img}
      </a>
    </div>
  );
}
