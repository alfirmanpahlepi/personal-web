// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/about.json";
import { AboutData } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutData>
) {
  res.status(200).json(data);
}
