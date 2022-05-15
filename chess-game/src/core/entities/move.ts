import Player from './player';
import Position from './position';
export default class Move {
    constructor(private player: Player, private initialPosition: Position, private endPosition: Position) {}

    getPlayer(){
        return this.player;
    }

    getInitialPos() {
        return this.initialPosition;
    }

    getEndPos() {
        return this.endPosition;
    }
}