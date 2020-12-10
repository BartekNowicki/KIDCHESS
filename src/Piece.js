import { loaderLoadedSvgHTML, allCells, allPieces } from './index.js';

export class Piece {
        constructor (pieceName, parentCell, colorSelection, smaller) {
            this.name = pieceName;
            this.parentCell = parentCell;
            // this.allCells = allCells;
            this.colorSelection = colorSelection;
            this.smaller = smaller;
            this.element = null;
            this.fromTop = null;
            this.fromLeft = null;
            this.active = false;
            this.moveOptionCells = [];
            this.allCellsFromIndex = allCells;
            this.allPiecesFromIndex = allPieces;
            this.createThePiece();
            
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

        displayMoveOptions(row, col, pieceName) {
            this.allCellsFromIndex.flat().forEach(cell => cell.element.classList.remove("activeMoveOptionCell"));            
            this.moveOptionCells.length = 0;            
            this.moveOptionCells.push(this.parentCell);
            this.moveOptionCells.forEach(cell => cell.element.classList.add("activeMoveOptionCell"));
            // console.log(`CLICKED ROW: ${row} COL: ${col}`);
        }

        deactivateAllPieces() {
            this.allPiecesFromIndex.forEach(piece => {
                piece.active = false;
                piece.element.classList.remove('activePiece');
            });
        }

        handlePieceClick() {
            if (this.active) {
                this.deactivateAllPieces();
                return
            }
            this.deactivateAllPieces();
            this.element.classList.add("activePiece");
            this.active = true;


            // this.displayMoveOptions(this.parentCell.row, this.parentCell.col, this.name);

            //MARK
            console.log(`${this.colorSelection} ${this.name} activated: ${this.active}`);    
        }
        
        createThePiece() {
            const chessPieceHTML = loaderLoadedSvgHTML[this.findPieceIndex(this.name)];
            this.parentCell.piece = this.name;
            // console.log('PIECE NAME: ', this.parentCell.piece); 
            // console.log('PARENT SIZE: ', this.parentCell.size); 
            // console.log('PIECE HTML: ', chessPieceHTML);
            this.element = document.createElement('div');
            this.element.innerHTML = chessPieceHTML;
            this.parentCell.element.appendChild(this.element);

            this.colorSelection === "first" 
            ? this.element.setAttribute('class', 'chessPieceDivColor1')
            : this.element.setAttribute('class', 'chessPieceDivColor2');

            this.fromTop = this.parentCell.fromTop;
            this.fromLeft = this.parentCell.fromLeft;
            
            this.element.style.left = `${this.fromLeft}px`;
            this.element.style.top = `${this.fromTop}px`;
            this.element.style.height = `${this.parentCell.size}px`;
            this.element.style.width = `${this.parentCell.size}px`;
            if (this.smaller) {
                this.element.classList.add('smallerSvgInside');
            }
            
            this.element.addEventListener('click', this.handlePieceClick.bind(this));
        }
        
            
}