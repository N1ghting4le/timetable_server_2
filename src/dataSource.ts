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
    private _repository: Repository<Entity>;
    private res: Response;
    private static errorMsg = { message: "Internal Server Error" };
    private static successMsg = { message: "OK" };

    constructor(entity: EntityTarget<Entity>, res: Response) {
        this._repository = AppDataSource.getRepository(entity);
        this.res = res;
    }

    get repository() {
        return this._repository;
    }

    open = () => AppDataSource.initialize();

    close() {
        if (AppDataSource.isInitialized) {
            AppDataSource.destroy();
        } 
    }

    success = () => this.res.send(Connection.successMsg);

    error(err: Errback) {
        console.error(err);
        this.res.status(500).send(Connection.errorMsg);
    }

    getMany(options: FindManyOptions<Entity> = {}, callback: EntityCb<Entity> = (x) => x) {
        this.open()
            .then(() => this._repository.find(options))
            .then(response => this.res.send(callback(response)))
            .catch(this.error)
            .finally(this.close);
    }

    add(data: DeepPartial<Entity>) {
        this.open()
            .then(() => this._repository.save(this._repository.create(data)))
            .then(this.success)
            .catch(this.error)
            .finally(this.close);
    }

    delete(key: EntityKey<Entity>) {
        this.open()
            .then(() => this._repository.delete(key))
            .then(this.success)
            .catch(this.error)
            .finally(this.close);
    }
}

export default Connection;