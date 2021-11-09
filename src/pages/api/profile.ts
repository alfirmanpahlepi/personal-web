// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/profile.json";
import { Profile } from "@/types/profile";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) {
  res.status(200).json(data);
}
