import { connect, disconnect, noteRepo } from "../dataSource";
import error from "../error";
import { Request, Response } from "express";

const notesController = {
    postNote: (req: Request, res: Response) => {
        connect()
            .then(() => noteRepo.save(noteRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res))
            .finally(disconnect);
    },

    deleteNote: (req: Request, res: Response) => {
        connect()
            .then(() => noteRepo.delete(req.body.id))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res))
            .finally(disconnect);
    }
};

export default notesController;