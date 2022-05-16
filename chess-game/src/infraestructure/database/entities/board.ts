import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';
import { PositionEntity } from "./position";

@Entity()
export class BoardEntity {
    @ObjectIdColumn()
    id!: ObjectID

    @Column(() => PositionEntity)
    positions!: PositionEntity[]
}
