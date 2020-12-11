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
            this.doneCheckingUpword = false;
            this.doneCheckingDownword = false;
            this.doneCheckingLeftword = false;
            this.doneCheckingRightword = false;
            this.doneCheckingDiagonallyupleft = false;
            this.doneCheckingDiagonallyupright = false;
            this.doneCheckingDiagonallydownleft = false;
            this.doneCheckingDiagonallydownright = false;
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

        clearMoveOptions() {
            this.allCellsFromIndex.flat().forEach(cell => cell.element.classList.remove("activeMoveOptionCell"));            
            this.moveOptionCells.length = 0; 
        }

        checkPerpendicularMovementOptions(row, col) {            
            let i = 1;
            this.doneCheckingUpword = false;
            this.doneCheckingDownword = false;
            this.doneCheckingLeftword = false;
            this.doneCheckingRightword = false;
            while(!this.doneCheckingUpword) {
                if (this.allCellsFromIndex[row - i] && this.allCellsFromIndex[row - i][col].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - i][col]);
                    i++;
                } else {
                    this.doneCheckingUpword = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDownword) {
                if (this.allCellsFromIndex[row + i] && this.allCellsFromIndex[row + i][col].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + i][col]);
                    i++;
                } else {
                    this.doneCheckingDownword = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingLeftword) {
                if (this.allCellsFromIndex[row][col - i] && this.allCellsFromIndex[row][col - i].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row][col - i]);
                    i++;
                } else {
                    this.doneCheckingLeftword = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingRightword) {
                if (this.allCellsFromIndex[row][col + i] && this.allCellsFromIndex[row][col + i].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row][col + i]);
                    i++;
                } else {
                    this.doneCheckingRightword = true;
                    i = 1;
                }
            }
        }

        checkDiagonalMovementOptions(row, col) {
            let i = 1;
            this.doneCheckingDiagonallyupleft = false;
            this.doneCheckingDiagonallyupright = false;
            this.doneCheckingDiagonallydownleft = false;
            this.doneCheckingDiagonallydownright = false;
            while(!this.doneCheckingDiagonallyupleft) {
                if (this.allCellsFromIndex[row - i] && this.allCellsFromIndex[row - i][col - i] && this.allCellsFromIndex[row - i][col - i].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - i][col - i]);
                    i++;
                } else {
                    this.doneCheckingDiagonallyupleft = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDiagonallyupright) {
                if (this.allCellsFromIndex[row - i] && this.allCellsFromIndex[row - i][col + i] && this.allCellsFromIndex[row - i][col + i].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - i][col + i]);
                    i++;
                } else {
                    this.doneCheckingDiagonallyupright = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDiagonallydownright) {
                if (this.allCellsFromIndex[row + i] && this.allCellsFromIndex[row + i][col + i] && this.allCellsFromIndex[row + i][col + i].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + i][col + i]);
                    i++;
                } else {
                    this.doneCheckingDiagonallydownright = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDiagonallydownleft) {
                if (this.allCellsFromIndex[row + i] && this.allCellsFromIndex[row + i][col - i] && this.allCellsFromIndex[row + i][col - i].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + i][col - i]);
                    i++;
                } else {
                    this.doneCheckingDiagonallydownleft = true;
                    i = 1;
                }
            }
        }

        displayMoveOptions(row, col, pieceName, colorSelection) {
            this.clearMoveOptions();
            if (pieceName === "pawn") {
                if (row === 0 || row === 7) return
                if (colorSelection === "first" && this.allCellsFromIndex[row - 1][col].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 1][col]);
                } else if (this.allCellsFromIndex[row + 1][col].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 1][col]);
                }
            } else if (pieceName === "knight") {
                if (this.allCellsFromIndex[row - 2] && this.allCellsFromIndex[row - 2][col - 1] && this.allCellsFromIndex[row - 2][col - 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 2][col - 1]);
                }
                if (this.allCellsFromIndex[row - 2] && this.allCellsFromIndex[row - 2][col + 1] && this.allCellsFromIndex[row - 2][col + 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 2][col + 1]);
                }
                if (this.allCellsFromIndex[row + 2] && this.allCellsFromIndex[row + 2][col - 1] && this.allCellsFromIndex[row + 2][col - 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 2][col - 1]);
                }
                if (this.allCellsFromIndex[row + 2] && this.allCellsFromIndex[row + 2][col + 1] && this.allCellsFromIndex[row + 2][col + 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 2][col + 1]);
                }
                if (this.allCellsFromIndex[row - 1] && this.allCellsFromIndex[row - 1][col - 2] && this.allCellsFromIndex[row - 1][col - 2].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 1][col - 2]);
                }
                if (this.allCellsFromIndex[row - 1] && this.allCellsFromIndex[row - 1][col + 2] && this.allCellsFromIndex[row - 1][col + 2].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 1][col + 2]);
                }
                if (this.allCellsFromIndex[row + 1] && this.allCellsFromIndex[row + 1][col - 2] && this.allCellsFromIndex[row + 1][col - 2].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 1][col - 2]);
                }
                if (this.allCellsFromIndex[row + 1] && this.allCellsFromIndex[row + 1][col + 2] && this.allCellsFromIndex[row + 1][col + 2].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 1][col + 2]);
                }
            } else if (pieceName === "king") {
                if (this.allCellsFromIndex[row + 1] && this.allCellsFromIndex[row + 1][col].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 1][col]);
                }
                if (this.allCellsFromIndex[row + 1] && this.allCellsFromIndex[row + 1][col + 1] && this.allCellsFromIndex[row + 1][col + 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 1][col + 1]);
                }
                if (this.allCellsFromIndex[row + 1] && this.allCellsFromIndex[row + 1][col - 1] && this.allCellsFromIndex[row + 1][col - 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row + 1][col - 1]);
                }
                if (this.allCellsFromIndex[row][col - 1] && this.allCellsFromIndex[row][col - 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row][col - 1]);
                }
                if (this.allCellsFromIndex[row][col + 1] && this.allCellsFromIndex[row][col + 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row][col + 1]);
                }
                if (this.allCellsFromIndex[row - 1] && this.allCellsFromIndex[row - 1][col].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 1][col]);
                }
                if (this.allCellsFromIndex[row - 1] && this.allCellsFromIndex[row - 1][col + 1] &&this.allCellsFromIndex[row - 1][col + 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 1][col + 1]);
                }
                if (this.allCellsFromIndex[row - 1] && this.allCellsFromIndex[row - 1][col - 1] && this.allCellsFromIndex[row - 1][col - 1].piece === "") {
                    this.moveOptionCells.push(this.allCellsFromIndex[row - 1][col - 1]);
                }
            } else if (pieceName === "rook") {
                this.checkPerpendicularMovementOptions(row, col);
            } else if (pieceName === "bishop") {
                this.checkDiagonalMovementOptions(row, col);
            } else if (pieceName === "queen") {
                this.checkPerpendicularMovementOptions(row, col);
                this.checkDiagonalMovementOptions(row, col);
            }
            
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
                this.clearMoveOptions();
                return
            }
            this.deactivateAllPieces();
            this.element.classList.add("activePiece");
            this.active = true;
            this.displayMoveOptions(this.parentCell.row, this.parentCell.col, this.name, this.colorSelection);
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