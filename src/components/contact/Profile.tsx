import { EnvelopeAltIcon, MapMarkerAltIcon, PhoneAltIcon } from "../icons";

export default function Profile() {
  return (
    <div className="p-6 mr-2 bg-gray-50 dark:bg-gray-800 sm:rounded-lg">
      <h1 className="text-4xl text-pink-700 font-semibold dark:text-white">
        Get in touch
      </h1>
      <p className="text-normal text-lg font-medium text-purple-600 dark:text-gray-400 mt-2">
        Fill in the form to start a conversation
      </p>
      <div className="flex items-center mt-8 text-gray-400 dark:text-gray-400">
        <i className="text-gray-500 h-8 w-8">
          <MapMarkerAltIcon />
        </i>
        <div className="ml-4 text-sm tracking-wide font-semibold w-40">
          Kejuruan muda, Aceh Tamiang, Aceh, Indonesia
        </div>
      </div>
      <div className="flex items-center mt-4 text-gray-400 dark:text-gray-400">
        <i className="text-gray-500 h-8 w-8">
          <PhoneAltIcon />
        </i>
        <div className="ml-4 text-sm tracking-wide font-semibold w-40">
          +62 895 7375 7429
        </div>
      </div>
      <div className="flex items-center mt-2 text-gray-400 dark:text-gray-400">
        <i className="text-gray-500 h-8 w-8">
          <EnvelopeAltIcon />
        </i>
        <div className="ml-4 text-sm tracking-wide font-semibold w-40">
          alfirman.pahlepi@gmail.com
        </div>
      </div>
    </div>
  )
}
