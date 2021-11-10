import { GetStaticProps } from "next";
import Head from "@/components/Head";
import Title from "@/components/Title";
import Project from "@/components/portfolio/Project";
import { Portfolio as PortfolioType } from "@/types/portfolio";
import data from "@/data/portfolio.json";
import { motion } from "framer-motion";

interface PortfolioProps {
  data: PortfolioType;
}

const Portfolio = ({ data }: PortfolioProps) => {
  return (
    <>
      <Head title="Portfolio" description="Some collection of my past works." />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-11/12 xs:w-5/6 mx-auto mb-10"
      >
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
      </motion.section>
    </>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://alfirman-pahlepi.vercel.app/api/portfolio");
  const data: PortfolioType = await res.json();
  return {
    props: { data },
  };
};
