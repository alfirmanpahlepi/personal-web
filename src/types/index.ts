export type SocialMedias = Array<{
  icon: JSX.Element;
  link: string;
  color: string;
}>;

export type Navs = Array<{ name: string; link: string }>;

export type Abouts = Array<{
  text: string;
  value: string;
  icon: JSX.Element;
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
