"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = __importDefault(require("../dataSource"));
const hometask_entity_1 = require("../entities/hometask.entity");
const hometasksController = {
    postHometask: (req, res) => {
        new dataSource_1.default(hometask_entity_1.Hometask, res).add(req.body);
    },
    deleteHometask: (req, res) => {
        new dataSource_1.default(hometask_entity_1.Hometask, res).delete(req.body.id);
    }
};
exports.default = hometasksController;
//# sourceMappingURL=hometasks.controller.js.map