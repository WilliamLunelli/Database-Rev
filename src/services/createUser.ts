import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    const user = await prisma.user.create({ data });
    return user;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "Email already exists" };
      }
    }
  }
};

export const createUsers = async (data: Prisma.UserCreateManyInput[]) => {
  const result = await prisma.user.createMany({ data, skipDuplicates: true });
  return result;
};
