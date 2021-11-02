export default function Form() {
  return (
    <form
      // onSubmit={(e) => handleSubmit(e)}
      className="p-6 flex flex-col justify-center"
    >
      <div className="flex flex-col">
        <input
          // onChange={(e) => handleChange(e)}
          // value={form.name || ""}
          name="name"
          placeholder="Full Name"
          className="w-100 mt-2 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col mt-2">
        <input
          // onChange={(e) => handleChange(e)}
          // value={form.contact || ""}
          name="contact"
          placeholder="Your Contact"
          className="w-100 mt-2 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col mt-2">
        <textarea
          // onChange={(e) => handleChange(e)}
          // value={form.message || ""}
          name="message"
          placeholder="Your text here"
          className="resize-none w-100 h-40 mt-2 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        style={{
          background: "linear-gradient(45deg,#c13584,#e1306c,#fd1d1d)",
        }}
        className="text-white md:w-32 font-bold py-2 px-6 rounded-lg mt-3 transition ease-in-out duration-300 opacity-80 hover:opacity-100"
      >
        Submit
      </button>
    </form>
  )
}
