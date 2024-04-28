import { Column, PrimaryColumn } from "typeorm";

export abstract class Content {
    @PrimaryColumn({ type: "uuid", name: "Id" })
    id: string

    @Column({ type: "text", name: "Text" })
    text: string
}