import { Entity, Column, ManyToOne } from "typeorm";
import { Content } from "./content.entity";
import { Day } from "./day.entity";

@Entity({ name: "Hometasks" })
export class Hometask extends Content {
    @Column({ type: "text", name: "Subject" })
    subject: string

    @Column({ type: "text", name: "Type" })
    type: string

    @Column({ type: "json", name: "Teacher" })
    teacher: Object

    @ManyToOne(() => Day, (day) => day.hometasks)
    day: Day
}