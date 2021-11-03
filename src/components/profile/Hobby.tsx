import { Hobbies } from "@/types";
import Title from "../Title";
import { BallIcon, GamepadIcon, GuitarIcon, CameraIcon } from "../icons";

export default function Hobby() {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Title>
        my <b className="font-semibold">hobbies</b>
      </Title>
      <p className="text-center text-purple-900 px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex delectus esse quae itaque optio magni. Sapiente ea ipsum totam!</p>
      <ul className="grid grid-cols-4 mt-8">
        {hobbies.map((el, index) => (
          <li
            key={index}
            className="flex flex-col justify-center items-center space-y-3 py-4"
          >
            <i className="text-xl text-purple-900 h-7 w-7 sm:h-10 sm:w-10">
              {el.icon}
            </i>
            <p className="text-center text-purple-900">{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const hobbies: Hobbies = [
  { name: "Music", icon: <GuitarIcon /> },
  { name: "Game", icon: <GamepadIcon /> },
  { name: "Photography", icon: <CameraIcon /> },
  { name: "Sports", icon: <BallIcon /> },
];
