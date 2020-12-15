import { loaderLoadedSvgHTML, allCells, allPieces, pieceMovementSpeed } from './index.js';

export class Piece {
        constructor (pieceName, parentCell, colorSelection, smaller) {
            this.name = pieceName;
            this.parentCell = parentCell;
            this.colorSelection = colorSelection;
            this.smaller = smaller;
            this.element = null;
            this.fromTop = null;
            this.fromLeft = null;
            this.active = false;
            this.moveOptionCells = [];
            this.piecesToAttack = [];
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
            this.pieceMovementSpeedFromIndex = pieceMovementSpeed;
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

        //CHECKS IF THE ROW EXISTS, IF SO IF THE COLUMN EXISTS, IF SO IF THE CELL IS EMPTY
        //IF EMPTY THE CELL IS ADDED TO THE POTENTIAL MOVEMENT LIST AND THE FUNCTION RETURNS TRUE
        checkAndIncludeAsMovementOption(row, col) {
            if (this.allCellsFromIndex[row] && this.allCellsFromIndex[row][col] && this.allCellsFromIndex[row][col].piece === "")  {
                this.moveOptionCells.push(this.allCellsFromIndex[row][col]);
                return true
            }
            return false
        }

        checkPerpendicularMovementOptions(row, col, onlyOneCell = false) {            
            let i = 1;
            this.doneCheckingUpword = false;
            this.doneCheckingDownword = false;
            this.doneCheckingLeftword = false;
            this.doneCheckingRightword = false;
            while(!this.doneCheckingUpword) {  //
                if (this.checkAndIncludeAsMovementOption(row - i, col)) {
                    onlyOneCell ? this.doneCheckingUpword = true : i++;
                } else {
                    this.doneCheckingUpword = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDownword) {
                if (this.checkAndIncludeAsMovementOption(row + i, col)) {
                    onlyOneCell ? this.doneCheckingDownword = true : i++;
                } else {
                    this.doneCheckingDownword = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingLeftword) {
                if (this.checkAndIncludeAsMovementOption(row, col - i)) {
                    onlyOneCell ? this.doneCheckingLeftword = true : i++;
                } else {
                    this.doneCheckingLeftword = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingRightword) {
                if (this.checkAndIncludeAsMovementOption(row, col + i)) {
                    onlyOneCell ? this.doneCheckingRightword = true : i++;
                } else {
                    this.doneCheckingRightword = true;
                    i = 1;
                }
            }
        }        

        checkDiagonalMovementOptions(row, col, onlyOneCell = false) {
            let i = 1;
            this.doneCheckingDiagonallyupleft = false;
            this.doneCheckingDiagonallyupright = false;
            this.doneCheckingDiagonallydownleft = false;
            this.doneCheckingDiagonallydownright = false;
            while(!this.doneCheckingDiagonallyupleft) {
                if (this.checkAndIncludeAsMovementOption(row - i, col - i)) {
                    onlyOneCell ? this.doneCheckingDiagonallyupleft = true : i++;
                } else {
                    this.doneCheckingDiagonallyupleft = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDiagonallyupright) {
                if (this.checkAndIncludeAsMovementOption(row - i, col + i)) {
                    onlyOneCell ? this.doneCheckingDiagonallyupright = true : i++;
                } else {
                    this.doneCheckingDiagonallyupright = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDiagonallydownright) {
                if (this.checkAndIncludeAsMovementOption(row + i, col + i)) {
                    onlyOneCell ? this.doneCheckingDiagonallydownright = true : i++;
                } else {
                    this.doneCheckingDiagonallydownright = true;
                    i = 1;
                }
            }
            while(!this.doneCheckingDiagonallydownleft) {
                if (this.checkAndIncludeAsMovementOption(row + i, col - i)) {
                    onlyOneCell ? this.doneCheckingDiagonallydownleft = true : i++;
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
                if (colorSelection === "first") {
                    this.checkAndIncludeAsMovementOption(row - 1, col);
                    if (row === 6) {
                        this.checkAndIncludeAsMovementOption(row - 2, col);
                    }
                } else if (colorSelection === "second") {
                    this.checkAndIncludeAsMovementOption(row + 1, col);
                    if (row === 1) {
                        this.checkAndIncludeAsMovementOption(row + 2, col);
                    }
                }
            } else if (pieceName === "knight") {
                this.checkAndIncludeAsMovementOption(row - 2, col - 1);
                this.checkAndIncludeAsMovementOption(row - 2, col + 1);
                this.checkAndIncludeAsMovementOption(row - 1, col - 2);
                this.checkAndIncludeAsMovementOption(row - 1, col + 2);
                this.checkAndIncludeAsMovementOption(row + 1, col - 2);
                this.checkAndIncludeAsMovementOption(row + 1, col + 2);
                this.checkAndIncludeAsMovementOption(row + 2, col - 1);
                this.checkAndIncludeAsMovementOption(row + 2, col + 1);
            } else if (pieceName === "king") {
                this.checkPerpendicularMovementOptions(row, col, true);
                this.checkDiagonalMovementOptions(row, col, true);
            } else if (pieceName === "rook") {
                this.checkPerpendicularMovementOptions(row, col, false);
            } else if (pieceName === "bishop") {
                this.checkDiagonalMovementOptions(row, col, false);
            } else if (pieceName === "queen") {
                this.checkPerpendicularMovementOptions(row, col, false);
                this.checkDiagonalMovementOptions(row, col, false);
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

        markTheCellIfItExists(row, col, color) {            
            if (this.allCellsFromIndex[row]
                && this.allCellsFromIndex[row][col]) {
                    this.allCellsFromIndex[row][col].element.style.border = "1px dashed " + color; 
                    setTimeout(() => { this.allCellsFromIndex[row][col].element.style.border = ""; }, 2000);
                }                 
        }

        knightLooksForEnemyCells(row, col, colorSelection) {
            this.markTheCellIfItExists(row, col, "white");                                
            if (this.allCellsFromIndex[row] 
                && this.allCellsFromIndex[row][col] 
                && this.allCellsFromIndex[row][col].piece !== "" 
                && this.allCellsFromIndex[row][col].pieceColorSelection !== colorSelection) {
                return this.allCellsFromIndex[row][col];
                }                
        }

        lookForEnemyCells(direction, onlyOneCell = false) {            
            let i = 1;
            //itertors will allow to switch directions when looking
            let RLiterator;
            let UDiterator;
            let rightLeftSwitch;
            let upDownSwitch;
            let row = this.parentCell.row;
            let col = this.parentCell.col;
            if (direction === "upLeft") {
                rightLeftSwitch = 1;
                upDownSwitch = 1;
            } else if (direction === "downLeft") {
                rightLeftSwitch = 1;
                upDownSwitch = -1;
            } else if (direction === "upRight") {
                rightLeftSwitch = -1;         
                upDownSwitch = 1;       
            } else if (direction === "downRight") {
                rightLeftSwitch = -1;         
                upDownSwitch = -1;       
            }  else if (direction === "left") {
                rightLeftSwitch = 1;         
                upDownSwitch = 0;       
            }  else if (direction === "right") {
                rightLeftSwitch = -1;         
                upDownSwitch = 0;       
            }  else if (direction === "up") {
                rightLeftSwitch = 0;         
                upDownSwitch = 1;       
            }  else if (direction === "down") {
                rightLeftSwitch = 0;         
                upDownSwitch = -1;       
            } 

            
            // console.log('SWITCH::::::', direction, rightLeftSwitch);
            let keepLooking = true;
            const enemyColorSelection = this.colorSelection === "first" ? "second" : "first";
            // console.log(`LOOKING FOR ${enemyColorSelection} ENEMIES ${direction}`);

            while (keepLooking) {
                RLiterator = i * rightLeftSwitch;
                UDiterator = i * upDownSwitch;
                // TEST TO SEE WHERE LOOKING FOR ENEMY CELLS
                this.markTheCellIfItExists(row - UDiterator, col - RLiterator, "white");
                                
                if (this.allCellsFromIndex[row - UDiterator]
                    && this.allCellsFromIndex[row - UDiterator][col - RLiterator] 
                    && this.allCellsFromIndex[row - UDiterator][col - RLiterator].piece !== "")
                    {
                        keepLooking = false;
                        if (this.allCellsFromIndex[row - UDiterator][col - RLiterator].pieceColorSelection !== enemyColorSelection) return null
                        return this.allCellsFromIndex[row - UDiterator][col - RLiterator]
                    } else {
                        if (onlyOneCell) return null
                        // console.log('looking...', i, keepLooking);
                        i === 8 ? keepLooking = false : i++;                        
                    }                  
            }  
            return null          

        }

        putCellPieceOnTargetList(cell) {
            this.allPiecesFromIndex.forEach(piece => {
                if (piece.parentCell === cell) {
                    this.piecesToAttack.push(piece);
                }
            });
        }

        findPiecesToAttack() {
            if (this.name === "pawn") {
                if (this.row === 0 || this.row === 7) return
            }
            this.piecesToAttack.length = 0;

            if (this.name === "pawn" && this.colorSelection === "first") {
                this.lookForEnemyCells("upLeft", true) 
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("upLeft", true))
                : console.log('NO ENEMIES FOUND UP LEFT...');

                this.lookForEnemyCells("upRight", true)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("upRight", true))
                : console.log('NO ENEMIES FOUND UP RIGHT...');
                
            } else if (this.name === "pawn" && this.colorSelection === "second") {
                this.lookForEnemyCells("downLeft", true)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("downLeft", true))
                : console.log('NO ENEMIES FOUND DOWN LEFT...');

                this.lookForEnemyCells("downRight", true)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("downRight", true))
                : console.log('NO ENEMIES FOUND DOWN RIGHT...');
            } else if (this.name === "king" || this.name === "queen") {

                const onlyOneCell = this.name === "king" ? true : false;
                this.lookForEnemyCells("upLeft", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("upLeft", onlyOneCell))
                : console.log('NO ENEMIES FOUND UP LEFT...');

                this.lookForEnemyCells("upRight", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("upRight", onlyOneCell))
                : console.log('NO ENEMIES FOUND UP RIGHT...')

                this.lookForEnemyCells("downLeft", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("downLeft", onlyOneCell))
                : console.log('NO ENEMIES FOUND DOWN LEFT...');

                this.lookForEnemyCells("downRight", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("downRight", onlyOneCell))
                : console.log('NO ENEMIES FOUND DOWN RIGHT...');

                this.lookForEnemyCells("left", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("left", onlyOneCell))
                : console.log('NO ENEMIES FOUND LEFT...');

                this.lookForEnemyCells("right", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("right", onlyOneCell))
                : console.log('NO ENEMIES FOUND RIGHT...');

                this.lookForEnemyCells("down", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("down", onlyOneCell))
                : console.log('NO ENEMIES FOUND DOWN...');
                
                this.lookForEnemyCells("up", onlyOneCell)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("up", onlyOneCell))
                : console.log('NO ENEMIES FOUND UP...');
            } else if (this.name === "rook") { 
                this.lookForEnemyCells("left", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("left", false))
                : console.log('NO ENEMIES FOUND LEFT...');

                this.lookForEnemyCells("right", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("right", false))
                : console.log('NO ENEMIES FOUND RIGHT...');

                this.lookForEnemyCells("down", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("down", false))
                : console.log('NO ENEMIES FOUND DOWN...');
                
                this.lookForEnemyCells("up", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("up", false))
                : console.log('NO ENEMIES FOUND UP...');
            } else if (this.name === "bishop") { 
                this.lookForEnemyCells("upLeft", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("upLeft", false))
                : console.log('NO ENEMIES FOUND UP LEFT...');

                this.lookForEnemyCells("upRight", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("upRight", false))
                : console.log('NO ENEMIES FOUND UP RIGHT...')

                this.lookForEnemyCells("downLeft", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("downLeft", false))
                : console.log('NO ENEMIES FOUND DOWN LEFT...');

                this.lookForEnemyCells("downRight", false)
                ? this.putCellPieceOnTargetList(this.lookForEnemyCells("downRight", false))
                : console.log('NO ENEMIES FOUND DOWN RIGHT...');                
            } else if (this.name === "knight") {

                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row - 2, this.parentCell.col - 1, this.colorSelection));
                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row - 2, this.parentCell.col + 1, this.colorSelection));
                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row - 1, this.parentCell.col - 2, this.colorSelection));
                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row - 1, this.parentCell.col + 2, this.colorSelection));
                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row + 1, this.parentCell.col - 2, this.colorSelection));
                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row + 1, this.parentCell.col + 2, this.colorSelection));
                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row + 2, this.parentCell.col - 1, this.colorSelection));
                this.putCellPieceOnTargetList(this.knightLooksForEnemyCells(this.parentCell.row + 2, this.parentCell.col + 1, this.colorSelection));
            }
        }

        shoot() {
            this.findPiecesToAttack();            
            this.piecesToAttack.forEach(piece => {
                //console.log(`${this.name} --> ${cell.row} ${cell.col}`);
                piece.element.style.border = "1px solid yellow";
                setTimeout(() => {piece.element.style.border = "";}, 3000);

                const bullet = document.createElement('div');
                bullet.style.width = this.element.style.width;
                bullet.style.height = this.element.style.height;
                bullet.classList.add('bullet');
                this.element.appendChild(bullet);
                console.log(this.element, bullet);
                
            });

            //MAKE SURE TO REMOVE THE BULLET ELEMENT AFTER THE HIT

        }
        
        slideThePiece = (event) => {    
            //MUST USE ARROW FUNCTION OTHERWISE REMOVING ALL LISTENERS WOULD REQUIRE BINDING /// AND STORING NEW REFERENCES TO DOZENS OF BOUND FUNCTIONS, ONE PER EACH POSSIBLE //MOVE DESTINATION OF A PIECE
            this.moveOptionCells.forEach(cell => {
                if (cell.element === event.target) {
                    
                    this.element.style.left = `${cell.fromLeft}px`;
                    this.element.style.top = `${cell.fromTop}px`;
                    this.parentCell.piece = "";
                    this.parentCell = cell;
                    this.parentCell.piece = this.name;
                    this.parentCell.pieceColorSelection = this.colorSelection;
                    

                    //EITHER SETTIMEOUT OR LISTENER FOR ANIMATIONEND
                    setTimeout(() => {
                        this.shoot();
                        // }, parseInt(this.pieceMovementSpeedFromIndex + 300));
                    }, 0);
                   
                    this.clearMoveOptions();
                    this.deactivateAllPieces();
                    this.removeAllMoveDestinationListeners();
                    this.removeAllMoveDestinationListenersOfOtherPieces();   
                }
            });
        }

        addMoveDestinationListeners() {
            // console.log('ACTIVATING MOVE LISTENERS TO', this.moveOptionCells);
            for (const destinationCell of this.moveOptionCells) {
                destinationCell.element.addEventListener('click', this.slideThePiece);
            }
        }

        removeAllMoveDestinationListeners() {
            for (const destinationCell of this.moveOptionCells) {
                destinationCell.element.removeEventListener('click', this.slideThePiece);
            }
        } 

        removeAllMoveDestinationListenersOfOtherPieces() {
            this.allPiecesFromIndex.forEach((piece, index) => {
                if (index !== this.allPiecesFromIndex.indexOf(this) && piece.moveOptionCells.length) {
                    // console.log(`${piece.name} moveOptions: ${piece.moveOptionCells.length}`);
                    piece.removeAllMoveDestinationListeners();
                    console.log(`ALL MOVE LISTENERS SET BY ${piece.name} DEACTIVATED`);
                }
                });
        } 

        handlePieceClick() {
            if (this.active) {
                this.deactivateAllPieces();
                this.removeAllMoveDestinationListeners();
                this.clearMoveOptions();                
                return
            }
            this.deactivateAllPieces();
            this.element.classList.add("activePiece");
            this.active = true;
            this.displayMoveOptions(this.parentCell.row, this.parentCell.col, this.name, this.colorSelection);
            this.removeAllMoveDestinationListenersOfOtherPieces();
            this.addMoveDestinationListeners();
            // console.log(`${this.colorSelection} ${this.name} ACTIVATED: ${this.active}`);
            // console.log('MY INDEX: ', this.allPiecesFromIndex.indexOf(this));    
        }
        
        createThePiece() {
            const chessPieceHTML = loaderLoadedSvgHTML[this.findPieceIndex(this.name)];
            this.parentCell.piece = this.name;
            this.parentCell.pieceColorSelection = this.colorSelection;
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