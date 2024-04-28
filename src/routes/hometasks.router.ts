import { Router } from "express";
import hometasksController from "../controllers/hometasks.controller";

const hometasksRouter = Router();

hometasksRouter.post('/', hometasksController.postHometask);
hometasksRouter.delete('/', hometasksController.deleteHometask);

export default hometasksRouter;