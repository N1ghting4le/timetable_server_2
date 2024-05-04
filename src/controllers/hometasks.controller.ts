import { connect, disconnect, hometaskRepo } from "../dataSource";
import error from "../error";
import { Request, Response } from "express";

const hometasksController = {
    postHometask: (req: Request, res: Response) => {
        connect()
            .then(() => hometaskRepo.save(hometaskRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res))
            .finally(disconnect);
    },

    deleteHometask: (req: Request, res: Response) => {
        connect()
            .then(() => hometaskRepo.delete(req.body.id))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res))
            .finally(disconnect);
    }
};

export default hometasksController;