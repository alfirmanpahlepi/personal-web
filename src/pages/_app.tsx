import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import NextHead from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>Alfirman Ejha Pahlepi</title>
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
