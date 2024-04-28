import { Entity, ManyToOne } from "typeorm";
import { Content } from "./content.entity";
import { Day } from "./day.entity";

@Entity({ name: "Notes" })
export class Note extends Content {
    @ManyToOne(() => Day, (day) => day.notes)
    day: Day
}