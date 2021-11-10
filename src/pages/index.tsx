import NextHead from "next/head";
import type { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { Home as HomeType } from "@/types/home";

interface HomeProps {
  data: HomeType;
}

const Home = ({ data }: HomeProps) => (
  <>
    <NextHead>
      <title>{data.name}</title>
      <meta
        name="keywords"
        content="Alfirman,Alfirman Ejha,Ejha Pahlepi,Pahlepi,Alfirman Ejha Pahlepi"
      />
      {/* Primary Meta Tags */}
      <meta name="viewport" content="initial-scale=1" />
      <meta name="title" content="Alfirman Ejha Pahlepi" />
      <meta
        name="description"
        content="Alfirman Ejha Pahlepi is a fullstack javascript developer from Indonesia."
      />
      <meta name="theme-color" content="#CB347D" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://alfirman-pahlepi.vercel.app/" />
      <meta property="og:title" content="Alfirman Ejha Pahlepi" />
      <meta
        property="og:description"
        content="Alfirman Ejha Pahlepi is as fullstack javascript developer from Indonesia."
      />
      <meta
        property="og:image"
        content="https://alfirman-pahlepi.vercel.app/hero-img.jpg"
      />

      {/* Twitter */}
      <meta
        property="twitter:card"
        content="https://alfirman-pahlepi.vercel.app/hero-img.jpg"
      />
      <meta
        property="twitter:url"
        content="http://alfirman-pahlepi.vercel.app/"
      />
      <meta property="twitter:title" content="Alfirman Ejha Pahlepi" />
      <meta
        property="twitter:description"
        content="Alfirman Ejha Pahlepi is as fullstack javascript developer from Indonesia."
      />
      <meta
        property="twitter:image"
        content="https://alfirman-pahlepi.vercel.app/hero-img.jpg"
      />
    </NextHead>

    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col items-center justify-center text-center py-10"
    >
      <div className="border-b-4 border-pink-600 font-semibold py-4 w-3/4 text-purple-900 mb-6">
        <h3 className="text-lg sm:text-xl">Hello I'am</h3>
        <h1 className="text-2xl sm:text-4xl my-2">{data.name}</h1>
        <p className="sm:text-lg">{data.title}</p>
      </div>
      <p className="text-purple-700 text-sm lg:text-base px-8">{data.desc}</p>
      <div className="my-6 text-sm lg:text-base">
        <p className="font-semibold text-purple-900">{data.number}</p>
        <p className="text-purple-700">{data.email}</p>
      </div>
      <a
        style={{
          background: "linear-gradient(45deg,#c13584,#e1306c,#fd1d1d)",
        }}
        href={data.cv}
        target="_blank"
        rel="noreferrer"
        className="py-2 px-4 text-white font-semibold tracking-wider rounded-lg opacity-80 hover:opacity-100 duration-200"
      >
        Download CV
      </a>
    </motion.section>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://alfirman-pahlepi.vercel.app/api/");
  const data: HomeType = await res.json();
  return {
    props: { data },
  };
};
