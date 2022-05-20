export type Column = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Color = 'black' | 'white';
export type PieceName = 'rook' | 'pawn' | 'bishop' | 'king' | 'knight' | 'queen';
export type GameStatus = 'playing' | 'jaque' | 'blackWin' | 'whiteWin' | 'waiting';

export const TYPES = {
    IGameRepository: Symbol.for('IGameRepository'),
    IGameService: Symbol.for('IGameService')
};

export const numberToRow: { [key: number]: Row } = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8
}

export const asciiToColumn: { [key: number]: Column } = {
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H'
}