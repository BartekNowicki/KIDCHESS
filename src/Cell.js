    export class Cell {
    constructor (row, col, size) {
        // super();
        this.row = row;
        this.col = col;
        // this.occupied = false;
        // this.hasPiece = false;
        this.piece = "";
        this.selector = `[data-row="${this.row}"][data-col="${this.col}"]`;
        this.size = size;
        this.element = this.createElement();
        this.fromTop = null;
        this.fromLeft = null;
    }

    createElement() {
        const element = document.createElement('div');
        element.setAttribute('class', 'boardCellDiv');		
        element.setAttribute('style', `width: ${this.size}px; height:${this.size}px;`);
        element.setAttribute('data-row', this.row);				
        element.setAttribute('data-col', this.col);				
        // console.log(element, this.size);
        return element;
    }

    takeMeasurements() {
        if (!this.element) return console.warn('measuring the board - elements missing!');
        // console.log('TOP:', this.element.offsetTop, 'LEFT:' , this.element.offsetLeft); 
        this.fromTop = this.element.offsetTop;
        this.fromLeft = this.element.offsetLeft;
    }
}