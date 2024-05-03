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

export { AppDataSource, dayRepo, noteRepo, hometaskRepo };