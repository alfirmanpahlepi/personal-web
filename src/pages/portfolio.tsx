import { NextPage } from "next"
import Head from "@/components/Head"
import Title from "@/components/Title"
import { ArrowIcon, CodeIcon } from "@/components/icons"

const Portfolio: NextPage = () => {
  return (
    <>
      <Head title="Portfolio" description="Some collection of my past works." />
      <section className="w-11/12 xs:w-5/6 mx-auto mb-10">
        <Title>my <b className="font-semibold">Portfolio</b></Title>
        <ul className="space-y-3">
          {
            [1, 2, 3, 4, 5].map((el, i) => (
              <li key={i} className="border-2 border-dashed h-[300px] p-4 flex">
                <div className="h-full bg-pink-600 w-[250px]">img</div>
                <div className="h-full w-[calc(100%-250px)] px-5 flex flex-col justify-between">
                  <div>
                    <h1 className="text-3xl font-bold"><a href="#" className="hover:underline">Personal Website</a></h1>
                    <p className="text-gray-600">Created at January 2021</p>
                    <p className="my-2">Kantin ketringan is a project collaboration with Assets&Logistic Telkom University and Sain Kitchen. You can order food from kantin ketringan via this app.</p>
                    <div className="uppercase space-x-2">
                      <span className="font-medium text-sm bg-yellow-400 px-1 rounded-sm">Nextjs</span>
                      <span className="font-medium text-sm bg-blue-400 px-1 rounded-sm">react</span>
                      <span className="font-medium text-sm bg-green-400 px-1 rounded-sm">tailwindcss</span>
                    </div>
                  </div>
                  <div className="space-x-5 flex items-center">
                    <button className="font-bold flex items-center space-x-2">
                      <i className="h-6 w-6"><ArrowIcon /></i>
                      <span>Visit project</span>
                    </button>
                    <button className="font-bold flex items-center space-x-2">
                      <i className="h-5 w-5"><CodeIcon /></i>
                      <span>Source code</span>
                    </button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}

const portfolios = [
  {
    name: "Personal Website",
    desc: "A personal website of Alfirman Ejha Pahlepi"
  },
  {
    name: "Personal Website",
    desc: "A personal website of Alfirman Ejha Pahlepi"
  },
  {
    name: "Personal Website",
    desc: "A personal website of Alfirman Ejha Pahlepi"
  },
  {
    name: "Personal Website",
    desc: "A personal website of Alfirman Ejha Pahlepi"
  },
  {
    name: "Personal Website",
    desc: "A personal website of Alfirman Ejha Pahlepi"
  },
  {
    name: "Personal Website",
    desc: "A personal website of Alfirman Ejha Pahlepi"
  },

]

export default Portfolio
