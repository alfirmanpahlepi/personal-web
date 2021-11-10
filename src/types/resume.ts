export type Services = Array<{
  text: string;
  desc: string;
  icon: string;
}>;

interface Skill {
  familiars: string[];
  favourites: string[];
}

export type Resume = {
  service: { desc: string; services: Services };
  skill: Skill;
};
