import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createUsers = async (data: Prisma.UserCreateManyInput[]) => {
  const result = await prisma.user.createMany({ data, skipDuplicates: true });
  return result;
};
