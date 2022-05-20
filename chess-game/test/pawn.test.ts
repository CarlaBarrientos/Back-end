import Board from '../src/core/entities/board';
import Position from '../src/core/entities/position';
import Pawn from '../src/core/entities/pawn';
import Piece from '../src/core/entities/piece';

describe('Pawn', () => {
    let board: Board;
    let pawnWhite: Pawn;
    let pawnBlack: Pawn;
    let pawnWhiteBlocked: Pawn;
    beforeEach(() => {
        board = new Board();

        pawnWhite = new Pawn('white', 'pawn', 2, 'E');
        board.addPiece(pawnWhite);
        board.addPiece(new Pawn('black', 'pawn', 3, 'D'));
        board.addPiece(new Pawn('black', 'pawn', 3, 'F'));

        pawnBlack = new Pawn('black', 'pawn', 7, 'C');
        board.addPiece(pawnBlack);
        board.addPiece(new Pawn('white', 'pawn', 6, 'B'));
        board.addPiece(new Pawn('white', 'pawn', 6, 'D'));

        pawnWhiteBlocked = new Pawn('white', 'pawn', 2, 'H');
        board.addPiece(pawnWhiteBlocked);
        board.addPiece(new Pawn('white', 'pawn', 3, 'H'));
    });
    
    it('white should move 2 up', () => {
        expect(pawnWhite.canMove(board, new Position(4, 'E'))).toBe(true);
    });

    it('white should move move 1 up', () => {
        expect(pawnWhite.canMove(board, new Position(3, 'E'))).toBe(true);
    });

    it('white can eat right', () => {
        expect(pawnWhite.canEat(board, new Position(4, 'G'))).toBeInstanceOf(Piece);
    });

    it('white should eat right', () => {
        expect(pawnWhite.canMove(board, new Position(4, 'G'))).toBe(true);
    });

    it('white should eat left', () => {
        expect(pawnWhite.canMove(board, new Position(4, 'C'))).toBe(true);
    });

    it('black should move 2 up', () => {
        expect(pawnBlack.canMove(board, new Position(5, 'C'))).toBe(true);
    });

    it('black should move move 1 up', () => {
        expect(pawnBlack.canMove(board, new Position(6, 'C'))).toBe(true);
    });

    it('black should eat right', () => {
        expect(pawnBlack.canMove(board, new Position(5, 'E'))).toBe(true);
    });

    it('black can eat left', () => {
        expect(pawnBlack.canEat(board, new Position(5, 'A'))).toBeInstanceOf(Piece);
    });

    it('black should eat left', () => {
        expect(pawnBlack.canMove(board, new Position(5, 'A'))).toBe(true);
    });

    it('white blocked should not move', () => {
        expect(pawnWhiteBlocked.canMove(board, new Position(4, 'H'))).toBe(false);
    });
});