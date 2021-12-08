export type Services = Array<{
  text: string;
  desc: string;
  icon: string;
}>;

export type Experience = Array<{
  years: string;
  role: string;
  desc: string;
}>;

interface Skill {
  familiars: string[];
  favourites: string[];
}

export type Resume = {
  service: { desc: string; services: Services };
  skill: Skill;
  experience: Experience;
};
