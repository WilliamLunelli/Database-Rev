import { Router } from "express";
import { createPost } from "../services/createPost";
import { error } from "console";
import { updatePost } from "../services/updatePost";
import { deletedPost } from "../services/deletePost";

const postRouter = Router();

//POST METHOD

postRouter.post("/", async (req, res) => {
  try {
    const post = await createPost(req.body);

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

//UPDATE METHOD

postRouter.put("/", async (req, res) => {
  try {
    const postID = parseInt(req.query.id as string);
    const newTitle = req.body.title;
    const newSub = req.body.subtitle;
    const newBody = req.body.body;

    const newPost = await updatePost(postID, newTitle, newSub, newBody);

    return res.status(200).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: "Erro ao atualizar post",
    });
  }
});

//DELETE METHOD

postRouter.delete("/", async (req, res) => {
  try {
    const postId = parseInt(req.query.id as string);
    const deletePost = await deletedPost(postId);
    return res.status(200).json({
      success: true,
      data: deletePost,
    });
  } catch (error) {}
});

export default postRouter;
