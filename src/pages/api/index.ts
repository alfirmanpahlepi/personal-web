// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/home.json";
import { Home } from "@/types/home";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Home>
) {
  res.status(200).json(data);
}
