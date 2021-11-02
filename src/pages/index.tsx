import type { NextPage } from 'next';
import Layout from '@/components/Layout';

const Home: NextPage = () => (
  <Layout>
    <section className="h-full flex flex-col items-center justify-center text-center">
      <div className="border-b-4 border-pink-600 font-semibold py-4 w-3/4 text-purple-900 mb-6">
        <h3 className="text-lg sm:text-xl">Hello I'am</h3>
        <h1 className="text-2xl sm:text-4xl my-2">
          Alfirman Ejha Pahlepi
        </h1>
        <h6 className="sm:text-lg">Student of Malikussaleh University</h6>
      </div>
      <p className="text-purple-700 text-sm lg:text-base px-8">
        Lorem ipsum dolor sit amt illo veritatis praesentium facere alias, ipsum asperiores officia. Optio nesciunt nostrum magnam soluta voluptatum sequi itaque odit fugiat earum in?
      </p>
      <div className="my-6 text-sm lg:text-base">
        <p className="font-semibold text-purple-900">
          +62 896-7375-7429
        </p>
        <p className="text-purple-700">
          alfirman.18070083@mhs.unimal.ac.id
        </p>
      </div>
      <a
        style={{
          background: "linear-gradient(45deg,#c13584,#e1306c,#fd1d1d)",
        }}
        href="#"
        target="_blank"
        rel="noreferrer"
        className="py-2 px-4 text-white font-semibold tracking-wider rounded-lg opacity-80 hover:opacity-100 duration-200"
      >
        Download CV
      </a>
    </section>
  </Layout>

);

export default Home;
