import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Pawn from '../src/core/entities/pawn';

describe('Pawn', () => {
    let board: Board;
    let pawn1: Pawn;
    let pawn2: Pawn;
    let pawn3: Pawn;
    let pawn4: Pawn;
    beforeEach(() => {
        board = new Board();
        pawn1 = new Pawn('white', 'pawn', 2, 'E');
        pawn2 = new Pawn('white', 'pawn', 4, 'B');
        pawn3 = new Pawn('white', 'pawn', 5, 'H');
        pawn4 = new Pawn('black', 'pawn', 7, 'C');
        board.addPiece(new Pawn('black', 'pawn', 3, 'F'));
        board.addPiece(new Pawn('black', 'pawn', 5, 'C'));
        board.addPiece(new Pawn('white', 'pawn', 6, 'H'));
        board.addPiece(new Pawn('white', 'pawn', 6, 'C'));
    });
    
    it('should move 2 up', () => {
        expect(pawn1.canMove(board, new Position(4, 'E'))).toBe(true);
    });

    it('should move move 1 up', () => {
        expect(pawn1.canMove(board, new Position(3, 'E'))).toBe(true);
    });

    it('should eat right', () => {
        expect(pawn1.canMove(board, new Position(4, 'G'))).toBe(true);
    });

    it('should not move 2 up', () => {
        expect(pawn2.canMove(board, new Position(6, 'B'))).toBe(false);
    });

    it('should move 1 up', () => {
        expect(pawn2.canMove(board, new Position(5, 'B'))).toBe(true);
    });

    it('should eat right', () => {
        expect(pawn2.canMove(board, new Position(6, 'D'))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(pawn3.canMove(board, new Position(6, 'H'))).toBe(false);
    });

    it('should not move to an occupied positioooon', () => {
        expect(pawn3.isBlocked(board, new Position(6, 'H'))).toBe(true);
    });

    it('should not move to an occupied positioooon', () => {
        expect(pawn4.isBlocked(board, new Position(6, 'C'))).toBe(true);
    });

    it('should not move diagonal if not eating', () => {
        expect(pawn3.canMove(board, new Position(6, 'G'))).toBe(false);
    });

    it('should not move due to an invalid move', () => {
        expect(pawn3.isValidMove(board, new Position(6, 'G'))).toBe(false);
    });
});