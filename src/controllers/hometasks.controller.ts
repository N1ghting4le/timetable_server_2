import { AppDataSource, hometaskRepo } from "../dataSource";
import error from "../error";
import { Request, Response } from "express";

const hometasksController = {
    postHometask: (req: Request, res: Response) => {
        AppDataSource.initialize()
            .then(() => hometaskRepo.save(hometaskRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res))
            .finally(() => AppDataSource.destroy());
    },

    deleteHometask: (req: Request, res: Response) => {
        AppDataSource.initialize()
            .then(() => hometaskRepo.delete(req.body.id))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res))
            .finally(() => AppDataSource.destroy());
    }
};

export default hometasksController;