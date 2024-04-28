import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Note } from "./note.entity";
import { Hometask } from "./hometask.entity";

@Entity({ name: "Days" })
export class Day {
    @PrimaryColumn({ type: "date", name: "Date" })
    date: Date

    @Column({ type: "text", name: "Name" })
    name: string

    @Column({ type: "integer", name: "WeekNum" })
    weekNum: number

    @OneToMany(() => Note, (note) => note.day, {
        eager: true
    })
    notes: Note[]

    @OneToMany(() => Hometask, (hometask) => hometask.day, {
        eager: true
    })
    hometasks: Hometask[]
}