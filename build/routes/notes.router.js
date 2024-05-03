"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_controller_1 = __importDefault(require("../controllers/notes.controller"));
const notesRouter = (0, express_1.Router)();
notesRouter.post('/', notes_controller_1.default.postNote);
notesRouter.delete('/', notes_controller_1.default.deleteNote);
exports.default = notesRouter;
//# sourceMappingURL=notes.router.js.map