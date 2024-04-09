import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks,getTask, createTask, updateTask,deletetask } from "../controllers/tasks.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskShema } from "../schemas/task.chema.js";

const router = Router()

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks', authRequired, validateSchema(createTaskShema), createTask);
router.delete('/tasks/:id', authRequired, deletetask);
router.put('/tasks/:id', authRequired, updateTask);

export default router