import Head from "@/components/Head"
import Service from "@/components/resume/Service"
import { NextPage } from "next"

const Resume: NextPage = () => {
  return (
    <>
      <Head title="Resume" description="The things that can i do for you."/>
      <section>
        <Service />
      </section>
    </>
  )
}

export default Resume
