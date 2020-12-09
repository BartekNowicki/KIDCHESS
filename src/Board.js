import { TheDOM, DATA } from './TheDOM.js';
import { loaderDimentions } from './index.js';
import { loaderLoadedSvgHTML } from './index.js';
import { Cell } from './Cell.js';

class Board extends TheDOM {    
    constructor() {
    super(DATA.BOARD_SELECTOR);
    this.boardSize = null;
    this.cells = [];
    this.pieceDivs = [];
    this.offsets = {};      
//         this.masterTimeline = null;
//         this.ease = null;
    }

    generateCells() {
        this.cellSize = Math.floor(this.boardSize / 8);
        console.log(this.boardSize, this.cellSize);
            for (let row = 0; row < 8; row++) {
                this.cells[row] = [];                
                for (let col = 0; col < 8; col++) {
                    const newCell = new Cell(row, col, this.cellSize);
                    // console.log(newCell.element);
                    this.cells[row].push(newCell);
                    this.element.appendChild(newCell.element);                    
                }
            }
            this.cells.flat().forEach(cell => cell.takeMeasurements());
            // console.log('ILOŚĆ WYGENEROWANYCH KOMÓREK: ', this.cells.flat().length); 
    }

    findPieceIndex(piece) {
      let index = -1;
      loaderLoadedSvgHTML.forEach(item => {
        if (item.includes(piece)) {
          index = loaderLoadedSvgHTML.indexOf(item);
        }
      });
      return index
    }

    insertPiece(piece, parentCell, colorSelection = "none", smaller = false) {
        if (colorSelection === "none") {
          throw new Error(`ERROR: color piece color not set`);
        }
        const chessPieceHTML = loaderLoadedSvgHTML[this.findPieceIndex(piece)]; 
        // console.log('PIECE:', chessPieceHTML)
        const chessPieceDiv = document.createElement('div');
        chessPieceDiv.innerHTML = chessPieceHTML;
        parentCell.appendChild(chessPieceDiv);
        colorSelection === "first" 
        ? chessPieceDiv.setAttribute('class', 'chessPieceDivColor1')
        : chessPieceDiv.setAttribute('class', 'chessPieceDivColor2');
        chessPieceDiv.style.left = `${parentCell.fromLeft}px`;
        chessPieceDiv.style.top = `${parentCell.fromTop}px`;
        chessPieceDiv.style.height = `${this.cellSize}px`;
        chessPieceDiv.style.width = `${this.cellSize}px`;
        if (smaller) {
          chessPieceDiv.classList.add('smallerSvgInside');
        }
        // console.log('INSERTING: ', piece, parentCell, colorSelection); 
      }	
  
      setPieces() {
        //first = white, bottom        
        
            this.insertPiece('rook', this.cells[7][0].element, "first", false);
            this.insertPiece('rook', this.cells[7][7].element, "first", false);
            this.insertPiece('rook', this.cells[0][0].element, "second", false);
            this.insertPiece('rook', this.cells[0][7].element, "second", false);

            this.insertPiece('knight', this.cells[7][1].element, "first", true);
            this.insertPiece('knight', this.cells[7][6].element, "first", true);
            this.insertPiece('knight', this.cells[0][1].element, "second", true);
            this.insertPiece('knight', this.cells[0][6].element, "second", true);

            this.insertPiece('bishop', this.cells[7][2].element, "first", false);
            this.insertPiece('bishop', this.cells[7][5].element, "first", false);
            this.insertPiece('bishop', this.cells[0][2].element, "second", false);
            this.insertPiece('bishop', this.cells[0][5].element, "second", false); 

            this.insertPiece('king', this.cells[7][3].element, "first", false);
            this.insertPiece('king', this.cells[0][3].element, "second", false);

            this.insertPiece('queen', this.cells[7][4].element, "first", false);
            this.insertPiece('queen', this.cells[0][4].element, "second", false);

            for (let i = 0; i <= 7; i++ ) {
              this.insertPiece('pawn', this.cells[6][i].element, "first", false);
              this.insertPiece('pawn', this.cells[1][i].element, "second", false);
            }
      }

    initializeBoard() {
        this.toggleVisibility(this.element, 'visible');
        document.documentElement.style.setProperty("--pieceColor1", "green");
        document.documentElement.style.setProperty("--pieceColor2", "red");
        // console.log('initializing a new board instance');
        const { width, height } = loaderDimentions;
        this.boardSize = Math.min(width, height);        
        this.element.style.width = this.boardSize + "px";
        this.element.style.height = this.boardSize + "px";
        // console.log(this.size);
        // console.log(this.element);
        this.generateCells();
        this.pieceColor1 = "#f44336";
        this.pieceColor2 = "#f44336"; 
        this.setPieces();
        
        
        //         this.ease = Elastic.easeOut.config(0.5, 1);
        //         this.scoreModule = new Score;
        //         this.cells[0][2].element.style.backgroundColor = "brown";
        //         this.cells[0][3].element.style.backgroundColor = "brown";
        //         this.cells[1][2].element.style.backgroundColor = "brown";
        //         this.cells[1][3].element.style.backgroundColor = "brown";
    }
}

export const board = new Board();
