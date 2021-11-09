import { Hobbies } from "@/types/profile";
import Title from "../Title";
import Icon from "../icons";

interface HobbyProps {
  data: { desc: string; hobbies: Hobbies };
}

export default function Hobby({ data }: HobbyProps) {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Title>
        my <b className="font-semibold">hobbies</b>
      </Title>
      <p className="text-center text-purple-900 px-10">{data.desc}</p>
      <ul className="grid grid-cols-4 mt-8">
        {data.hobbies.map((el, index) => (
          <li
            key={index}
            className="flex flex-col justify-center items-center space-y-3 py-4"
          >
            <i className="text-xl text-purple-900 h-5 w-5 sm:h-6 sm:w-6">
              <Icon name={el.icon} />
            </i>
            <p className="text-center text-purple-900">{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
