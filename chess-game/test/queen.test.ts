import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Queen from '../src/core/entities/queen';
import Pawn from '../src/core/entities/pawn';

describe('Queen', () => {
    let board: Board;
    let queen: Queen;
    let queen1: Queen;
    beforeEach(() => {
        board = new Board();
        queen = new Queen('white', 'alive', 'queen');
        queen1 = new Queen('white', 'alive', 'queen')
        board.getBoard()[3][3] = new Position('D', 4, queen);
        // board.getBoard()[3][4] = new Position('E', 4, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[5][5] = new Position('F', 6, new Pawn('black', 'alive', 'pawn'));
        // board.getBoard()[6][5] = new Position('F', 7, queen);
        board.getBoard()[6][3] = new Position('D', 7, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[6][6] = new Position('G', 7, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[3][6] = new Position('G', 4, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[1][5] = new Position('F', 2, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[0][3] = new Position('D', 1, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[1][1] = new Position('B', 2, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[3][1] = new Position('B', 4, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[5][1] = new Position('B', 6, new Pawn('white', 'alive', 'pawn'));
    });
    
    it('should move up', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('D', 6, null))).toBe(true);
    });

    it('should move down', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('D', 2, null))).toBe(true);
    });

    it('should move right', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('F', 4, null))).toBe(true);
    });

    it('should move left', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('C', 4, null))).toBe(true);
    });

    it('should move diagonal left up', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('C', 5, null))).toBe(true);
    });

    it('should move diagonal left down', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('C', 3, null))).toBe(true);
    });

    it('should move diagonal right up', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('E', 5, null))).toBe(true);
    });

    it('should move diagonal right down', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('E', 3, null))).toBe(true);
    });

    it('should not move up if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('D', 8, null))).toBe(false);
    });

    it('should not move down if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('D', 1, null))).toBe(false);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('H', 4, null))).toBe(false);
    });

    it('should not move left if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('A', 4, null))).toBe(false);
    });

    it('should not move diagonal right up if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('H', 8, null))).toBe(false);
    });

    it('should not move diagonal right down if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('G', 2, null))).toBe(false);
    });

    it('should not move diagonal left up if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('A', 7, null))).toBe(false);
    });

    it('should not move diagonal left down if it is blocked by a white piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('A', 1, null))).toBe(false);
    });

    it('should move to a place with a black piece', () => {
        expect(queen.canMove(board, new Position('D', 4, null), new Position('F', 6, null))).toBe(true);
    });
});