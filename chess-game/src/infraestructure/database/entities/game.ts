import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";
import { BoardEntity } from "./board";
import { MoveEntity } from "./move";
import { PlayerEntity } from './player';

@Entity()
export class GameEntity {
    @ObjectIdColumn()
    id!: ObjectID

    @Column()
    status!: string

    @Column()
    currentTurn!: string

    @Column(() => BoardEntity)
    board!: BoardEntity

    @Column(() => MoveEntity)
    moves!: MoveEntity[]

    @Column(() => PlayerEntity)
    players!: PlayerEntity[]

}