import Head from "@/components/Head";
import Service from "@/components/resume/Service";
import Skill from "@/components/resume/Skill";
import { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <>
      <Head title="Resume" description="The things that can i do for you." />
      <section className="pb-5">
        <Service />
        <Skill />
      </section>
    </>
  );
};

export default Resume;
