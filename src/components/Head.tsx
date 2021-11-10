import { useRouter } from "next/router";
import { NextSeo, NextSeoProps } from "next-seo";

const baseUrl: string = "https://alfirman-pahlepi.vercel.app"

interface HeadProps extends NextSeoProps {
  images?: any;
  image?: string;
}
const Head = ({
  title,
  description,
  images,
  image,
  openGraph,
  ...props
}: HeadProps) => {
  const router = useRouter();
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        site_name: "alfirman-pahlepi.vercel.app",
        title: `${title} · alfirman-pahlepi.vercel.app`,
        description,
        url: baseUrl + (router.asPath || ""),
        images: images
          ? images
          : image
            ? [
              {
                url: baseUrl + "/hero-img.jpg",
              },
            ]
            : undefined,
        ...openGraph,
      }}
      {...props}
    />
  );
};

export default Head;