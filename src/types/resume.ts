export type Services = Array<{
  text: string;
  desc: string;
  icon: string;
}>;

export type Resume = {
  service: { desc: string; services: Services };
};
