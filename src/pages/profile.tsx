import { NextPage } from "next";
import Layout from "@/components/Layout";
import About from "@/components/profile/About";
import Education from "@/components/profile/Education";
import Hobby from "@/components/profile/Hobby";

const Profile: NextPage = () => {
  return (
    <Layout>
      <section>
        <About />
        <Education />
        <Hobby />
      </section>
    </Layout>
  );
}

export default Profile;
