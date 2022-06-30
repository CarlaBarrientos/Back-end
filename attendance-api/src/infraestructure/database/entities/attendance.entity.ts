import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AttendanceEntity {
    @ObjectIdColumn()
    id?: ObjectID

    @Column()
    fromHour!: string

    @Column()
    toHour!: string

    @Column()
    date!: Date

    @Column()
    notes: string

    @Column()
    userId: string
}