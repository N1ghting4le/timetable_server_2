"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/proposals/array-grouping-v2");
const dataSource_1 = __importDefault(require("../dataSource"));
const day_entity_1 = require("../entities/day.entity");
const daysController = {
    resetDays: (req, res) => {
        new dataSource_1.default(day_entity_1.Day, res).replaceWith(req.body);
    },
    getDays: (req, res) => {
        new dataSource_1.default(day_entity_1.Day, res).getMany({
            order: {
                date: "ASC"
            }
        }, response => Object.values(Object.groupBy(response, ({ weekNum }) => weekNum)));
    }
};
exports.default = daysController;
//# sourceMappingURL=days.controller.js.map