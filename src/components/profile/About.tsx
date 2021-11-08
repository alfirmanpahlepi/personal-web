// import { AboutData } from "@/types";
import Title from "../Title";
// import { GetStaticProps } from "next";
import data from "@/data/about.json"
import Icon from "../icons";

// interface AboutProps {
//   data: AboutData;
// }

export default function About() {
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

// export const getStaticProps: GetStaticProps = async () => {
//   // const res = await fetch("http://localhost:3000/api/about");
//   // const data: AboutData = await res.json();
//   return {
//     props: { data },
//   };
// };
