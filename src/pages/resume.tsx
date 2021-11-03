import Head from "@/components/Head"
import Layout from "@/components/Layout"
import Service from "@/components/resume/Service"
import { NextPage } from "next"

const Resume: NextPage = () => {
  return (
    <Layout>
      <Head title="Resume" description="The things that can i do for you."/>
      <section>
        <Service />
      </section>
    </Layout>
  )
}

export default Resume
