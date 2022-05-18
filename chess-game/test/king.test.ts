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
        king = new King('white', 'alive', 'king');
        king1 = new King('white', 'alive', 'king')
        board.getBoard()[3][3] = new Position('D', 4, king);
        board.getBoard()[3][4] = new Position('E', 4, new Pawn('white', 'alive', 'pawn'));
        //board.getBoard()[2][2] = new Position('C', 3, new Pawn('black', 'alive', 'pawn'));
        board.getBoard()[6][5] = new Position('F', 7, king1);
        board.getBoard()[7][4] = new Position('E', 8, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[7][5] = new Position('F', 8, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[7][6] = new Position('G', 8, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[6][4] = new Position('G', 7, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[6][6] = new Position('E', 7, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[5][4] = new Position('F', 6, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[5][5] = new Position('E', 6, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[5][6] = new Position('G', 6, new Pawn('white', 'alive', 'pawn'));
    });
    
    it('should move up', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('D', 5, null))).toBe(true);
    });

    it('should move down', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('D', 3, null))).toBe(true);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('E', 4, null))).toBe(false);
    });

    it('should move left', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('C', 4, null))).toBe(true);
    });

    it('should move diagonal left up', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('C', 5, null))).toBe(true);
    });

    it('should move diagonal left down', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('C', 3, null))).toBe(true);
    });

    it('should move diagonal right up', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('E', 5, null))).toBe(true);
    });

    it('should move diagonal right down', () => {
        expect(king.canMove(board, new Position('D', 4, null), new Position('E', 3, null))).toBe(true);
    });

    it('should not move up if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('F', 8, null))).toBe(false);
    });

    it('should not move down if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('F', 6, null))).toBe(false);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('G', 7, null))).toBe(false);
    });

    it('should not move left if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('E', 7, null))).toBe(false);
    });

    it('should not move diagonal right up if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('G', 8, null))).toBe(false);
    });

    it('should not move diagonal right down if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('G', 6, null))).toBe(false);
    });

    it('should not move diagonal left up if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('E', 8, null))).toBe(false);
    });

    it('should not move diagonal left down if it is blocked by a white piece', () => {
        expect(king1.canMove(board, new Position('F', 7, null), new Position('E', 6, null))).toBe(false);
    });
});