import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Rook from '../src/core/entities/rook';
import Pawn from '../src/core/entities/pawn';

describe('Rook', () => {
    let board: Board;
    let rook: Rook;
    beforeEach(() => {
        board = new Board();
        rook = new Rook('white', 'alive', 'rook');
        board.getBoard()[3][3] = new Position('D', 4, rook);
        board.getBoard()[3][1] = new Position('B', 4, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[1][3] = new Position('D', 2, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[3][6] = new Position('G', 4, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[6][3] = new Position('D', 7, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[5][3] = new Position('D', 6, new Pawn('black', 'alive', 'pawn'));
    });
    
    it('should move up', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('D', 5, null))).toBe(true);
    });

    it('should move down', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('D', 3, null))).toBe(true);
    });

    it('should move right', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('E', 4, null))).toBe(true);
    });

    it('should move left', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('C', 4, null))).toBe(true);
    });

    it('should not move diagonal', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('E', 5, null))).toBe(false);
    });

    it('should not move up if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('D', 8, null))).toBe(false);
    });

    it('should not move down if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('D', 1, null))).toBe(false);
    });

    it('should not move right if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('H', 4, null))).toBe(false);
    });

    it('should not move left if it is blocked by a white piece', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('A', 4, null))).toBe(false);
    });

    it('should move to a place with a black piece', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('D', 6, null))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(rook.canMove(board, new Position('D', 4, null), new Position('D', 7, null))).toBe(false);
    });
});