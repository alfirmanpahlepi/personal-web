// import { Services } from "@/types";
// import { DiamondIcon, DollarIcon, LightBulbIcon, CodeIcon } from "../icons";
import Title from "../Title";
import data from "@/data/service.json";
import Icon from "../icons";

export default function Service() {
  return (
    <div>
      <Title>
        my <b className="font-semibold">services</b>
      </Title>
      <p className="text-center text-purple-900 px-8">{data.desc}</p>
      <ul className="grid xs:grid-cols-2 gap-y-10 my-8">
        {data.services.map((el, index) => (
          <li key={index} className="px-8">
            <div
              className="h-24 w-24 rounded-full flex items-center justify-center mx-auto"
              style={{
                background: "linear-gradient(45deg,#c13584,#e1306c,#fd1d1d)",
              }}
            >
              <i className="text-white text-2xl h-10 w-10">
                <Icon name={el.icon} />
              </i>
            </div>
            <div className="text-center pb-3 my-5">
              <span className="pb-3 border-b-2 border-pink-500 font-bold text-purple-900">
                {el.text}
              </span>
            </div>
            <p className="text-center text-sm text-purple-900">{el.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
