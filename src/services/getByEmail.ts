import { prisma } from "../libs/prisma";

export const getByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};
