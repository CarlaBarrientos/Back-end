import Attendance from "./attendance";

export default class User {
    constructor(
        private _name: string, 
        private _lastname: string, 
        private _nickname: string,
        private _attendances?: Attendance[],
        private _attendance?: number,
        private _id?: string) {}
    
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get lastname() {
        return this._lastname;
    }

    get nickname() {
        return this._nickname;
    }
    
    get attendance() {
        return this._attendance;
    }

    get attendances() {
        return this._attendances;
    }
}