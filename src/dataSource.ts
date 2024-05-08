import { DataSource, DeepPartial, EntityTarget, FindManyOptions, Repository } from "typeorm";
import { EntityKey, EntityCb } from "./types";
import { Response, Errback } from "express";
import { Day } from "./entities/day.entity";
import { Note } from "./entities/note.entity";
import { Hometask } from "./entities/hometask.entity";

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL,
    entities: [Day, Note, Hometask]
});

class Connection<Entity> {
    private repository: Repository<Entity>;
    private res: Response;
    private static errorMsg = { message: "Internal Server Error" };
    private static successMsg = { message: "OK" };

    constructor(entity: EntityTarget<Entity>, res: Response) {
        this.repository = AppDataSource.getRepository(entity);
        this.res = res;
    }

    private open = () => AppDataSource.initialize();

    private close() {
        if (AppDataSource.isInitialized) {
            AppDataSource.destroy();
        } 
    }

    private error(err: Errback) {
        console.error(err);
        this.res.status(500).send(Connection.errorMsg);
    }

    private success = () => this.res.send(Connection.successMsg);

    getMany(options: FindManyOptions<Entity> = {}, callback: EntityCb<Entity> = (x) => x) {
        this.open()
            .then(() => this.repository.find(options))
            .then(response => this.res.send(callback(response)))
            .catch(this.error)
            .finally(this.close);
    }

    add(data: DeepPartial<Entity>) {
        this.open()
            .then(() => this.repository.save(this.repository.create(data)))
            .then(this.success)
            .catch(this.error)
            .finally(this.close);
    }

    delete(key: EntityKey<Entity>) {
        this.open()
            .then(() => this.repository.delete(key))
            .then(this.success)
            .catch(this.error)
            .finally(this.close);
    }

    replaceWith(data: DeepPartial<Entity>) {
        this.open()
            .then(() => this.repository.clear())
            .then(() => this.repository.save(this.repository.create(data)))
            .then(this.success)
            .catch(this.error)
            .finally(this.close);
    }
}

export default Connection;