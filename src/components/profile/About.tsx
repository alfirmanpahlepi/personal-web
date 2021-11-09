import Title from "../Title";
import Icon from "../icons";
import { Abouts } from "@/types/profile";

interface AboutProps {
  data: Abouts;
}

export default function About({ data }: AboutProps) {
  return (
    <div className="w-11/12 sm:w-2/3 mx-auto">
      <Title>
        About <b className="font-semibold">me</b>
      </Title>
      <ul className="my-8 space-y-1">
        {data.map((el, index) => (
          <li
            key={index}
            className="flex justify-between text-purple-900 text-sm xs:text-base"
          >
            <div className="flex items-center space-x-3">
              <i className="h-4 w-4">
                <Icon name={el.icon} />{" "}
              </i>
              <p className="font-bold">{el.name}</p>
            </div>
            <p>{el.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}