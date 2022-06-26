export default class User {
    constructor(
        private _id: number, 
        private _name: string, 
        private _lastname: string, 
        private _nickname: string) {}
    
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
}