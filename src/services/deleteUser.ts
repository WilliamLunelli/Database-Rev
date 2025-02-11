import { prisma } from "../libs/prisma";

export const deleteUser = async (id: number) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return deleteUser;
};
