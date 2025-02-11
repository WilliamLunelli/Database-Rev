import { Router } from "express";
import { createUser } from "../services/createUser";
import { createUsers } from "../services/createUsers";
import { getAllUsers } from "../services/listUsers";
import { getByEmail } from "../services/getByEmail";
import { updateUser } from "../services/updateUser";
import { deleteUser } from "../services/deleteUser";

const userRouter = Router();

//POST METHOD ROUTES

userRouter.post("/", async (req, res) => {
  const user = await createUser({
    name: "samuel",
    email: "samel@gmail.com",
    posts: {
      create: {
        title: "Teste",
        body: "Isso é apenas um teste",
      },
    },
  });
  res.json({ user });
});

userRouter.post("/batch", async (req, res) => {
  try {
    const users = await createUsers([
      { name: "Jonatan", email: "jonatan@gmail.com" },
      { name: "Nonato", email: "nonato@gmail.com" },
      { name: "sebastião", email: "sebas@hotmail.com" },
      { name: "tati", email: "tati@hotmail.com" },
    ]);

    return res.status(201).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Erro ao criar usuários",
    });
  }
});

//GET METHOD

userRouter.get("/", async (req, res) => {
  try {
    const result = await getAllUsers();
    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Erro ao obter usuários",
    });
  }
});

userRouter.get("/email", async (req, res) => {
  try {
    const result = await getByEmail("william@gmail.com");
    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Erro ao obter o usuário",
    });
  }
});

//PUT METHOD

userRouter.put("/", async (req, res) => {
  try {
    const userId = 1;
    const newName = "mermao";
    const updatedUser = await updateUser(userId, newName);
    return res.status(200).json({
      success: true,
      data: updateUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Erro ao atualizar usuário",
    });
  }
});

//DELETE METHOD

userRouter.delete("/", async (req, res) => {
  try {
    const userId = 26;
    const deletedUser = await deleteUser(userId);
    return res.status(200).json({
      success: true,
      data: deletedUser,
    });
  } catch (error) {}
});

export default userRouter;
