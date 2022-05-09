import { Color } from "./types";

export default class Player {
    constructor(private readonly color: Color){}

    getColor() {
        return this.color;
    }
}