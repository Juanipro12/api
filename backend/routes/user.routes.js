import { Router } from "express";
import { deleteUser, getUser, insertUser, updateUser } from "../controllers/user.controllers.js";
import { verificarToken } from "../auth.js";

const userRouter = Router()

userRouter.get('/user',verificarToken,getUser)
userRouter.post('/user',insertUser)
userRouter.put('/user',updateUser)
userRouter.delete('/user',deleteUser)

export default userRouter