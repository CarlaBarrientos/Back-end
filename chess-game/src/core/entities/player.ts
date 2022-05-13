import { Color } from "./types";

export default class Player {
    constructor(public color: Color, private name: string){}

    getColor() {
        return this.color;
    }
}