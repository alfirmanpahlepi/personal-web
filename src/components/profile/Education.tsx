import { Educations } from "@/types";
import { GraduationIcon } from "../icons";
import Title from "../Title";

export default function Education() {
  return (
    <div className="overflow-x-hidden">
      <Title>
        my <b className="font-semibold">Education</b>
      </Title>

      <ul className="border-l-2 border-pink-400 relative left-36 xs:left-40 sm:left-48 space-y-8">
        <div
          style={{
            right: "43px",
            background: "linear-gradient(45deg,#c13584,#e1306c,#fd1d1d)",
          }}
          className="w-20 h-20 rounded-full relative mb-10 flex justify-center items-center"
        >
          <i className="text-white h-10 w-10">
            <GraduationIcon />
          </i>
        </div>
        {educations.map((el, index) => (
          <li
            key={index}
            style={{ right: "137px" }}
            className="flex space-x-4 relative"
          >
            <div>
              <h3 className="w-28 bg-pink-600 ring ring-pink-200 text-center py-1 text-white rounded-2xl text-sm sm:text-base">
                {el.years}
              </h3>
            </div>
            <div>
              <div className="h-4 w-4 rounded-full bg-pink-600 ring ring-pink-200 relative top-2"></div>
            </div>
            <div className="flex-grow pr-16">
              <h5 className="sm:text-lg text-purple-900 font-semibold">
                {el.school}
              </h5>
              <p className="text-gray-400 text-sm sm:text-base">{el.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const educations: Educations = [
  {
    years: "2014 - 2017",
    school: "Senior High School / SMA N 2 Kejuruan Muda",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    years: "2011 - 2014",
    school: "Junior High School / SMP N 1 Kualasimpang",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    years: "2005 - 2011",
    school: "Elementary School / SD N 1 Sriwijaya",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];
