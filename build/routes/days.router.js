"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const days_controller_1 = __importDefault(require("../controllers/days.controller"));
const express_1 = require("express");
const daysRouter = (0, express_1.Router)();
daysRouter.post('/', days_controller_1.default.resetDays);
daysRouter.get('/', days_controller_1.default.getDays);
exports.default = daysRouter;
//# sourceMappingURL=days.router.js.map