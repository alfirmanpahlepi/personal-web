import { GetStaticProps, NextPage } from "next";
import { motion } from "framer-motion";
import { Resume as ResumeType } from "@/types/resume";
import Head from "@/components/Head";
import Skill from "@/components/resume/Skill";
import Service from "@/components/resume/Service";

interface ResumeProps {
  data: ResumeType;
}

const Resume: NextPage<ResumeProps> = ({ data }) => {
  return (
    <>
      <Head title="Resume" description="The things that can i do for you." />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pb-5"
      >
        <Service data={data.service} />
        <Skill
          favourites={data.skill.favourites}
          familiars={data.skill.familiars}
        />
      </motion.section>
    </>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://alfirman-pahlepi.vercel.app/api/resume", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: ResumeType = await res.json();
  return {
    props: { data },
  };
};
