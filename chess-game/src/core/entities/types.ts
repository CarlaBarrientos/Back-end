export type Column = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Color = 'black' | 'white';
export type PieceStatus = 'killed' | 'alive';
export type PieceName = 'rook' | 'pawn' | 'bishop' | 'king' | 'knight' | 'queen';
export type GameStatus = 'ready' | 'playing' | 'jaque' | 'blackWin' | 'whiteWin' | 'waiting';
export const TYPES = {IGameRepository: Symbol.for('IGameRepository')};