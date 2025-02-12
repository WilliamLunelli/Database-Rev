import { Router } from "express";
import { createPost } from "../services/createPost";
import { error } from "console";

const postRouter = Router();

//POST METHOD

postRouter.post("/", async (req, res) => {
  try {
    const post = await createPost({
      title: "Bananinha de maua",
      body: "eu gosto de banana da terra",
      author: {
        connect: {
          id: 1,
        },
      },
    });

    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Erro ao criar usuários",
    });
  }
});

export default postRouter;
