import { NextPage } from "next";
import Head from "@/components/Head";
import Title from "@/components/Title";
import Project from "@/components/portfolio/Project";
import data from "@/data/portfolio.json";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head title="Portfolio" description="Some collection of my past works." />
      <section className="w-11/12 xs:w-5/6 mx-auto mb-10">
        <Title>
          my <b className="font-semibold">Portfolio</b>
        </Title>
        <ul className="grid grid-cols-2 gap-1 xs:gap-3">
          {data.map((el, i) => (
            <li key={i} className="h-[130px] sm:h-[200px]">
              <Project portfolio={el} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
