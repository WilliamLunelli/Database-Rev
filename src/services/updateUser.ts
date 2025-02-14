import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const updateUser = async (id: number, name: string) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  return updatedUser;
};
