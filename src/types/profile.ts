export type Abouts = Array<{
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
  icon: string;
}>;

export interface Profile {
  about: Abouts;
  education: Educations;
  hobby: {
    desc: string;
    hobbies: Hobbies;
  };
}
