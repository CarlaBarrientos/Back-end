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