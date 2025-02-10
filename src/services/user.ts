import { prisma } from "../libs/prisma";

type createUserProps = {
  name: string;
  email: string;
};

export const createUser = async ({ name, email }: createUserProps) => {
  const user = await prisma.user.create({
    data: { name, email },
  });
  return user;
};
