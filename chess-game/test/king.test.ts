import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import King from '../src/core/entities/king';
import Pawn from '../src/core/entities/pawn';

describe('King', () => {
    let board: Board;
    let king: King;
    let king1: King;
    beforeEach(() => {
        board = new Board();
        king = new King('white', 'king', 4, 'D');
        king1 = new King('white', 'king', 7, 'F')
        board.addPiece(new Pawn('white', 'pawn', 4, 'E'));
        board.addPiece(new Pawn('white', 'pawn', 8, 'E'));
        board.addPiece(new Pawn('white', 'pawn', 8, 'F'));
        board.addPiece(new Pawn('white', 'pawn', 8, 'G'));
        board.addPiece(new Pawn('white', 'pawn', 7, 'G'));
        board.addPiece(new Pawn('white', 'pawn', 7, 'E'));
        board.addPiece(new Pawn('white', 'pawn', 6, 'F'));
        board.addPiece(new Pawn('white', 'pawn', 6, 'E'));
        board.addPiece(new Pawn('white', 'pawn', 6, 'G'));
    });
    
    it('should move up', () => {
        expect(king.canMove(board, new Position(5, 'D'))).toBe(true);
    });

    it('should move down', () => {
        expect(king.canMove(board, new Position(3, 'D'))).toBe(true);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(king.canMove(board, new Position(4, 'E'))).toBe(false);
    });

    it('should move left', () => {
        expect(king.canMove(board, new Position(4, 'C'))).toBe(true);
    });

    it('should move diagonal left up', () => {
        expect(king.canMove(board, new Position(5, 'C'))).toBe(true);
    });

    it('should move diagonal left down', () => {
        expect(king.canMove(board, new Position(3, 'C'))).toBe(true);
    });

    it('should move diagonal right up', () => {
        expect(king.canMove(board, new Position(5, 'E'))).toBe(true);
    });

    it('should move diagonal right down', () => {
        expect(king.canMove(board, new Position(3, 'E'))).toBe(true);
    });

    it('should not move up if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(8, 'F'))).toBe(false);
    });

    it('should not move down if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(6, 'F'))).toBe(false);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(7, 'G'))).toBe(false);
    });

    it('should not move left if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(7, 'E'))).toBe(false);
    });

    it('should not move diagonal right up if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(8, 'G'))).toBe(false);
    });

    it('should not move diagonal right down if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(6, 'G'))).toBe(false);
    });

    it('should not move diagonal left up if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(8, 'E'))).toBe(false);
    });

    it('should not move diagonal left down if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position(6, 'E'))).toBe(false);
    });
});