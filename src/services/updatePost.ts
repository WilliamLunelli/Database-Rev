import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const updatePost = async (id: number, data: Prisma.PostUpdateInput) => {
  try {
    const result = await prisma.post.update({
      where: {
        id: id,
      },
      data: data,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "Post not found already exists" };
      }
    }
  }
};
