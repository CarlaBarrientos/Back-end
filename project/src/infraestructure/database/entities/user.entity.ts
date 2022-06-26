import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryColumn()
    id!: number;

    @Column()
    nickname!: string

    @Column()
    name!: string

    @Column()
    lastname!: string
}