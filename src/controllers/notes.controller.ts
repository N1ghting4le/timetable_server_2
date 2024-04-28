import { noteRepo } from "../dataSource";
import error from "../error";
import { Request, Response } from "express";

const notesController = {
    postNote: (req: Request, res: Response) => {
        noteRepo.save(noteRepo.create(req.body))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res));
    },

    deleteNote: (req: Request, res: Response) => {
        noteRepo.delete(req.body.id)
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res));
    }
};

export default notesController;