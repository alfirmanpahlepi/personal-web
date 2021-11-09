// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/resume.json";
import { Resume } from "@/types/resume";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resume>
) {
  res.status(200).json(data);
}
