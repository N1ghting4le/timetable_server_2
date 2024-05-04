"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = require("../dataSource");
const error_1 = __importDefault(require("../error"));
const hometasksController = {
    postHometask: (req, res) => {
        (0, dataSource_1.connect)()
            .then(() => dataSource_1.hometaskRepo.save(dataSource_1.hometaskRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => (0, error_1.default)(err, res))
            .finally(dataSource_1.disconnect);
    },
    deleteHometask: (req, res) => {
        (0, dataSource_1.connect)()
            .then(() => dataSource_1.hometaskRepo.delete(req.body.id))
            .then(() => res.send({ message: "success" }))
            .catch((err) => (0, error_1.default)(err, res))
            .finally(dataSource_1.disconnect);
    }
};
exports.default = hometasksController;
//# sourceMappingURL=hometasks.controller.js.map