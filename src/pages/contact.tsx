import { NextPage } from "next";
import Head from "@/components/Head";
import Title from "@/components/Title";
import Form from "@/components/contact/Form";
import Profile from "@/components/contact/Profile";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  return (
    <>
      <Head title="Contact" description="contact me" />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-11/12 xs:w-5/6 mx-auto"
      >
        <Title>
          Contact <b className="font-semibold">me</b>
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Profile />
          <Form />
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
