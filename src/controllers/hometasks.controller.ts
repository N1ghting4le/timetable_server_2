import Connection from "../dataSource";
import { Hometask } from "../entities/hometask.entity";
import { Request, Response } from "express";

const hometasksController = {
    postHometask: (req: Request, res: Response) => {
        new Connection(Hometask, res).add(req.body);
    },

    deleteHometask: (req: Request, res: Response) => {
        new Connection(Hometask, res).delete(req.body.id);
    }
};

export default hometasksController;