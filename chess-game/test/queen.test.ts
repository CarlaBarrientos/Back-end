import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Queen from '../src/core/entities/queen';
import Pawn from '../src/core/entities/pawn';

describe('Queen', () => {
    let board: Board;
    let queen: Queen;
    beforeEach(() => {
        board = new Board();
        queen = new Queen('white', 'queen', 4, 'D');
        board.addPiece(new Pawn('black', 'pawn', 6, 'F'));
        board.addPiece(new Pawn('white', 'pawn', 7, 'D'));
        board.addPiece(new Pawn('white', 'pawn', 7, 'G'));
        board.addPiece(new Pawn('white', 'pawn', 4, 'G'));
        board.addPiece(new Pawn('white', 'pawn', 3, 'F'));
        board.addPiece(new Pawn('white', 'pawn', 1, 'D'));
        board.addPiece(new Pawn('white', 'pawn', 2, 'B'));
        board.addPiece(new Pawn('white', 'pawn', 4, 'B'));
        board.addPiece(new Pawn('white', 'pawn', 6, 'B'));
    });
    
    it('should move up', () => {
        expect(queen.canMove(board, new Position(6, 'D'))).toBe(true);
    });

    it('should move down', () => {
        expect(queen.canMove(board, new Position(2, 'D'))).toBe(true);
    });

    it('should move right', () => {
        expect(queen.canMove(board, new Position(4, 'F'))).toBe(true);
    });

    it('should move left', () => {
        expect(queen.canMove(board, new Position(4, 'C'))).toBe(true);
    });

    it('should move diagonal left up', () => {
        expect(queen.canMove(board, new Position(5, 'C'))).toBe(true);
    });

    it('should move diagonal left down', () => {
        expect(queen.canMove(board, new Position(3, 'C'))).toBe(true);
    });

    it('should move diagonal right up', () => {
        expect(queen.canMove(board, new Position(5, 'E'))).toBe(true);
    });

    it('should move diagonal right down', () => {
        expect(queen.canMove(board, new Position(3, 'E'))).toBe(true);
    });

    it('should not move up if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(8, 'D'))).toBe(false);
    });

    it('should not move down if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(1, 'D'))).toBe(false);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(4, 'H'))).toBe(false);
    });

    it('should not move left if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(4, 'A'))).toBe(false);
    });

    it('should not move diagonal right up if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(8, 'H'))).toBe(false);
    });

    it('should not move diagonal right down if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(2, 'G'))).toBe(false);
    });

    it('should not move diagonal left up if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(7, 'A'))).toBe(false);
    });

    it('should not move diagonal left down if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position(1, 'A'))).toBe(false);
    });

    it('should move to a place with a black piece', () => {
        expect(queen.canMove(board, new Position(6, 'F'))).toBe(true);
    });
});