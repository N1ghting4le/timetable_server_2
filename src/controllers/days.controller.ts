import 'core-js/proposals/array-grouping-v2';
import { dayRepo } from "../dataSource";
import error from '../error';
import { Request, Response } from "express";

const daysController = {
    resetDays: (req: Request, res: Response) => {
        dayRepo.clear()
            .then(() => dayRepo.save(dayRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => error(err, res));
    },

    getDays: (req: Request, res: Response) => {
        dayRepo.find({ 
            order: {
                date: "ASC"
            } 
        }).then(response => {
            res.send(Object.values(Object.groupBy(response, ({ weekNum }) => weekNum)));
        }).catch((err) => error(err, res));
    }
};

export default daysController;