import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from './entities/user.entity';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [UserEntity]
});

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected.')
    })
    .catch((error) => console.log(error))