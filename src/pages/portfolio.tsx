import { NextPage } from "next"
import Head from "@/components/Head"
import Title from "@/components/Title"
import Project from "@/components/portfolio/Project"

const Portfolio: NextPage = () => {
  return (
    <>
      <Head title="Portfolio" description="Some collection of my past works." />
      <section className="w-11/12 xs:w-5/6 mx-auto mb-10">
        <Title>my <b className="font-semibold">Portfolio</b></Title>
        <ul className="space-y-3">
          {[1, 2, 3, 4, 5].map((el, i) => (
            <li key={i} className="md:h-[300px]">
              <Project />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Portfolio
