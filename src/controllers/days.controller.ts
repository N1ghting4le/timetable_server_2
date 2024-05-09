import 'core-js/proposals/array-grouping-v2';
import Connection from "../dataSource";
import { Day } from "../entities/day.entity";
import { Request, Response } from "express";

const daysController = {
    resetDays: (req: Request, res: Response) => {
        const connection = new Connection(Day, res);
        const repository = connection.repository;

        connection.open()
            .then(() => repository.clear())
            .then(() => repository.save(repository.create(req.body)))
            .then(connection.success)
            .catch(connection.error)
            .finally(connection.close);
    },

    getDays: (req: Request, res: Response) => {
        new Connection(Day, res).getMany({
            order: {
                date: "ASC"
            }
        }, response => Object.values(Object.groupBy(response, ({ weekNum }) => weekNum)));
    }
};

export default daysController;