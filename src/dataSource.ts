import { DataSource } from "typeorm";
import { Day } from "./entities/day.entity";
import { Note } from "./entities/note.entity";
import { Hometask } from "./entities/hometask.entity";

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL,
    entities: [Day, Note, Hometask]
});

const dayRepo = AppDataSource.getRepository(Day);
const noteRepo = AppDataSource.getRepository(Note);
const hometaskRepo = AppDataSource.getRepository(Hometask);

const connect = () => AppDataSource.initialize();

const disconnect = () => {
    if (AppDataSource.isInitialized) {
        AppDataSource.destroy();
    }
}

export { connect, disconnect, dayRepo, noteRepo, hometaskRepo };