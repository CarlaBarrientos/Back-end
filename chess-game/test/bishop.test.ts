import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Bishop from '../src/core/entities/bishop';
import Pawn from '../src/core/entities/pawn';

describe('Bishop', () => {
    let board: Board;
    let bishop: Bishop;
    beforeEach(() => {
        board = new Board();
        bishop = new Bishop('white', 'bishop', 5, 'E');
        board.addPiece(new Pawn('white', 'pawn', 7, 'G'));
        board.addPiece(new Pawn('white', 'pawn', 7, 'C'));
        board.addPiece(new Pawn('white', 'pawn', 2, 'B'));
        board.addPiece(new Pawn('white', 'pawn', 3, 'G'));
        board.addPiece(new Pawn('black', 'pawn', 3, 'C'));
    });
    
    it('should move diagonal up right', () => {
        expect(bishop.canMove(board, new Position(6, 'F'))).toBe(true);
    });

    it('should move diagonal up left', () => {
        expect(bishop.canMove(board, new Position(6, 'D'))).toBe(true);
    });

    it('should move diagonal down right', () => {
        expect(bishop.canMove(board, new Position(4, 'F'))).toBe(true);
    });

    it('should move diagonal down left', () => {
        expect(bishop.canMove(board, new Position(4, 'D'))).toBe(true);
    });

    it('should not move up', () => {
        expect(bishop.canMove(board, new Position(7, 'E'))).toBe(false);
    });

    it('should not move diagonal up right if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position(8, 'H'))).toBe(false);
    });

    it('should not move diagonal up left if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position(8, 'B'))).toBe(false);
    });

    it('should not move diagonal down right if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position(2, 'H'))).toBe(false);
    });

    it('should not diagonal down left if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position(1, 'A'))).toBe(false);
    });

    it('should move to a place with a black piece', () => {
        expect(bishop.canMove(board, new Position(3, 'C'))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(bishop.canMove(board, new Position(7, 'G'))).toBe(false);
    });
});