import { NextPage } from "next"
import Title from "@/components/Title"
import Form from "@/components/contact/Form"
import Profile from "@/components/contact/Profile"
import Head from "@/components/Head"

const Contact: NextPage = () => {
  return (
    <>
      <Head title="Contact" description="contact me" />
      <section>
        <div className="w-11/12 xs:w-5/6 mx-auto">
          <Title>Contact <b className="font-semibold">me</b></Title>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Profile />
            <Form />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
