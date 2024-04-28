import "reflect-metadata";
import "dotenv/config";
import express from "express";
import cors from "cors";
import daysRouter from "./routes/days.router";
import notesRouter from "./routes/notes.router";
import hometasksRouter from "./routes/hometasks.router";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/days', daysRouter);
app.use('/notes', notesRouter);
app.use('/hometasks', hometasksRouter);

app.listen(+process.env.PORT, process.env.HOST, () => {
    console.log('Server is running');
});

module.exports = app;