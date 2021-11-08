export type SocialMedias = Array<{
  icon: JSX.Element;
  link: string;
  color: string;
}>;

export type Navs = Array<{ name: string; link: string; icon: JSX.Element }>;

export type AboutData = Array<{
  name: string;
  value: string;
  icon: string;
}>;

export type Educations = Array<{
  years: string;
  school: string;
  desc: string;
}>;

export type Hobbies = Array<{
  name: string;
  icon: JSX.Element;
}>;

export type Services = Array<{
  text: string;
  desc: string;
  icon: JSX.Element;
}>;

export interface HomeData {
  name: string;
  title: string;
  desc: string;
  number: string;
  email: string;
  cv: string;
}

export interface Portfolio {
  img: string;
  date: string;
  title: string;
  desc: string;
  tech: string[];
  demo: string;
  sourceCode: string;
}
