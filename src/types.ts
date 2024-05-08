import { ObjectId, FindOptionsWhere } from "typeorm";

type EntityKey<Entity> = string | number | string[] | Date | ObjectId | number[] | Date[] | ObjectId[] | FindOptionsWhere<Entity>;

type EntityCb<Entity> = (x: Iterable<Entity>) => any;

export { EntityKey, EntityCb };