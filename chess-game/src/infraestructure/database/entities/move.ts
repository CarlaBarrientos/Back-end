import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";
import { PlayerEntity } from "./player";
import { PositionEntity } from './position';

@Entity()
export class MoveEntity {
    @ObjectIdColumn()
    id!: ObjectID

    @Column(() => PlayerEntity)
    player!: PlayerEntity

    @Column(() => PositionEntity)
    startPosition!: PositionEntity

    @Column(() => PositionEntity)
    endPosition!: PositionEntity
}