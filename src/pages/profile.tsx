import { GetStaticProps } from "next";
import About from "@/components/profile/About";
import Education from "@/components/profile/Education";
import Hobby from "@/components/profile/Hobby";
import Head from "@/components/Head";
import { Profile as ProfileType } from "@/types/profile";
import data from "@/data/profile.json";
import { motion } from "framer-motion";

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
  // const res = await fetch("https://alfirman-pahlepi.vercel.app/profile");
  // const data: ProfileType = await res.json();
  return {
    props: { data },
  };
};
