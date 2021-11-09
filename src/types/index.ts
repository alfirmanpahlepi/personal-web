export type SocialMedias = Array<{
  icon: JSX.Element;
  link: string;
  color: string;
}>;

export type Navs = Array<{ name: string; link: string; icon: JSX.Element }>;

export interface Portfolio {
  img: string;
  date: string;
  title: string;
  desc: string;
  tech: string[];
  demo: string;
  sourceCode: string;
}
