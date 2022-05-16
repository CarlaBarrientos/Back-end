import { IGameService } from '../service-interface/igame.service';
export type Column = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Color = 'black' | 'white';
export type PieceStatus = 'killed' | 'alive';
export type PieceName = 'rook' | 'pawn' | 'bishop' | 'king' | 'knight' | 'queen';
export type GameStatus = 'ready' | 'playing' | 'jaque' | 'blackWin' | 'whiteWin' | 'waiting';
export const TYPES = {
    IGameRepository: Symbol.for('IGameRepository'),
    IGameService: Symbol.for('IGameService')
};
export const column: {[key: string]: Column} ={
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H'
};
export const row: {[key: string]: Row} = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8
};