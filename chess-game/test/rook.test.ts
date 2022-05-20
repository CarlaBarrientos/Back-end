import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Rook from '../src/core/entities/rook';
import Pawn from '../src/core/entities/pawn';

describe('Rook', () => {
    let board: Board;
    let rook: Rook;
    beforeEach(() => {
        board = new Board();
        rook = new Rook('white', 'rook', 4, 'D');
        board.addPiece(new Pawn('white', 'pawn', 4, 'B'));
        board.addPiece(new Pawn('white', 'pawn', 2, 'D'));
        board.addPiece(new Pawn('white', 'pawn', 4, 'G'));
        board.addPiece(new Pawn('white', 'pawn', 7, 'D'));
        board.addPiece(new Pawn('black', 'pawn', 6, 'D'));
    });
    
    it('should move up', () => {
        expect(rook.canMove(board, new Position(5, 'D'))).toBe(true);
    });

    it('should move down', () => {
        expect(rook.canMove(board, new Position(3, 'D'))).toBe(true);
    });

    it('should move right', () => {
        expect(rook.canMove(board, new Position(4, 'E'))).toBe(true);
    });

    it('should move left', () => {
        expect(rook.canMove(board, new Position(4, 'C'))).toBe(true);
    });

    it('should not move diagonal', () => {
        expect(rook.canMove(board, new Position(5, 'E'))).toBe(false);
    });

    it('should not move up if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position(8, 'D'))).toBe(false);
    });

    it('should not move down if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position(1, 'D'))).toBe(false);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position(4, 'H'))).toBe(false);
    });

    it('should not move left if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position(4, 'A'))).toBe(false);
    });

    it('should move to a place with a black piece', () => {
        expect(rook.canMove(board, new Position(6, 'D'))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(rook.canMove(board, new Position(4, 'B'))).toBe(false);
    });
});