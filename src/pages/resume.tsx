import Layout from "@/components/Layout"
import Service from "@/components/resume/Service"
import { NextPage } from "next"

const Resume: NextPage = () => {
  return (
    <Layout>
      <section>
        <Service />
      </section>
    </Layout>
  )
}

export default Resume
