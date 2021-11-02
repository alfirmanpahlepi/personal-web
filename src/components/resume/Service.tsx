import { Services } from "@/types";
import { DiamondIcon, DollarIcon, LightBulbIcon, CodeIcon } from "../icons";
import Title from "../Title";

export default function Service() {
  return (
    <div className="mt-4">
      <Title>
        my <b className="font-semibold">services</b>
      </Title>
      <p className="text-center text-purple-900 px-8">
        I always give the best effort for each projects I did. I give a solution
        with my creative app.
      </p>
      <ul className="grid xs:grid-cols-2 gap-y-10 my-8">
        {services.map((el, index) => (
          <li key={index} className="px-8">
            <div
              className="h-24 w-24 rounded-full flex items-center justify-center mx-auto"
              style={{
                background: "linear-gradient(45deg,#c13584,#e1306c,#fd1d1d)",
              }}
            >
              <i className="text-white text-2xl h-10 w-10">
                {el.icon}
              </i>
            </div>
            <h6 className="text-center pb-3 my-5">
              <span className="pb-3 border-b-2 border-pink-500 font-bold text-purple-900">
                {el.text}
              </span>
            </h6>
            <p className="text-center text-sm text-purple-900">{el.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const services: Services = [
  {
    text: "Inovative Ideas",
    desc: "I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications.",
    icon: <LightBulbIcon />,
  },
  {
    text: "Clean Code",
    desc: "I always give a clean code to the consumer so the application is easy to understand and easy to develop.",
    icon: <CodeIcon />,
  },
  {
    text: "Low Price",
    desc: `Tell your great app to me. Adjust your budget. And "BOOM", your app ready to published.`,
    icon: <DollarIcon />,
  },
  {
    text: "Best Result",
    desc: "I will give you the best applications for your best ideas.",
    icon: <DiamondIcon />,
  },
];
