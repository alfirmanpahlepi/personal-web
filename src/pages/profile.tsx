import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { Profile as ProfileType } from "@/types/profile";
import Education from "@/components/profile/Education";
import About from "@/components/profile/About";
import Hobby from "@/components/profile/Hobby";
import Head from "@/components/Head";

interface ProfileProps {
  data: ProfileType;
}

const Profile = ({ data }: ProfileProps) => (
  <>
    <Head title="Profile" description="Biodata of Alfirman Ejha Pahlepi" />
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <About data={data.about} />
      <Education data={data.education} />
      <Hobby data={data.hobby} />
    </motion.section>
  </>
);

export default Profile;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://alfirman-pahlepi.vercel.app/api/profile/");
  const data: ProfileType = await res.json();
  return {
    props: { data },
  };
};
