import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Pawn from '../src/core/entities/pawn';

describe('Pawn', () => {
    let board: Board;
    let pawn1: Pawn;
    let pawn2: Pawn;
    let pawn3: Pawn;
    beforeEach(() => {
        board = new Board();
        pawn1 = new Pawn('white', 'alive', 'pawn');
        pawn2 = new Pawn('white', 'alive', 'pawn');
        pawn3 = new Pawn('white', 'alive', 'pawn');
        board.getBoard()[1][4] = new Position('E', 2, pawn1);
        board.getBoard()[3][1] = new Position('B', 4, pawn2);
        board.getBoard()[4][7] = new Position('H', 5, pawn3);
        board.getBoard()[2][5] = new Position('F', 3, new Pawn('black', 'alive', 'pawn'));
        board.getBoard()[4][2] = new Position('C', 5, new Pawn('black', 'alive', 'pawn'));
        board.getBoard()[5][7] = new Position('H', 6, new Pawn('black', 'alive', 'pawn'));
    });
    
    it('should move 2 up', () => {
        expect(pawn1.canMove(board, new Position('E', 2, null), new Position('E', 4, null))).toBe(true);
    });

    it('should move move 1 up', () => {
        expect(pawn1.canMove(board, new Position('E', 2, null), new Position('E', 3, null))).toBe(true);
    });

    it('should eat right', () => {
        expect(pawn1.canMove(board, new Position('E', 2, null), new Position('G', 4, null))).toBe(true);
    });

    it('should not move 2 up', () => {
        expect(pawn2.canMove(board, new Position('B', 4, null), new Position('B', 6, null))).toBe(false);
    });

    it('should move 1 up', () => {
        expect(pawn2.canMove(board, new Position('B', 4, null), new Position('B', 5, null))).toBe(true);
    });

    it('should eat right', () => {
        expect(pawn2.canMove(board, new Position('B', 4, null), new Position('D', 6, null))).toBe(true);
    });

    it('should not move to an occupied position', () => {
        expect(pawn3.canMove(board, new Position('H', 5, null), new Position('H', 6, null))).toBe(false);
    });

    it('should not move diagonal if not eating', () => {
        expect(pawn3.canMove(board, new Position('H', 5, null), new Position('G', 6, null))).toBe(false);
    });

    // it('should not move due to an invalid move', () => {
    //     expect(pawn3.canMove(board, new Position('H', 5, null), new Position('F', 7, null))).toBe(false);
    // });
});