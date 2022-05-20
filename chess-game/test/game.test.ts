import Game from '../src/core/entities/game';
import Player from '../src/core/entities/player';
import Position from '../src/core/entities/position';
import Piece from '../src/core/entities/piece';
describe('Game', () => {
    let game: Game;
    beforeEach(() => {
        game = new Game()
        game.addPlayer(new Player('white'));
        game.addPlayer(new Player('black'));
        game.setStatus('playing');
        game.getBoard().fillBoardWithPieces();
    });

    it('should play correctly', () => {
        let whitePawn = game.getBoard().getPiece(new Position(2, 'D'));
        let blackPawn = game.getBoard().getPiece(new Position(7, 'E'));
        expect(whitePawn?.canMove(game.getBoard(), new Position(4, 'D'))).toBe(true);
        whitePawn?.moveTo(new Position(4, 'D'));
        expect(whitePawn?.getPosition()).toStrictEqual(new Position(4, 'D'));

        expect(blackPawn?.canMove(game.getBoard(), new Position(5, 'E'))).toBe(true);
        blackPawn?.moveTo(new Position(5, 'E'));
        expect(blackPawn?.getPosition()).toStrictEqual(new Position(5, 'E'));

        expect(whitePawn?.canMove(game.getBoard(), new Position(6, 'F'))).toBe(true);
        expect(whitePawn?.canEat(game.getBoard(), new Position(6, 'F'))).toBeInstanceOf(Piece);
        const eatenPiece = whitePawn?.canEat(game.getBoard(), new Position(6, 'F'));
        expect(eatenPiece).toBeInstanceOf(Piece);

        if(eatenPiece !== undefined){
            whitePawn?.eatPiece(game.getBoard(), eatenPiece);
        }

        whitePawn?.moveTo(new Position(6, 'F'));
        
        expect(whitePawn?.getPosition()).toStrictEqual(new Position(6, 'F'));
        expect(game.getBoard().getPiece(new Position(5, 'E'))).toBe(undefined);

    });
});