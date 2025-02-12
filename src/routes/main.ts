import { Router } from "express";
import { prisma } from "../libs/prisma";
import { createUser } from "../services/createUser";
import { createUsers } from "../services/createUsers";
import userRouter from "./users";
import { createPost } from "../services/createPost";
import postRouter from "./post";

export const router = Router();

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.use("/users", userRouter);

router.use("/post", postRouter);
