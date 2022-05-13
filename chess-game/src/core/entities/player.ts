import { Color } from "./types";

export default class Player {
    constructor(private readonly color: Color, private name: string){}

    getColor() {
        return this.color;
    }
}