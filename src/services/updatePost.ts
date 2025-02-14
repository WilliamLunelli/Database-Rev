import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";
import { title } from "process";

export const updatePost = async (
  id: number,
  title: string,
  subtitle: string,
  body: string
) => {
  try {
    const result = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        subtitle,
        body,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "Post not found already exists" };
      }
    }
  }
};
