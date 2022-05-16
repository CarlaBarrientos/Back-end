import Player from './player';
import Position from './position';
export default class Move {
    constructor(private player: Player, private startPosition: Position, private endPosition: Position) {}

    getPlayer(){
        return this.player;
    }

    getStartPosition() {
        return this.startPosition;
    }

    getEndPosition() {
        return this.endPosition;
    }
}