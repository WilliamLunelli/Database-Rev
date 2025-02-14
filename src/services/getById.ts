import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const getById = async (data: Prisma.UserWhereUniqueInput) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: data.id,
      },
    });
    return result;
  } catch (error) {}
};
