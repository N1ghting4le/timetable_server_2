"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const day_entity_1 = require("./entities/day.entity");
const note_entity_1 = require("./entities/note.entity");
const hometask_entity_1 = require("./entities/hometask.entity");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL,
    entities: [day_entity_1.Day, note_entity_1.Note, hometask_entity_1.Hometask]
});
class Connection {
    constructor(entity, res) {
        this.open = () => AppDataSource.initialize();
        this.success = () => this.res.send(Connection.successMsg);
        this._repository = AppDataSource.getRepository(entity);
        this.res = res;
    }
    get repository() {
        return this._repository;
    }
    close() {
        if (AppDataSource.isInitialized) {
            AppDataSource.destroy();
        }
    }
    error(err) {
        console.error(err);
        this.res.status(500).send(Connection.errorMsg);
    }
    getMany(options = {}, callback = (x) => x) {
        this.open()
            .then(() => this._repository.find(options))
            .then(response => this.res.send(callback(response)))
            .catch(this.error)
            .finally(this.close);
    }
    add(data) {
        this.open()
            .then(() => this._repository.save(this._repository.create(data)))
            .then(this.success)
            .catch(this.error)
            .finally(this.close);
    }
    delete(key) {
        this.open()
            .then(() => this._repository.delete(key))
            .then(this.success)
            .catch(this.error)
            .finally(this.close);
    }
}
Connection.errorMsg = { message: "Internal Server Error" };
Connection.successMsg = { message: "OK" };
exports.default = Connection;
//# sourceMappingURL=dataSource.js.map