import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    nickname!: string

    @Column()
    name!: string

    @Column()
    lastname!: string

    @Column({default: 0})
    attendance: number
}