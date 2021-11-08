// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/home.json";
import { HomeData } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>
) {
  res.status(200).json(data);
}
