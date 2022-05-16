import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class PlayerEntity {
    @ObjectIdColumn()
    id!: ObjectID

    @Column()
    color!: string

    @Column()
    name!: string
}