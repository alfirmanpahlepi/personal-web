import { GetStaticProps } from "next";
import About from "@/components/profile/About";
import Education from "@/components/profile/Education";
import Hobby from "@/components/profile/Hobby";
import Head from "@/components/Head";
import { Profile as ProfileType } from "@/types/profile";
import { URL } from "@/constants";

interface ProfileProps {
  data: ProfileType;
}

const Profile = ({ data }: ProfileProps) => (
  <>
    <Head title="Profile" description="Biodata of Alfirman Ejha Pahlepi" />
    <section>
      <About data={data.about} />
      <Education data={data.education} />
      <Hobby data={data.hobby} />
    </section>
  </>
);

export default Profile;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://alfirman-pahlepi.vercel.app/profile");
  const data: ProfileType = await res.json();
  return {
    props: { data },
  };
};
