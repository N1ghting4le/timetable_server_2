"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const days_router_1 = __importDefault(require("./routes/days.router"));
const notes_router_1 = __importDefault(require("./routes/notes.router"));
const hometasks_router_1 = __importDefault(require("./routes/hometasks.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/days', days_router_1.default);
app.use('/notes', notes_router_1.default);
app.use('/hometasks', hometasks_router_1.default);
app.listen(+process.env.PORT, process.env.HOST, () => {
    console.log('Server is running');
});
module.exports = app;
//# sourceMappingURL=index.js.map