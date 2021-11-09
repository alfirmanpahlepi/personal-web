import Head from "@/components/Head";
import Service from "@/components/resume/Service";
import Skill from "@/components/resume/Skill";
import { URL } from "@/constants";
import { Services, Resume as ResumeType } from "@/types/resume";
import { GetStaticProps } from "next";

interface ResumeProps {
  data: { service: { desc: string; services: Services } };
}

const Resume = ({ data }: ResumeProps) => {
  return (
    <>
      <Head title="Resume" description="The things that can i do for you." />
      <section className="pb-5">
        <Service data={data.service} />
        <Skill />
      </section>
    </>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(URL("resume"));
  const data: ResumeType = await res.json();
  return {
    props: { data },
  };
};
