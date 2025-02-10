import { Router } from "express";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.get("/test", (req, res) => {
  prisma.user;
});
