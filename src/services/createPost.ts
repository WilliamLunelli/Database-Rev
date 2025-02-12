import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createPost = async (data: Prisma.PostCreateInput) => {
  try {
    const result = await prisma.post.create({ data: data });
  } catch (error) {}
};
