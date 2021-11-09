// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/portfolio.json";
import { Portfolio } from "@/types/portfolio";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Portfolio>
) {
  res.status(200).json(data);
}
