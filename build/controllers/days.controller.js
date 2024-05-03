"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/proposals/array-grouping-v2");
const dataSource_1 = require("../dataSource");
const error_1 = __importDefault(require("../error"));
const daysController = {
    resetDays: (req, res) => {
        dataSource_1.AppDataSource.initialize()
            .then(() => dataSource_1.dayRepo.clear())
            .then(() => dataSource_1.dayRepo.save(dataSource_1.dayRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => (0, error_1.default)(err, res))
            .finally(() => dataSource_1.AppDataSource.destroy())
            .catch((err) => (0, error_1.default)(err, res));
    },
    getDays: (req, res) => {
        dataSource_1.AppDataSource.initialize()
            .then(() => dataSource_1.dayRepo.find({
            order: {
                date: "ASC"
            }
        }))
            .then(response => res.send(Object.values(Object.groupBy(response, ({ weekNum }) => weekNum))))
            .catch((err) => (0, error_1.default)(err, res))
            .finally(() => dataSource_1.AppDataSource.destroy())
            .catch((err) => (0, error_1.default)(err, res));
    }
};
exports.default = daysController;
//# sourceMappingURL=days.controller.js.map