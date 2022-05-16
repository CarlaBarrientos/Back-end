import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";
import { PieceEntity } from "./piece";

@Entity()
export class PositionEntity {
    @ObjectIdColumn()
    id!: ObjectID

    @Column()
    column!: string

    @Column()
    row!: number

    @Column(() => PieceEntity)
    piece!: PieceEntity
}