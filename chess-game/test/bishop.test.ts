import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Bishop from '../src/core/entities/bishop';
import Pawn from '../src/core/entities/pawn';

describe('Bishop', () => {
    let board: Board;
    let bishop: Bishop;
    beforeEach(() => {
        board = new Board();
        bishop = new Bishop('white', 'alive', 'bishop');
        board.getBoard()[4][4] = new Position('E', 5, bishop);
        board.getBoard()[6][6] = new Position('G', 7, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[6][2] = new Position('C', 7, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[1][1] = new Position('B', 2, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[2][6] = new Position('G', 3, new Pawn('white', 'alive', 'pawn'));
        board.getBoard()[2][2] = new Position('C', 3, new Pawn('black', 'alive', 'pawn'));
    });
    
    it('should move diagonal up right', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('F', 6, null))).toBe(true);
    });

    it('should move diagonal up left', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('D', 6, null))).toBe(true);
    });

    it('should move diagonal down right', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('F', 4, null))).toBe(true);
    });

    it('should move diagonal down left', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('D', 4, null))).toBe(true);
    });

    it('should not move up', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('E', 7, null))).toBe(false);
    });

    it('should not move diagonal up right if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('H', 8, null))).toBe(false);
    });

    it('should not move diagonal up left if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('B', 8, null))).toBe(false);
    });

    it('should not move diagonal down right if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('H', 2, null))).toBe(false);
    });

    it('should not diagonal down left if it is blocked by a white piece', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('A', 1, null))).toBe(false);
    });

    it('should move to a place with a black piece', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('C', 3, null))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(bishop.canMove(board, new Position('E', 5, null), new Position('G', 7, null))).toBe(false);
    });
});