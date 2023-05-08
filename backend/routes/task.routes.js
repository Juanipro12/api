import { Router } from "express";
import { verificarToken } from "../auth.js";
import { generFunc } from "../controllers/task.controller.js";

const routerTask = Router()
//routerTask.use(verificarToken);
routerTask.get('/tasks',generFunc)
routerTask.get('/tasks/:id',generFunc)
routerTask.post('/task',generFunc)
routerTask.put('/tasks/:id',generFunc)
routerTask.delete('/task',generFunc)

export default routerTask
