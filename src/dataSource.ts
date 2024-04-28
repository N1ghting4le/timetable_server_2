import { DataSource } from "typeorm";
import { Day } from "./entities/day.entity";
import { Note } from "./entities/note.entity";
import { Hometask } from "./entities/hometask.entity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Day, Note, Hometask]
});

AppDataSource.initialize().then(() => {
    console.log('Connected to Postgres successfully!');
}).catch(error => console.log(error));

const dayRepo = AppDataSource.getRepository(Day);
const noteRepo = AppDataSource.getRepository(Note);
const hometaskRepo = AppDataSource.getRepository(Hometask);

export { AppDataSource, dayRepo, noteRepo, hometaskRepo };