import "reflect-metadata"
import { DataSource } from "typeorm"
import { PieceEntity } from './entities/piece';

export const myDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    useNewUrlParser: true,
    synchronize: true,
    database: "chess",
    entities: [PieceEntity],
    useUnifiedTopology: true,

})
export class DbConnection {
    async initializeDb() {
        await myDataSource.initialize()
        .then(() => console.log('Database connected'))
        .catch((err) => console.log(err));
    }
}