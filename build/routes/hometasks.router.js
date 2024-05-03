"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hometasks_controller_1 = __importDefault(require("../controllers/hometasks.controller"));
const hometasksRouter = (0, express_1.Router)();
hometasksRouter.post('/', hometasks_controller_1.default.postHometask);
hometasksRouter.delete('/', hometasks_controller_1.default.deleteHometask);
exports.default = hometasksRouter;
//# sourceMappingURL=hometasks.router.js.map