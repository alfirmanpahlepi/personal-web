import { Educations } from "@/types/profile";
import { GraduationIcon } from "../icons";
import Title from "../Title";

interface EducationProps {
  data: Educations;
}

export default function Education({ data }: EducationProps) {
  return (
    <div className="overflow-x-hidden px-10">
      <Title>
        my <b className="font-semibold">Education</b>
      </Title>
      <ul className="border-l-2 border-pink-400/40 relative left-6 sm:left-40 space-y-8 pb-10">
        <li
          style={{
            background: "linear-gradient(45deg,#c13584,#e1306c,#fd1d1d)",
          }}
          className="w-14 h-14 sm:w-20 sm:h-20 rounded-full relative flex justify-center items-center left-[-30px] sm:left-auto sm:right-[43px] -top-5"
        >
          <i className="text-white h-7 w-7 sm:h-10 sm:w-10">
            <GraduationIcon />
          </i>
        </li>
        {data.map((el, index) => (
          <li
            key={index}
            className="flex space-x-4 relative -left-6 sm:left-auto sm:right-[137px]"
          >
            <div className="hidden sm:block">
              <h3 className="w-28 bg-pink-600 ring ring-pink-200 text-center py-1 text-white rounded-2xl text-sm sm:text-base">
                {el.years}
              </h3>
            </div>
            <div>
              <div className="h-4 w-4 rounded-full bg-pink-600 ring ring-pink-200 relative top-2"></div>
            </div>
            <div className="w-full space-y-2 sm:space-y-0">
              <h3 className="w-28 bg-pink-600 ring ring-pink-200 text-center py-1 text-white rounded-2xl text-sm sm:text-base sm:hidden">
                {el.years}
              </h3>
              <p className="sm:text-lg text-purple-900 font-semibold">
                {el.school}
              </p>
              <p className="text-purple-600 text-xs sm:text-sm">{el.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
