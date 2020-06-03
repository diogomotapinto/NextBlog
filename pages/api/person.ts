import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allUsers = await client.person.findMany();
  console.log(allUsers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(allUsers));
};
