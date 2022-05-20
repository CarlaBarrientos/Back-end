import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Pawn from '../src/core/entities/pawn';
import King from '../src/core/entities/king';
import Knight from '../src/core/entities/knight';

describe('King', () => {
    let board: Board;
    let whiteKing: King;
    let blackKing: King;
    let blackKingCheck: King;
    beforeEach(() => {
        board = new Board();
        whiteKing = new King('white', 'king', 4, 'D');
        blackKing = new King('black', 'king', 7, 'F');
        blackKingCheck = new King('black', 'king', 1, 'G');
        board.addPiece(new Knight('white', 'knight', 4, 'H'))
        board.addPiece(new Pawn('white', 'pawn', 4, 'E'));
        board.addPiece(new Pawn('black', 'pawn', 8, 'F'));
        board.addPiece(new Pawn('black', 'pawn', 8, 'G'));
        board.addPiece(new Pawn('black', 'pawn', 7, 'G'));
        board.addPiece(new Pawn('black', 'pawn', 7, 'E'));
        board.addPiece(new Pawn('black', 'pawn', 6, 'F'));
        board.addPiece(new Pawn('black', 'pawn', 6, 'E'));
        board.addPiece(new Pawn('black', 'pawn', 6, 'G'));
    });
    
    it('should move up', () => {
        expect(whiteKing.canMove(board, new Position(5, 'D'))).toBe(true);
    });

    it('should move down', () => {
        expect(whiteKing.canMove(board, new Position(3, 'D'))).toBe(true);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(whiteKing.canMove(board, new Position(4, 'E'))).toBe(false);
    });

    it('should move left', () => {
        expect(whiteKing.canMove(board, new Position(4, 'C'))).toBe(true);
    });

    it('should move diagonal left down', () => {
        expect(whiteKing.canMove(board, new Position(3, 'C'))).toBe(true);
    });

    it('should move not diagonal right up, checkmate', () => {
        expect(whiteKing.canMove(board, new Position(5, 'E'))).toBe(false);
    });

    it('should move diagonal right down', () => {
        expect(whiteKing.canMove(board, new Position(3, 'E'))).toBe(true);
    });

    it('should not move up if it is blocked by a black piece', () => {
        expect(blackKing.canMove(board, new Position(8, 'F'))).toBe(false);
    });

    it('should not move down if it is blocked by a black piece', () => {
        expect(blackKing.canMove(board, new Position(6, 'F'))).toBe(false);
    });

    it('should not move right if it is blocked by a black piece', () => {
        expect(blackKing.canMove(board, new Position(7, 'G'))).toBe(false);
    });

    it('should not move left if it is blocked by a black piece', () => {
        expect(blackKing.canMove(board, new Position(7, 'E'))).toBe(false);
    });

    it('should not move diagonal right up if it is blocked by a black piece', () => {
        expect(blackKing.canMove(board, new Position(8, 'G'))).toBe(false);
    });

    it('should not move diagonal right down, checkmate', () => {
        expect(blackKing.canMove(board, new Position(6, 'G'))).toBe(false);
    });

    it('should move diagonal left up', () => {
        expect(blackKing.canMove(board, new Position(8, 'E'))).toBe(true);
    });

    it('should not move diagonal left down if it is blocked by a black piece', () => {
        expect(blackKing.canMove(board, new Position(6, 'E'))).toBe(false);
    });

});