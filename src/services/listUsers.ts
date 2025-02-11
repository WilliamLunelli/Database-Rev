import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      status: true,
      posts: {
        select: {
          title: true,
          body: true,
        },
      },
    },
  });
  return users;
};
