import { hometaskRepo } from "../dataSource";
import error from "../error";
import { Request, Response } from "express";

const hometasksController = {
    postHometask: (req: Request, res: Response) => {
        hometaskRepo.save(hometaskRepo.create(req.body))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res));
    },

    deleteHometask: (req: Request, res: Response) => {
        hometaskRepo.delete(req.body.id)
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res));
    }
};

export default hometasksController;