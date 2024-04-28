import { Router } from "express";
import notesController from "../controllers/notes.controller";

const notesRouter = Router();

notesRouter.post('/', notesController.postNote);
notesRouter.delete('/', notesController.deleteNote);

export default notesRouter;