export default class Attendance {
    constructor(
        private _fromHour: string, 
        private _toHour: string,
        private _date: Date, 
        private _notes:string,
        private _userId: string,
        private _id?: string) {}
    
    get id() {
        return this._id;
    }

    get date() {
        return this._date;
    }

    get fromHour() {
        return this._fromHour;
    }

    get toHour() {
        return this._toHour;
    }
    
    get userId() {
        return this._userId;
    }

    get notes() {
        return this._notes;
    }
}