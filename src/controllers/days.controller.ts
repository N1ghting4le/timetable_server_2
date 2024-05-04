import 'core-js/proposals/array-grouping-v2';
import { connect, disconnect, dayRepo } from "../dataSource";
import error from '../error';
import { Request, Response } from "express";

const daysController = {
    resetDays: (req: Request, res: Response) => {
        connect()
            .then(() => dayRepo.clear())
            .then(() => dayRepo.save(dayRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res))
            .finally(disconnect);
    },

    getDays: (req: Request, res: Response) => {
        connect()
            .then(() => dayRepo.find({ 
                order: {
                    date: "ASC"
                }
            }))
            .then(response => res.send(Object.values(Object.groupBy(response, ({ weekNum }) => weekNum))))
            .catch((err) => error(err, res))
            .finally(disconnect);
    }
};

export default daysController;