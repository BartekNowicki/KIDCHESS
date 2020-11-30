
// import { TweenMax, TimelineMax, Elastic, gsap } from 'gsap';
import bombBlack from './images/bombBlack.svg';
// import Cell from './Cell.js';
// import Block from './Block.js';
import UI from './UI.js';
import Score from './Score.js';

class Game extends UI {
    #config = { easy:  { rows: 10, cols: 6, fallSpeed: 1 } }
      
    constructor(playBtn) {
        super();
        this.wrap = null;
        this.bonus = null;
        this.playBtn = playBtn;
        this.moveLeftBtn = null;
        this.rotateLeftBtn = null;
        this.rotateRightBtn = null;
        this.dropBtn = null;
        this.moveRightBtn = null;
        this.numberOfRows = null;
        this.numberOfCols = null;
        this.speed = null;
        this.cells = [];
        this.blocks = [];
        this.board = null;
        this.boardWidth = 0;
        this.gameOver = false;
        this.deltaY = 0;
        this.deltaX = 0;
        this.counterTween = null;
        this.score = null;
        this.interval = null;
        this.total = 0;
        this.jestTestingValue = 999;
    }    

//     consoleMe = (object) => console.table(object);

//     consoleCellOccupiedStatus = () => {
//         let occupiedCells = [[],[],[],[],[],[],[],[],[],[]];
//         for (let row = 0; row<this.numberOfRows; row++) {
//             for (let col = 0; col<this.numberOfCols; col++) {
//                 occupiedCells[row][col]=this.cells[row][col].occupied;
//             }
//         }
//         // console.clear();
//         console.table(occupiedCells);
//     }
    
//     consoleInfo = () => {
//         let occupiedCells = [[],[],[],[],[],[],[],[],[],[]];
//         // occupiedCells[0][0] = "OK";
//         for (let row = 0; row<this.numberOfRows; row++) {
//             for (let col = 0; col<this.numberOfCols; col++) {
//                 occupiedCells[row][col]=this.cells[row][col].occupied;
//             }
//         }
//         console.table(occupiedCells);
                
//         // const array = [{myId: 42, name: 'John', color: 'red'}, {myId: 1337, name: 'Jane', color: 'blue'}];
//         // const transformed = array.reduce((acc, {myId, ...x}) => { acc[myId] = x; return acc}, {});   
//         // console.table(transformed);
        
//         console.group();
//         // console.table(this.blocks, ["row", "col", "stopped"]);
//         // console.warn();
//         // console.log('%c ok ', 'background: #222; color: #bada55');
//         // console.table(object);
//         // console.dir(this.blocks);
//         // console.dir(this.playBtn, {colors: true, depth: null});
//         console.groupEnd();
        
//     }
    
//     insertBlock = (row = 0, col = 0, color = "pick", situation = "none") => {
//         const initialPositionY = this.cells[row][col].getPosition()[0];
//         const initialPositionX = this.cells[row][col].getPosition()[1];
//         const initialWidth = this.cells[row][col].getDimentions()[0];
//         const initialHeight = this.cells[row][col].getDimentions()[1];
//         const newBlock = new Block(row, col, color, initialPositionY, initialPositionX, initialWidth, initialHeight, this.deltaY, this.deltaX, situation, this.cellGetter, this.cellSetter, this.nextBlokRequester, this.keepCounterAt, this.clearBoard, this.gameOverChecker);
//         this.blocks.push(newBlock);
//         // console.log(newBlock.element);
//     }
    
//     cellGetter = () => {
//         return [...this.cells];
//     }

//     cellSetter = (row, col, value) => {
//         for (const cell of this.cells.flat()) {
//             if (cell.row === row && cell.col === col) {
//                 cell.occupied = value;
//                 // console.log('SETTING ', cell.row, cell.col, 'AS ', cell.occupied );
//                 // debugger
//             }
//         };
//     }

//     gameOverChecker = () => this.gameOver;    
    
//     dropAllHangingBlocks = () => {
//         this.updateCellOccupiedStatus();
//         this.updateHangingStatus();
//         for (const block of this.blocks) {
//             if (block.isHanging) {
//                 // console.log(block.element);
//             if (block.downTween && !this.cells[block.row+1][block.col].occupied) {
//                 block.downTween.play();
//             }
//             }
//         }        
//     };

//     markOneAboveAsSingle = (checkRow, checkCol) => {
//         // console.log('MARKING SINGLES@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
//         for (const block of this.blocks) {
//             if (!block.isGone) {
//                 if (block.row === checkRow-1 && block.col === checkCol) {
//                     block.situation = "single";
//                 }
//             }
//         }
//     }

//     updateHangingStatus = () => {
//         for (const block of this.blocks) {
//             if (!block.isGone && block.row<9) {
//                 if (this.cells[block.row+1][block.col].occupied) {
//                     block.isHanging = false;
//                     block.element.style.border = 'none';                    
//                 } else if (block.situation === "single" && !this.cells[block.row+1][block.col].occupied) {
//                     block.isHanging = true;
//                     block.element.style.border = '4px solid green';
//                 }
//             } else block.isHanging = false;
//         }
//     }

//     updateCellOccupiedStatus = () => {
//     for (const cell of this.cells.flat()) {
//         const matchingBlock = this.blocks.find(block => block.row === cell.row && block.col === cell.col);
//         // console.log('MATCHING BLOCK = ', matchingBlock);
//         if (!matchingBlock||matchingBlock.isGone) {
//             // console.warn('MATCHING BLOCK UNDEFINED!');
//             cell.occupied = false;
//             // console.log(cell);
//             cell.element.style.backgroundColor = "";
//         } else {
//             cell.occupied = true;
//             cell.element.style.backgroundColor = "yellow";
//         }        
//     }
// }


//     removeBlock = (block) => {
//         this.score.setValue(this.total++);
//         // debugger
        
//         // block.element.style.border = "1px solid red";
//         // debugger
//         // console.log(block.element);
//         block.element.style.left = "0%";
//         block.element.style.top = "0%";
//         block.isGone = true;
//         block.isHanging = false;
//         block.rotatable = false;
        
//         this.cellSetter(block.row, block.col, false);
//         this.markOneAboveAsSingle(block.row, block.col);
//         this.dropAllHangingBlocks();
//     }

//     clearBoard = () => {

//         let blocksStoppedBlack = [];
//         let blocksStoppedBlue = [];
//         let blocksStoppedOrange = [];
//         let blocksStoppedRed = [];
//         let blocksStoppedViolet = [];   
        
//         this.blocks.forEach(block => {
//             if (!block.isGone){
//                 if (block.stopped && block.color === "black") {blocksStoppedBlack.push(block);}
//                 if (block.stopped && block.color === "blue") {blocksStoppedBlue.push(block);}
//                 if (block.stopped && block.color === "orange") {blocksStoppedOrange.push(block);}
//                 if (block.stopped && block.color === "red") {blocksStoppedRed.push(block);}
//                 if (block.stopped && block.color === "violet") {blocksStoppedViolet.push(block);}
//             }
            
//         });
        
//         //this filter allows to find all blocks of a given color in a row
//         let filterName = "isRow"; 
//         for (let x = 0; x<=this.numberOfRows; x++) {
//             this[`${filterName}${x}`] = (element) => element.row === x; 
//             // it will render e.g. a filter such as: 
//             //this.isRow9 = (element) => element.row === 9;
//         }     
//         //////////////////////////////////////////////////////
//         const blackRows = [
//             blocksStoppedBlack.filter(this.isRow0),
//             blocksStoppedBlack.filter(this.isRow1),
//             blocksStoppedBlack.filter(this.isRow2),
//             blocksStoppedBlack.filter(this.isRow3),
//             blocksStoppedBlack.filter(this.isRow4),
//             blocksStoppedBlack.filter(this.isRow5),
//             blocksStoppedBlack.filter(this.isRow6),
//             blocksStoppedBlack.filter(this.isRow7),
//             blocksStoppedBlack.filter(this.isRow8),
//             blocksStoppedBlack.filter(this.isRow9)
//         ];
        
//         for (let y = 0; y<blackRows.length; y++){
//             for (let i = 0; i<blackRows[y].length-1; i++) {
//                 if (Math.abs(blackRows[y][i+1].col - blackRows[y][i].col) === 1){
//                     this.removeBlock(blackRows[y][i]);
//                     this.removeBlock(blackRows[y][i+1]);
//                 }
//             }
//         }
//         //////////////////////////////////////////////////////
//         const violetRows = [
//             blocksStoppedViolet.filter(this.isRow0),
//             blocksStoppedViolet.filter(this.isRow1),
//             blocksStoppedViolet.filter(this.isRow2),
//             blocksStoppedViolet.filter(this.isRow3),
//             blocksStoppedViolet.filter(this.isRow4),
//             blocksStoppedViolet.filter(this.isRow5),
//             blocksStoppedViolet.filter(this.isRow6),
//             blocksStoppedViolet.filter(this.isRow7),
//             blocksStoppedViolet.filter(this.isRow8),
//             blocksStoppedViolet.filter(this.isRow9)
//         ];
        
//         for (let y = 0; y<violetRows.length; y++){
//             for (let i = 0; i<violetRows[y].length-1; i++) {
//                 if (Math.abs(violetRows[y][i+1].col - violetRows[y][i].col) === 1){
//                     this.removeBlock(violetRows[y][i]);
//                     this.removeBlock(violetRows[y][i+1]);
//                 }
//             }
//         }
//          //////////////////////////////////////////////////////
//          const orangeRows = [
//             blocksStoppedOrange.filter(this.isRow0),
//             blocksStoppedOrange.filter(this.isRow1),
//             blocksStoppedOrange.filter(this.isRow2),
//             blocksStoppedOrange.filter(this.isRow3),
//             blocksStoppedOrange.filter(this.isRow4),
//             blocksStoppedOrange.filter(this.isRow5),
//             blocksStoppedOrange.filter(this.isRow6),
//             blocksStoppedOrange.filter(this.isRow7),
//             blocksStoppedOrange.filter(this.isRow8),
//             blocksStoppedOrange.filter(this.isRow9)
//         ];
        
//         for (let y = 0; y<orangeRows.length; y++){
//             for (let i = 0; i<orangeRows[y].length-1; i++) {
//                 if (Math.abs(orangeRows[y][i+1].col - orangeRows[y][i].col) === 1){
//                     this.removeBlock(orangeRows[y][i]);
//                     this.removeBlock(orangeRows[y][i+1]);
//                 }
//             }
//         }
//         //////////////////////////////////////////////////////
//         const redRows = [
//             blocksStoppedRed.filter(this.isRow0),
//             blocksStoppedRed.filter(this.isRow1),
//             blocksStoppedRed.filter(this.isRow2),
//             blocksStoppedRed.filter(this.isRow3),
//             blocksStoppedRed.filter(this.isRow4),
//             blocksStoppedRed.filter(this.isRow5),
//             blocksStoppedRed.filter(this.isRow6),
//             blocksStoppedRed.filter(this.isRow7),
//             blocksStoppedRed.filter(this.isRow8),
//             blocksStoppedRed.filter(this.isRow9)
//         ];

        
        
//         for (let y = 0; y<redRows.length; y++){
//             for (let i = 0; i<redRows[y].length-1; i++) {
//                 if (Math.abs(redRows[y][i+1].col - redRows[y][i].col) === 1){
//                     this.removeBlock(redRows[y][i]);
//                     this.removeBlock(redRows[y][i+1]);
//                 }
//             }
//         }
//       //////////////////////////////////////////////////////
//       const blueRows = [
//         blocksStoppedBlue.filter(this.isRow0),
//         blocksStoppedBlue.filter(this.isRow1),
//         blocksStoppedBlue.filter(this.isRow2),
//         blocksStoppedBlue.filter(this.isRow3),
//         blocksStoppedBlue.filter(this.isRow4),
//         blocksStoppedBlue.filter(this.isRow5),
//         blocksStoppedBlue.filter(this.isRow6),
//         blocksStoppedBlue.filter(this.isRow7),
//         blocksStoppedBlue.filter(this.isRow8),
//         blocksStoppedBlue.filter(this.isRow9)
//     ];
    
//     for (let y = 0; y<blueRows.length; y++){
//         for (let i = 0; i<blueRows[y].length-1; i++) {
//             if (Math.abs(blueRows[y][i+1].col - blueRows[y][i].col) === 1){
//                 this.removeBlock(blueRows[y][i]);
//                 this.removeBlock(blueRows[y][i+1]);
//             }
//         }
//     }
//     this.updateCellOccupiedStatus();            
//     this.updateHangingStatus();
//     this.dropAllHangingBlocks();

//     }
    
//     insertNewBunch = () => {         
//         this.consoleCellOccupiedStatus();            
//         this.insertBlock(0,2, "pick", "topleft");
//         this.insertBlock(0,3,"pick", "topright");
//         this.insertBlock(1,2,"pick", "bottomleft");
//         this.insertBlock(1,3,"pick", "bottomright");
//         }

//     nextBlokRequester = () => {
//         if (this.gameOver) return
//         if (this.cells[1][2].occupied || this.cells[1][3].occupied || this.cells[2][2].occupied || this.cells[2][3].occupied) {
//             this.gameOver = true;
//             this.insertNewBunch();
//             this.endGame();
//             return
//         }
//         this.insertNewBunch();
//     }    
    
//     startAnimationCounter = () => {
//         if (!document.querySelector(".nextBlock")) return alert('missing DOM NEXT BLOCK element!');
//         const someElement = document.querySelector('.nextBlock');
//         this.counterTween = gsap.to(someElement, {x: 0, repeat: 0, duration: 4, delay: 0, onComplete: () => {
//         //   console.log('COUNTER EXHAUSTED, REQUESTING BLOCK');
//           this.nextBlokRequester();
//         }, paused: true});               
//       }

//     keepCounterAt = (time = 0) => {
//         if(this.gameOver) return
//         //keep counter animation playhead at time = time
//         this.counterTween.play(time);
//         // console.log(`COUNTER: ${time}`);
//     }

//     dropBlock = () => {
//         if (this.gameOver) return
//         for (const block of this.blocks) {
//             if (block.downTween !== null) {
//                 block.downTween.timeScale(5);
//             }
//         }    
//     }

//     rotateBunch = (direction) => {
//         if (this.gameOver) return
//         // console.log('rotating bunch: ', direction);
//         for (const block of this.blocks) {
//             if (block.rotatable) {
//                 if (direction === "left") {
//                     if (block.situation === "topright") {
//                         block.leftTween.play();                    
//                         block.situation = "topleft";
//                     } else if (block.situation === "bottomleft") {
//                         block.rightTween.play();                    
//                         block.situation = "bottomright";
//                     } else if (block.situation === "topleft") {
//                         block.downTween.progress(1);                    
//                         block.situation = "bottomleft";
//                     } else if (block.situation === "bottomright") {
//                         // console.log(block.element);
//                         block.situation = "topright";
//                         block.posY-=block.deltaY;
//                         block.updateBlockPosition();
//                     }
//                     block.downTween.progress(0);   
//                 } if (direction === "right") {
//                     if (block.situation === "bottomright") {
//                         block.leftTween.play();                    
//                         block.situation = "bottomleft";
//                     } else if (block.situation === "topleft") {
//                         block.rightTween.play();                    
//                         block.situation = "topright";
//                     } else if (block.situation === "topright") {
//                         block.downTween.progress(1);                    
//                         block.situation = "bottomright";
//                     } else if (block.situation === "bottomleft") {
//                         // console.log(block.element);
//                         block.situation = "topleft";
//                         block.posY-=block.deltaY;
//                         block.updateBlockPosition();
//                     }
//                     block.downTween.progress(0);   
//                 }
//             }
//         }
//     }

    

//     startGame = () => {        
//         this.dropBtn.addEventListener('click', this.dropBlock);
//         this.moveLeftBtn.addEventListener('click', () => this.moveHorizontally("left"));
//         this.moveRightBtn.addEventListener('click', () => this.moveHorizontally("right")); 
//         this.rotateLeftBtn.addEventListener('click', () => this.rotateBunch("left")); 
//         this.rotateRightBtn.addEventListener('click', () => this.rotateBunch("right"));
    
//         const score = new Score(0);
//         this.score = score;
//         this.score.setValue(0);
//         this.startAnimationCounter();
//         this.deltaY = this.cells[1][0].getPosition()[0] - this.cells[0][0].getPosition()[0];
//         this.deltaX = this.cells[0][1].getPosition()[1] - this.cells[0][0].getPosition()[1];
//         // console.log('starting game...');
//         this.playBtn.classList.toggle('hide');
//         this.nextBlokRequester();

//         let x = 0;
//         const intervalus = setInterval(()=>{            
//         this.clearBoard();
//         // this.score.setValue(x++);
//         }, 10);
//         this.interval = intervalus;
//     }

//     endGame = () => {
//         clearInterval(this.interval);
//         this.playBtn.classList.toggle('hide');
//         console.log('GAME OVER: ', this.gameOver);
//         this.counterTween.kill();
//         this.dropBtn.removeEventListener('click', this.dropBlock);
//         //kill all animations
//         for (const block of this.blocks) {
//             block.endFall();
//             if (block.downTween) { block.downTween.kill(); }
//             if (block.leftTween) { block.leftTween.kill(); }
//             if (block.rightTween) { block.rightTween.kill(); }
//         }
//     }
    
//     generateCells = () => {
//     // console.log('generating cells...');
//     for (let row = 0; row<this.numberOfRows; row++) {
//         this.cells[row] = [];
//         for (let col = 0; col<this.numberOfCols; col++){
//             this.cells[row].push(new Cell(row, col));
//         }
//     }  
//     }

//     makeCellsSquareByLimitingWrapper = () => {
//         //must be performed at the end of initializing
//         const cellRenderedHeight = this.cells[0][0].getDimentions()[1];
//         // console.log('cell rendered height: ', cellRenderedHeight);
//         this.wrap.style.width = cellRenderedHeight*6+"px";
//         //repeat the measuring process after board squeezing
//         this.takeBoardMeasurements();        
//     }

//     renderBoard = () => {
//         // console.log(this.cells);
//         this.boardWidth = this.board.offsetWidth;
//         this.cells.flat().forEach(cell => {
//             const newHtml = cell.createElement();
//             this.board.insertAdjacentHTML("beforeend", newHtml); 
//         // console.log(newHtml);
//             cell.element = cell.getElement(cell.selector);
//         // console.log(cell.element);
//         });
//     }

//     takeBoardMeasurements = () => {
//         this.cells.flat().forEach(cell => {
//         cell.takeMeasurements();
//         cell.assignClickListener();
//         })
//     }

//     showBoardMeasurements = () => {
//         this.cells.flat().forEach(cell => {
//         // console.log('cell position: ', cell.getPosition());
//         // console.log('cell dimentions: ', cell.getDimentions());
//         })
//     }
    
//     showCellPositioning = (row, col) => {
//         console.log(`cell ${row} ${col} position: `, this.cells[row][col].getPosition());
//     }

//     checkIfCellSidesFree = (block, direction) => {
//         const x = direction === "left" ? -1 : 1;
//         if (direction === "left") {
//             if (block.situation === "topleft" || block.situation === "bottomleft"){
//                 if (block.col === 0) return false
//             } else if (block.col === 1) return false
//         } else if (direction === "right") {
//             if (block.situation === "topright" || block.situation === "bottomright"){
//                 if (block.col === this.numberOfCols-1) return false
//             } else if (block.col === this.numberOfCols-2) return false
//         }
//         // console.log(`CHECKING ${direction}...by ${x} columns: `, col+x, col+2*x);
//         for (const cell of this.cells.flat()) {
//           if (cell.row === block.row) {
//              if (cell.col === block.col+x && cell.occupied === true) return false
//              if (cell.col === block.col+2*x && cell.occupied === true) return false
//             }
//       } return true
//     }
  
//     moveHorizontally = (direction) => {       
//         // debugger
//         if (this.gameOver) return
//         for (const block of this.blocks) {
//             if (!block.isStopped && block.situation !== "single") {
//                 // console.log('checking: ', this.checkIfCellSidesFree(block, direction));
//                 if (!this.checkIfCellSidesFree(block, direction)) return
//                 // console.log('moving left this block', block.element);
//                 direction === "left" ? block.leftTween.play() : block.rightTween.play(); 
//             }
//         }
//     }

    grabDOMelements = () => {
        this.wrap = this.getElement(this.UiSelectors.wrap);  
        this.bonus = this.getElement(this.UiSelectors.bonusImg);
        this.moveLeftBtn = this.getElement(this.UiSelectors.moveLeftBtn);
        this.rotateLeftBtn = this.getElement(this.UiSelectors.rotateLeftBtn);
        this.rotateRightBtn = this.getElement(this.UiSelectors.rotateRightBtn);
        this.moveRightBtn = this.getElement(this.UiSelectors.moveRightBtn);
        this.dropBtn = this.getElement(this.UiSelectors.dropBtn);
        this.board = this.getElement(this.UiSelectors.board);
        // console.log(this.board);  
        // console.log(this.moveLeftBtn, this.rotateLeftBtn, this.rotateRightBtn, this.moveRightBtn);  
    }
    
    addInitialListeners = () => {
        this.playBtn.addEventListener('click', this.startGame);
    }

    initialize = (speed = this.#config.easy.fallSpeed) => {
        this.grabDOMelements();
        this.addInitialListeners();
        this.bonus.src = bombBlack;
        this.numberOfRows = this.#config.easy.rows;
        this.numberOfCols = this.#config.easy.cols;
        this.speed = speed;
        this.boardWidth = this.board.offsetWidth;       

    
//     this.generateCells();
//     this.renderBoard();
//     this.takeBoardMeasurements();
//     this.makeCellsSquareByLimitingWrapper();
//     // this.showBoardMeasurements();
//     // this.showCellPositioning(0, 0);
//     // console.log('initializing game: ', this.numberOfRows, this.numberOfCols, this.speed);
//     // changing css (not scss) variable back to transparent
//     document.documentElement.style.setProperty("--testVariable", "transparent");
    }   
}

export default Game;


