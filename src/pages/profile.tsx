import { NextPage } from "next";
import About from "@/components/profile/About";
import Education from "@/components/profile/Education";
import Hobby from "@/components/profile/Hobby";
import Head from "@/components/Head"

const Profile: NextPage = () =>
  <>
    <Head title="Profile" description="Biodata of Alfirman Ejha Pahlepi" />
    <section>
      <About />
      <Education />
      <Hobby />
    </section>
  </>


export default Profile;
