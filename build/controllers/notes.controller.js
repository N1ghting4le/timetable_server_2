"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = __importDefault(require("../dataSource"));
const note_entity_1 = require("../entities/note.entity");
const notesController = {
    postNote: (req, res) => {
        new dataSource_1.default(note_entity_1.Note, res).add(req.body);
    },
    deleteNote: (req, res) => {
        new dataSource_1.default(note_entity_1.Note, res).delete(req.body.id);
    }
};
exports.default = notesController;
//# sourceMappingURL=notes.controller.js.map