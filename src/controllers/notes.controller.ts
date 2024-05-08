import Connection from "../dataSource";
import { Note } from "../entities/note.entity";
import { Request, Response } from "express";

const notesController = {
    postNote: (req: Request, res: Response) => {
        new Connection(Note, res).add(req.body);
    },

    deleteNote: (req: Request, res: Response) => {
        new Connection(Note, res).delete(req.body.id);
    }
};

export default notesController;