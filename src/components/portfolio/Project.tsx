import { ArrowIcon, CodeIcon } from "../icons";

export default function Project() {
  return (
    <div className="h-full w-full border-2 border-dashed md:flex p-4">
      <div className="h-[300px] md:h-full bg-pink-600 w-full mb-3 md:m-0">img</div>
      <div className="h-full px-5 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold"><a href="#" className="hover:underline">Personal Website</a></h1>
          <p className="text-gray-600">Created at January 2021</p>
          <p className="my-2">Kantin ketringan is a project collaboration with Assets&Logistic Telkom University and Sain Kitchen. You can order food from kantin ketringan via this app.</p>
          <div className="uppercase space-x-2">
            <span className="font-medium text-sm bg-yellow-400 px-1 rounded-sm">Next</span>
            <span className="font-medium text-sm bg-blue-400 px-1 rounded-sm">react</span>
            <span className="font-medium text-sm bg-green-400 px-1 rounded-sm">tailwind</span>
          </div>
        </div>
        <div className="space-x-5 flex items-center mt-5 md:mt-0">
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
    </div>
  )
}
