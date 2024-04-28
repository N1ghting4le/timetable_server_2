import daysController from "../controllers/days.controller";
import { Router } from "express";

const daysRouter = Router();

daysRouter.post('/', daysController.resetDays);
daysRouter.get('/', daysController.getDays);

export default daysRouter;