"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hometaskRepo = exports.noteRepo = exports.dayRepo = exports.disconnect = exports.connect = void 0;
const typeorm_1 = require("typeorm");
const day_entity_1 = require("./entities/day.entity");
const note_entity_1 = require("./entities/note.entity");
const hometask_entity_1 = require("./entities/hometask.entity");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL,
    entities: [day_entity_1.Day, note_entity_1.Note, hometask_entity_1.Hometask]
});
const dayRepo = AppDataSource.getRepository(day_entity_1.Day);
exports.dayRepo = dayRepo;
const noteRepo = AppDataSource.getRepository(note_entity_1.Note);
exports.noteRepo = noteRepo;
const hometaskRepo = AppDataSource.getRepository(hometask_entity_1.Hometask);
exports.hometaskRepo = hometaskRepo;
const connect = () => AppDataSource.initialize();
exports.connect = connect;
const disconnect = () => {
    if (AppDataSource.isInitialized) {
        AppDataSource.destroy();
    }
};
exports.disconnect = disconnect;
//# sourceMappingURL=dataSource.js.map