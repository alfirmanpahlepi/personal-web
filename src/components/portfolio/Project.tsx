import Image from "next/image";
import { ArrowIcon, CodeIcon } from "../icons";

interface ProjectProps {
  portfolio: {
    img: string;
    title: string;
    demo: string;
    sourceCode: string;
    id: number;
  };
}

export default function Project({ portfolio }: ProjectProps) {
  return (
    <a
      href={portfolio.demo}
      target="_blank"
      rel="noreferrer"
      className="h-full w-full relative group block"
    >
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
          <a
            href={portfolio.demo}
            target="_blank"
            rel="noreferrer"
            className="font-bold block xs:flex items-center xs:space-x-2"
          >
            <i className="h-4 w-4 sm:h-6 sm:w-6 hidden xs:inline-block">
              <ArrowIcon />
            </i>
            <span className="text-xs sm:text-base">Visit project</span>
          </a>
          <a
            href={portfolio.sourceCode}
            target="_blank"
            rel="noreferrer"
            className="font-bold block xs:flex items-center xs:space-x-2"
          >
            <i className="h-3 w-3 sm:h-5 sm:w-5 hidden xs:inline-block">
              <CodeIcon />
            </i>
            <span className="text-xs sm:text-base">Source code</span>
          </a>
        </div>
      </div>
    </a>
  );
}
