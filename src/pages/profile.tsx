import { NextPage } from "next";
import Layout from "@/components/Layout";
import About from "@/components/profile/About";
import Education from "@/components/profile/Education";
import Hobby from "@/components/profile/Hobby";
import Head from "@/components/Head"

const Profile: NextPage = () =>
  <Layout>
    <Head title="Profile" description="Biodata of Alfirman Ejha Pahlepi" />
    <section>
      <About />
      <Education />
      <Hobby />
    </section>
  </Layout>


export default Profile;
