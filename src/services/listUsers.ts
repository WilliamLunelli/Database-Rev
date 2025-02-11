import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};
