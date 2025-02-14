import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const deletedPost = async (id: number) => {
  try {
    const deleteUser = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    return deleteUser;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "Email already exists" };
      }
    }
  }
};
