import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class PieceEntity {
    @ObjectIdColumn()
    id!: ObjectID

    @Column()
    color!: string

    @Column()
    status!: string

    @Column()
    name!: string
}