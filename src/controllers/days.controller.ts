import 'core-js/proposals/array-grouping-v2';
import Connection from "../dataSource";
import { Day } from "../entities/day.entity";
import { Request, Response } from "express";

const daysController = {
    resetDays: (req: Request, res: Response) => {
        new Connection(Day, res).replaceWith(req.body);
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