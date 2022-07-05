// import "reflect-metadata";
// import { DataSource } from "typeorm";
// import { AttendanceEntity } from "./entities/attendance.entity";

// export const AppDataSource = new DataSource({
//     type: "mongodb",
//     host: "localhost",
//     port: 27017,
//     useNewUrlParser: true,
//     synchronize: true,
//     name: "project",
//     entities: [AttendanceEntity],
//     useUnifiedTopology: true
// });

// AppDataSource.initialize()
//     .then(() => {
//         console.log('Database connected.')
//     })
//     .catch((error) => console.log(error))
import mongoose from "mongoose";

export class DbConnection {

    private DB_CONNECTION = 'mongodb://localhost:27017/attendances';

    async connect(){
        await mongoose.connect(this.DB_CONNECTION, {
            
        });
        console.log('Database connected');
    }

    async disconnect(){
        await mongoose.disconnect();
    }
}