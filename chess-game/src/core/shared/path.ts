import Position from '../entities/position';
export default class Path {

    private distance: number;

    constructor(private starPosition: Position, private endPosition: Position) {
        this.distance = this.calculateDistance(starPosition, endPosition);
    }

    calculateDistance(startPosition: Position, endPosition: Position): number {
        const startRow = startPosition.getRow();
        const startColumn = startPosition.getColumn();
        const endRow = endPosition.getRow();
        const endColumn = endPosition.getColumn();
        // if(this.isVerticalPath(startRow, endRow)) {

        // }
        
        return 0;
    }

    // isVerticalPath(startRow: number, endRow: number){
    //     return 
    // }

}