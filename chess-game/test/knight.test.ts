import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Knight from '../src/core/entities/knight';
import Pawn from '../src/core/entities/pawn';

describe('Knight', () => {
    let board: Board;
    let knight: Knight;
    beforeEach(() => {
        board = new Board();
        knight = new Knight('white', 'knight', 4, 'D');
        board.addPiece(new Pawn('white', 'pawn', 2, 'E'));
        board.addPiece(new Pawn('black', 'pawn', 2, 'C'));
    });

    it('should move to F3', () => {
        expect(knight.canMove(board, new Position(3, 'F'))).toBe(true);
    });

    it('should move F5', () => {
        expect(knight.canMove(board, new Position(5, 'F'))).toBe(true);
    });

    it('should move to E6', () => {
        expect(knight.canMove(board, new Position(6, 'E'))).toBe(true);
    });

    it('should move to C6', () => {
        expect(knight.canMove(board, new Position(6, 'C'))).toBe(true);
    });

    it('should move to B5', () => {
        expect(knight.canMove(board, new Position(5, 'B'))).toBe(true);
    });

    it('should move to B3', () => {
        expect(knight.canMove(board, new Position(3, 'B'))).toBe(true);
    });

    it('should move to C2', () => {
        expect(knight.canMove(board, new Position(2, 'C'))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(knight.canMove(board, new Position(2, 'E'))).toBe(false);
    });

    it('should not move due to an invalid move', () => {
        expect(knight.canMove(board, new Position(4, 'F'))).toBe(false);
    });
});