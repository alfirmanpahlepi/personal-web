import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { Portfolio as PortfolioType } from "@/types/portfolio";
import Project from "@/components/portfolio/Project";
import Title from "@/components/Title";
import Head from "@/components/Head";

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
          {data
            .sort((a, b) => b.id - a.id)
            .map((el) => (
              <li key={el.id} className="h-[130px] sm:h-[200px]">
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
  const res = await fetch("https://alfirman-pahlepi.vercel.app/api/portfolio", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: PortfolioType = await res.json();
  return {
    props: { data },
  };
};
