"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = require("../dataSource");
const error_1 = __importDefault(require("../error"));
const notesController = {
    postNote: (req, res) => {
        dataSource_1.AppDataSource.initialize()
            .then(() => dataSource_1.noteRepo.save(dataSource_1.noteRepo.create(req.body)))
            .then(() => res.send({ message: "success" }))
            .catch((err) => (0, error_1.default)(err, res))
            .finally(() => dataSource_1.AppDataSource.destroy());
    },
    deleteNote: (req, res) => {
        dataSource_1.AppDataSource.initialize()
            .then(() => dataSource_1.noteRepo.delete(req.body.id))
            .then(() => res.send({ message: "success" }))
            .catch((err) => (0, error_1.default)(err, res))
            .finally(() => dataSource_1.AppDataSource.destroy());
    }
};
exports.default = notesController;
//# sourceMappingURL=notes.controller.js.map