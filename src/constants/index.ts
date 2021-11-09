const deployment: string = "https://alfirman-pahlepi.vercel.app/";
const development: string = "http://localhost:3000/";

export const URL = (param: string = ""): string => development + param;
