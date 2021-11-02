import Layout from "@/components/Layout"
import Service from "@/components/resume/service"
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
