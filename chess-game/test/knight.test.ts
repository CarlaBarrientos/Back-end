import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Knight from '../src/core/entities/knight';
import Pawn from '../src/core/entities/pawn';

describe('Knight', () => {
    let board: Board;
    let knight: Knight;
    beforeEach(() => {
        board = new Board();
        knight = new Knight('white', 'alive', 'knight');
        board.getBoard()[3][3] = new Position('D', 4, knight);
        board.getBoard()[1][4] = new Position('E', 2, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[1][2] = new Position('C', 2, new Pawn('black', 'alive', 'pawn'));
    });

    it('should move to F3', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('F', 3, null))).toBe(true);
    });

    it('should move F5', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('F', 5, null))).toBe(true);
    });

    it('should move to E6', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('E', 6, null))).toBe(true);
    });

    it('should move to C6', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('C', 6, null))).toBe(true);
    });

    it('should move to B5', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('B', 5, null))).toBe(true);
    });

    it('should move to B3', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('B', 3, null))).toBe(true);
    });

    it('should move to C2', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('C', 2, null))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('E', 2, null))).toBe(false);
    });

    it('should not move due to an invalid move', () => {
        expect(knight.canMove(board, new Position('D', 4, null), new Position('F', 4, null))).toBe(false);
    });
});